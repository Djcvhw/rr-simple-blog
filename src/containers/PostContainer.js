import React from 'react';
import { Link } from 'react-router-dom';
import {getPost} from "../redux/actions/main";
import {connect} from "react-redux";
import './PostContainer.css';

const cn = require('bem-cn')('post-container');

class PostFeed extends React.Component {
  componentWillMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(getPost(id));
  }
  render() {
    const { post } = this.props;
    if (!post) return <div>Нет такого поста</div>
    return <div className={`${cn}`}>
      <Link to={'/'} className={`${cn('link')}`}>
        <svg className={`${cn('link-icon')}`} viewBox="0 0 24 24">
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
        Назад
      </Link>
      <div className={`${cn('post')}`}>
        <h3 className={`${cn('title')}`}>{post.title}</h3>
        <p className={`${cn('body')}`}>{post.body}</p>
      </div>
    </div>
  }
}

export default connect(state => ({
  post: state.main.current
}))(PostFeed)