import React from "react"
import { Link } from "react-router-dom"

export default class Users extends React.Component {
  state = {
    count: 0,
    users: [],
    user: {},
    posts: [],
    selectedId: 0,
    loading: false,
    postsLoading: false
  }

  getPosts = userId => {
    this.setState({ selectedId: userId })
    this.setState({ postsLoading: true })
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({ posts: json, postsLoading: false })
      })
  }

  getData = () => {
    this.setState({ loading: true })
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({ users: json })
        //
        this.setState({ loading: false })
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>
    }

    return (
      <div className="App">
        <div
          style={{
            display: "flex"
          }}
        >
          <div style={{ flex: 1 }}>
            <h2>Users</h2>
            {this.state.users.map(user => {
              return (
                <Link to={"/posts/" + user.id}>
                  <UserCard
                    selected={this.state.selectedId === user.id}
                    user={user}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const UserCard = ({ user, onClick, selected }) => {
  return (
    <Card selected={selected} userId={user.id}>
      <span
        style={{
          fontSize: 24,
          fontWeight: 600
        }}
      >
        {user.name}
      </span>
      <br />
      <span>@{user.username}</span>
      <br />
      <span>📱 {user.phone}</span>
      <br />
      <span>📧 {user.email}</span>
      <br />
      <span>🌐 {user.website}</span>
      <br />
    </Card>
  )
}

const Card = props => {
  return (
    <div style={props.selected ? styles.selectedCard : styles.card}>
      {props.children}
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: "#eee",
    borderRadius: 8,
    padding: 4,
    margin: 4
  },
  selectedCard: {
    backgroundColor: "#CCFCD4",
    borderRadius: 8,
    padding: 4,
    margin: 4
  }
}
