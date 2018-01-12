export default ({
  post: {
    all: () => {
      const posts = localStorage.getItem('posts');
      return posts ? JSON.parse(posts) : [];
    },
    current: id => {
      const posts = localStorage.getItem('posts');
      const parsedPosts = posts && JSON.parse(posts);
      return parsedPosts.find(post => post.id == id);
    },
    save: data => {
      const posts = localStorage.getItem('posts');
      const parsedPosts = posts ? JSON.parse(posts) : [];
      data.id = parsedPosts.length + 1;
      parsedPosts.push(data);
      try {
        localStorage.setItem('posts', JSON.stringify(parsedPosts));
        return data;
      } catch (e) {
        if (e === 'QUOTA_EXCEEDED_ERR') {
          return {message: 'Превышен лимит localStorage!'}
        }
      }
    }
  },
})