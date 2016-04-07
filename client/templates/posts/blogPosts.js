Meteor.subscribe('posts');

Template.blogPosts.helpers({//here we populate the front page
  posts:function(){
    return Posts.find();
  }
})

Template.blogPosts.events({//here we're not letting a person that didn't create the post delete it
  "click .btn-lg": function (event, template) {
    if(Posts.findOne(event.target.name).user===Meteor.userId())
      {
        Posts.remove(event.target.name)
      }
      else{
      alert("You are not authorized to delete that post")
      }
	}
});

