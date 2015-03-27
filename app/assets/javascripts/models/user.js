var app = app || {};

app.User = Backbone.Model.extend({
  urlRoot: '/users',
  defaults: {
    username: '',
    email: '',
    password_digest: '',
    profile_image: ''
  }
});
