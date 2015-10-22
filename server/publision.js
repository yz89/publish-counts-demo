Meteor.publish('posts', function(option) {

	Counts.publish(this, 'posts-counter', Posts.find());
	return Posts.find({}, option);
});