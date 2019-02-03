import React, { Component } from "react"
import { Link } from "react-router-dom"

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/details">Details</Link>
      </div>
    )
  }
}

export default Home
