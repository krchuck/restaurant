import React, { Component, } from 'react';
import MenuForm from './Components/MenuForm'
// import MenuList from './Components/MenuList'
import { Container, } from "semantic-ui-react"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { menus: [],}

  componentDidMount() {

  }

  addMenu = (name) => {

  }

  updateMenu = (id) => {

  }

  deleteMenu = (id) => {

  }

  render() {
    return (
      <Container style={{ padding: "30px 0",}}>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        {/* <MenuList
          menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
          /> */}
      </Container>
    )
  }
}

export default App;
