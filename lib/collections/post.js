Posts = new Mongo.Collection('posts');

validatePost = function (post) {
	var errors = {};
	if (!post.title)
		errors.title = "Please fill in a headline";
	if (!post.url)
		errors.url = "Please fill in a URL";
	return errors;
}

Meteor.methods({
	postInsert:function(postAttributes){
		check(Meteor.userId(),String);
		check(postAttributes,{
			title:String,
			content:String,
			category:String
		});
		var errors = validatePost(postAttributes);
		if (errors.title || errors.url)
		throw new Meteor.Error('invalid-post', "You must set a title and URL for your post");
		var postWithSameLink = Posts.findOne({content:postAttributes.content});
		if(postWithSameLink){
			return{
				postExists:true,
				_id:postWithSameLink._id
			}
		}
		var user = Meteor.user();
		var post = _.extend(postAttributes,{
			userId:user._id,
			author:user.username,
			submitted: new Date(),
			likes:0,
			unlikes:0
		})
		var postId = Posts.insert(post);
		return{
			_id:postId
		};
	}
})

Posts.deny({
	update: function(userId, post, fieldNames, modifier) {
	var errors = validatePost(modifier.$set);
	return errors.title || errors.url;
	}
});