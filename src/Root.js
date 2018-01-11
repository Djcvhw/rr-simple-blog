import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Main from "./layouts/Main";
import PostContainer from "./containers/PostContainer";
import PostsContainer from "./containers/PostsContainer";
import NotFound from "./containers/NotFound";

@withRouter
@connect(state => ({ state }))
export default class Root extends Component {
  render() {
    return (
      <Main>
        <Switch>
          <Route exact path="/" component={PostsContainer}/>
          <Route path="/post/:id" component={PostContainer}/>
          <Route component={NotFound}/>
        </Switch>
      </Main>
    )
  }
}
