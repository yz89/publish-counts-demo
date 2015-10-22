Meteor.startup(function () {
	if (Posts.find().count() == 0){
		var now = new Date().getTime();
   		for (var i = 0; i < 50; i++) { 
			Posts.insert({
		        'title': '文章' + i.toString(), 
		        'createdAt': new Date(now - i * 3600 * 1000)
	   		});
	    }
	}
}); 