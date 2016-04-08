Template.postEdit.events({
	'submit form': function(e) {
		e.preventDefault();
		var currentPostId = this._id;
		var postProperties = {
		title: $(e.target).find('[name=title]').val(),
		content: $(e.target).find('[name=content]').val(),
		user:Meteor.userId()
		};
		Posts.update(currentPostId,{$set:postProperties},function(error){
			if(error){
				throwError(error.reason)
			}
			else{
				Router.go('blogPosts');
			}
		});

	},
	'click .btn-lg': function (event, template) {
    if(this.userId===Meteor.userId())
      { 
        if(confirm("Delete this post?"))
        {Posts.remove(this._id)}
      }
      else{
        alert("You are not authorized to delete that post")
      }
	}
});