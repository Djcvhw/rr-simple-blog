import React from 'react';
import { connect } from "react-redux";
import AddForm from '../components/AddForm'
import PostsFeed from "../components/PostsFeed";
import { getPosts, savePost } from '../redux/actions/main'

class PostsContainer extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getPosts());
  }
  handleSubmit(values) {
    const { dispatch } = this.props;
    dispatch(savePost(values));
  }
  render() {
    const { posts } = this.props;
    return <div>
      <AddForm onSubmit={values => this.handleSubmit(values)}/>
      <PostsFeed posts={posts} />
    </div>
  }
}

export default connect(state => ({
  posts: state.main.posts
}))(PostsContainer)