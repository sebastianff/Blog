Posts = new Mongo.Collection('posts');

throwError = function(message){
	Errors.insert({message:message})
}