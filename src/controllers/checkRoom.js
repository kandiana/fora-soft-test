module.exports = async (req, res, next) => {
  const db = req.db;
  const { room } = req.params;

  db.listCollections({ name: room }).next(function (err, collinfo) {
    if (collinfo) {
      next();
    } else {
      res.redirect('/');
    }
  });
};
