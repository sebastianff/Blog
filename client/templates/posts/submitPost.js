Template.submitPost.created = function(){
	Session.set('postSubmitErrors',{})
}
Template.submitPost.events({//Here we collect the data from the form
	'submit form': function(e) {
		e.preventDefault();
		var post = {
		title: $(e.target).find('[name=title]').val(),
		content: $(e.target).find('[name=content]').val(),
		category: $(e.target).find('[name=category]').val()
		};
		var errors = validatePost(post);
		if (errors.title || errors.url)
		return Session.set('postSubmitErrors', errors);
	Meteor.call('postInsert', post, function(error, result) {
		if (error)
			return throwError(error.reason);
		if (result.postExists){
			Errors.throw('Allready posted!')
		}
		Router.go('postView', {_id: result._id});
		});
	}
});

Template.submitPost.helpers({
	errorMessage: function(field) {
		return Session.get('postSubmitErrors')[field];
	},
	errorClass: function (field) {
		return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
	}
})