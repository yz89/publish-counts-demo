Template.main.created = function () {
    Meteor.subscribe('posts', {limit: 10});
};

Template.main.helpers({
  posts: function() {
    return Posts.find();
  },
  clientCount: function() {
    return Posts.find().count();
  },
  serverCount: function() {
    return Counts.get('posts-counter');
  }
});

Template.main.events({
  'click button': function (event, template) {
      console.log("+");
      Posts.insert({
        title: '我是新来的',
        createdAt: new Date()
      });
  }
});
