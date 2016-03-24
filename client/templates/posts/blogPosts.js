Template.blogPosts.helpers({
  posts:function(){
    return Posts.find();
  }
})

Template.blogPosts.events({
  "click .btn-lg": function (event, template) {
    Posts.remove(event.target.name)
	}
});