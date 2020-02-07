/* eslint-disable node/no-unpublished-require */

module.exports = async function(id) {
  const plugins = require('./plugins')
  for (const key of Object.keys(plugins))
    if (plugins[key].test(id))
      return await (await require('@allquire/npm')(key))(id)
  throw new Error()
}
