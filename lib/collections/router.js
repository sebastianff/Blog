Router.configure({
	layoutTemplate:'layout'
});

Router.route('/',{name:'blogPosts'});
Router.route('/submit-post',{name:'submitPost'});