module.exports = {
  sessionSecret: 'its mine!'
  , google: {
        clientId: '207566538796.apps.googleusercontent.com'
      , clientSecret: 'WIntL03RnSEKz1DcgEVjy1oR'
      , emailAddress: '207566538796@developer.gserviceaccount.com' // Documentation
      , redirectURI: 'https://localhost:3000/oauth2callback'  // Documentation
    }
  , mongo: {
        uri: 'mongodb://localhost/myeats'
    }
  , memcached: {
        host: 'localhost:11212',
        prefix: 'myeats'
    }
};