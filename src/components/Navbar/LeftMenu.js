import React from "react";
import { Menu, Grid } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";

const { useBreakpoint } = Grid;

export default function LeftMenu() {
  const { md } = useBreakpoint();
  return (
    <Router>
      <Menu mode={md ? "horizontal" : "inline"}>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="">Signin</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="">Signup</Link>
        </Menu.Item>
      </Menu>
    </Router>
  );
}
