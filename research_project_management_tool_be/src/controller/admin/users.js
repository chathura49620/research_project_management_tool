const { v4: uuidv4 } = require('uuid');
const User = require('../../model/user');

const getRoom = (req, res) => {
  const randomGenUniqueName = uuidv4();
  res.status(200).send({ roomUrl: randomGenUniqueName });
};

const postAddUser = (req, res) => {
  const { name } = req.body;
  const user = new User(null, name);
  user.save();
  res.status(200).send({ success: true, msg: 'User added' });
};

module.exports = {
  postAddUser,
  getRoom,
};
