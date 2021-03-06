Meteor.subscribe('posts');

Template.blogPosts.helpers({//here we populate the front page
  posts:function(){
    return Posts.find();
  },
  commentsCount: function() {
	return Comments.find({postId: this._id}).count();
  }
});

Template.blogPosts.events({
  'click glyphicon-thumbs-up': function (event, template) {
  },
  
  'click glyphicon-thumbs-down': function (event, template) {
  }
});