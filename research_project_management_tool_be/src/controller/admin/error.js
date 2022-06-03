const get404 = (req, res) => {
  res.status(404).send({ success: true, msg: 'Not Found!' });
};

module.exports = {
  get404,
};
