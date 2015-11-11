var Post = React.createClass({

  handleDelete: function(e) {
    console.log('clicked')
    this.props.onDelete();
  },
  render: function () {
    // console.log(this.props);
    return (
      <div className="post">
        <h4 className="postAuthor">

          {this.props.post.title}
          <a onClick={this.handleDelete}>delete</a>
        </h4>
      </div>
      );
  }
});

var PostList = React.createClass({

  deletePost: function() {
    console.log('delete 2');
    this.setState({posts: []});
  },

 getInitialState: function() {
    return {posts: this.props.posts};
  },

  render: function () {
    posts = this.state.posts.map(function(post) {
      return <Post post={post} onDelete={this.deletePost}/>;
    }.bind(this));
    console.log(posts);

    return (
      <div className="postList">
        { posts }
      </div>
      );
  }
});