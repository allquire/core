/* eslint-disable node/no-unpublished-require */

module.exports = async function(id, plugin) {
  if (plugin)
    try {
      return await (await require('@allquire/npm')(plugin))(id)
    } catch (error) {
      return require(id)
    }
  const plugins = require('./plugins')
  try {
    for (const key of Object.keys(plugins))
      if (plugins[key].test(id))
        return await (await require('@allquire/npm')(key))(id)
    throw new Error()
  } catch (error) {
    return require(id)
  }
}
