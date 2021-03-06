import Promise from 'bluebird'
const Github = require('github-api');

export const getProfile = (access_token) => {
  var github = new Github({
    token: access_token,
    auth: 'oauth'
  })
  var user = github.getUser()
  return Promise.promisify(user.show, {context: user})(null)
}
