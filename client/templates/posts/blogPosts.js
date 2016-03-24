Template.blogPosts.helpers({
  posts:function(){
    return Posts.find();
  }
})

Template.blogPosts.events({
  "click .btn-lg": function (event, template) {
    if(Posts.findOne(event.target.name).user=Meteor.userId())
      {
        Posts.remove(event.target.name)
      }
      else{
      alert("You are not authorized to delete that post")
      }
	}
});

