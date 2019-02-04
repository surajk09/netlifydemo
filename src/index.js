import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter, Route ,Link} from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Users from "./screens/Users";
import Posts from "./screens/Posts";
import {Image ,Menu} from "semantic-ui-react";

class App extends React.Component {
  state = {
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render(){
    const { activeItem } = this.state
  return (
    <div>
    <Menu stackable>
    <Menu.Item>
          <h2>Mark</h2>
        </Menu.Item>
        <Menu.Item
          name='ConferenceRoom'
          active={activeItem === 'ConferenceRoom'}
          onClick={this.handleItemClick}>
        <Link to="/home">
          Home
        </Link></Menu.Item>

<Menu.Item
          name='ConferenceRoom'
          active={activeItem === 'ConferenceRoom'}
          onClick={this.handleItemClick}
        >
    <Link to="/users">
          Conference Room
        </Link>  </Menu.Item>

        <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Teams
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
  </Menu>
      <Route path="/home" component={Home} exact />
      <Route path="/details" component={Details} exact />
      <Route path="/users" component={Users} exact />
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
