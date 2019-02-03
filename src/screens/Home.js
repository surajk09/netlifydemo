import React, { Component } from "react"
import { Link } from "react-router-dom"
import {Image} from "semantic-ui-react"

class Home extends React.Component {
  render() {
    return (
      <div>
        <Image src={require("../images/conferenceRoom.jpg")} size="massive"></Image>
      </div>
    )
  }
}

export default Home
