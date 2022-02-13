import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Albums from './components/Albums/Albums';
import Comments from './components/Comments/Comments';
import Nav from './components/Nav/Nav';
import Photos from './components/Photos/Photos';
import Posts from './components/Posts/Posts';
import Todos from './components/Todos/Todos';
import Users from './components/Users/Users';
import Home from './pages/Home/Home';


class App extends React.Component {
  constructor(){
    super();
    this.state={};
  }

  render(){
    return (
        <Router>
          <Nav/>
          <div className='container-lg mt-4'>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/posts" component={Posts}/>
              <Route path="/comments" component={Comments}/>            
              <Route path="/albums" component={Albums}/> 
              <Route path="/photos" component={Photos}/>
              <Route path="/todos" component={Todos}/> 
              <Route path="/users" component={Users}/> 
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
