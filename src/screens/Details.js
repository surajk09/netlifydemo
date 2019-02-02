import React, { Component } from "react"
import { Link } from "react-router-dom"

class Details extends React.Component {
  render() {
    return (
      <div>
        <h2>Details</h2>
        <Link to="/home">Go back Home</Link>
      </div>
    )
  }
}

export default Details
