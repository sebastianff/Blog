Meteor.subscribe('posts');

Template.blogPosts.helpers({//here we populate the front page
  posts:function(){
    return Posts.find();
  }
});