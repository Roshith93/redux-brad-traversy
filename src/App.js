import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import AddPost from './components/AddPost'
import { Provider } from 'react-redux';
import store from './components/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <AddPost/>
        <hr />
        <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
