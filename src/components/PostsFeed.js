import React from 'react';
import { Link } from 'react-router-dom';

const renderPost = post => (
  <div key={post.id}>
    <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
    <p>{post.body}</p>
  </div>
)

export default class PostsFeed extends React.Component {
  render() {
    return <div>
      {this.props.posts.map(renderPost)}
    </div>
  }
}
