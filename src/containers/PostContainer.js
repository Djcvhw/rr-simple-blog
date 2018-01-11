import React from 'react';
import { Link } from 'react-router-dom';
import {getPost} from "../redux/actions/main";
import {connect} from "react-redux";

class PostFeed extends React.Component {
  componentWillMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(getPost(id));
  }
  render() {
    console.log(this.props);
    const { post } = this.props;
    if (!post) return <div>Нет такого поста</div>
    return <div>
      <div>
        <Link to={'/'}>Назад</Link>
      </div>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  }
}

export default connect(state => ({
  post: state.main.current
}))(PostFeed)