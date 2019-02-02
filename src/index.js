import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Users from "./screens/Users";
import Posts from "./screens/Posts";
import { Button,Image ,Menu} from "semantic-ui-react";

class App extends React.Component {

  render(){
    
  return (
    <div>
    <Menu stackable>
    <Menu.Item>
    <Image
              size="mini"
              src={require("./images/MarkLogo.png")}
              style={{ marginRight: "1.5em" }}
            />
    </Menu.Item>

    <Menu.Item>
      Features
    </Menu.Item>

    <Menu.Item>
      Testimonials
    </Menu.Item>

    <Menu.Item>
      Sign-in
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
