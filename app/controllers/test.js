exports.account = function (req, res) {
  res.json({user: req.user})
};