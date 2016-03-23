	Template.submitPost.events({
	'submit form': function(e) {
		e.preventDefault();
		var post = {
		url: $(e.target).find('[name=name]').val(),
		title: $(e.target).find('[name=content]').val()
		};
		post._id = Posts.insert(post);
	}
});