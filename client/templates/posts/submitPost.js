	Template.submitPost.events({//Here we collect the data from the form
	'submit form': function(e) {
		e.preventDefault();
		var post = {
		title: $(e.target).find('[name=title]').val(),
		content: $(e.target).find('[name=content]').val(),
		category: $(e.target).find('[name=category]').val(),
		user:Meteor.userId()
		};
		Posts.insert(post);
		Router.go('blogPosts')
	}
});