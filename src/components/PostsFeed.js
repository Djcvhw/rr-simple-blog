import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import './PostsFeed.css';
import {getPosts} from "../redux/actions/main";

const cn = require('bem-cn')('posts-feed');

const renderPost = post => (
  <div key={post.id} className={`${cn('container')}`}>
    <div className={`${cn('post')}`}>
      <Link to={`/post/${post.id}`} className={`${cn('link')}`}>
        <h3 className={`${cn('title')}`}>{post.title}</h3>
      </Link>
      <p className={`${cn('body')}`}>{post.body}</p>
    </div>
  </div>
)

class PostsFeed extends React.Component {
  render() {
    const { dispatch } = this.props;
    return [
      this.props.posts.map(renderPost),
      <button
        key={'button-load'}
        className={`${cn('button-load')}`}
        onClick={() => dispatch(getPosts())}
      >Показать еще</button>
    ]
  }
}

export default connect(state => ({
  state
}))(PostsFeed)
