Template.postEdit.events({
	'submit form': function(e) {
		e.preventDefault();
		var currentPostId = this._id;
		var post = {
		title: $(e.target).find('[name=title]').val(),
		content: $(e.target).find('[name=content]').val(),
		user:Meteor.userId()
		};
		var errors = validatePost(post);
		if (errors.title || errors.url)
		return Session.set('postSubmitErrors', errors);
		Posts.update(currentPostId,{$set:post},function(error){
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

Template.postEdit.helpers({
	errorMessage: function(field) {
		return Session.get('postSubmitErrors')[field];
	},
	errorClass: function (field) {
		return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
	}
})