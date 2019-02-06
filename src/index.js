import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter, Route ,Link} from "react-router-dom";
import Home from "./screens/Home";
import Teams from "./screens/Teams";
import AddConferenceRoom from "./screens/AddConferenceRoom";
import Posts from "./screens/Posts";
import {Image ,Menu} from "semantic-ui-react";
import Background from "./images/back1.jpg"
class App extends React.Component {
  state = {
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render(){
    const { activeItem } = this.state
  return (
    <div  className="login-form"
  >
    
    <Menu stackable>
    <Menu.Item>
          <h2>Mark</h2>
        </Menu.Item>
        <Menu.Item
          name='ConferenceRoom'>
        <Link to="/home">
          Home
        </Link></Menu.Item>
<Menu.Item
          name='ConferenceRoom'
        >
    <Link to="/AddConferenceRoom">
          Conference Room
        </Link>  </Menu.Item>

        <Menu.Item name='reviews'>
<Link to="/Teams">
          Teams
          </Link>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
        >
          Upcoming Events
        </Menu.Item>
  </Menu>
      <Route path="/home" component={Home} exact />
      <Route path="/Teams" component={Teams} exact />
      <Route path="/AddConferenceRoom" component={AddConferenceRoom} exact />
      <Route path="/posts/:userId" component={Posts} />
    </div>
  );
}
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
