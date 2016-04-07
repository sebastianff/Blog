Template.submitPost.events({//Here we collect the data from the form
	'submit form': function(e) {
		e.preventDefault();
		var post = {
		title: $(e.target).find('[name=title]').val(),
		content: $(e.target).find('[name=content]').val(),
		category: $(e.target).find('[name=category]').val()
		};
	Meteor.call('postInsert', post, function(error, result) {
		if (error)
			return alert(error.reason+"hehe");
		Router.go('postView', {_id: result._id});
		});
	}
});