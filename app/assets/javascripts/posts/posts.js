angular.module('flapperNews')
.factory('posts', [function(){
  var o = {
    posts: [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 14},
      {title: 'post 3', upvotes: 23},
      {title: 'post 4', upvotes: 12},
      {title: 'post 5', upvotes: 10}
    ]
  };
  return o;
}])