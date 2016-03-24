Router.configure({
	layoutTemplate:'layout'
});

Router.route('/',{name:'blogPosts'});
Router.route('/submit-post',{name:'submitPost'});
Router.route('/posts/:_id', {
name: 'postView',
data: function() { return Posts.findOne(this.params._id); }
});

var requireLogin = function(){
	if(! Meteor.user()){
		this.render('accessDenied')
		}
	else{
		this.next();
	}
}

Router.onBeforeAction(requireLogin,{only:'submitPost'});