Router.configure({
	layoutTemplate:'layout'
});

Router.route('/',{name:'blogPosts'});
Router.route('/submit-post',{name:'submitPost'});

var requireLogin = function(){
	if(! Meteor.user()){
		this.render('accessDenied')
		}
	else{
		this.next();
	}
}

Router.onBeforeAction(requireLogin,{only:'submitPost'});