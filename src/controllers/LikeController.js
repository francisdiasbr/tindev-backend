const Dev = require('../models/Dev')

module.exports = {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    console.log(loggedDev, targetDev)
    if (!targetDev) {
      return res.status(400).json({error: 'Dev doesnt exist'})
    }
    if (targetDev.likes.includes(loggedDev.id)) {
      console.log('DEU MATCH') 
    }
    loggedDev.likes.push(targetDev._id)

    await loggedDev.save();
    return res.json(loggedDev)
  }
}
