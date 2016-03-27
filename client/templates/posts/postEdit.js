Template.postEdit.events({
	'submit form': function(e) {
		e.preventDefault();
		var post = {
		title: $(e.target).find('[name=title]').val(),
		content: $(e.target).find('[name=content]').val(),
		user:Meteor.userId()
		};
		Posts.update(this._id,post);
		Router.go('blogPosts')
	}
});