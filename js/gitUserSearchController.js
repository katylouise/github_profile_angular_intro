githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;
  var searchResource = $resource('https://api.github.com/search/users');
  var token = 'c7a27311b3ece356b23fa903409c47f42a5e24ef';

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm,
        access_token: self.token }
    );
  };
}]);