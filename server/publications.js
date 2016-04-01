Meteor.publish('posts', function(term) {
	return Posts.find({category:term});
});