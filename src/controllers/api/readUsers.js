module.exports = async (req, res) => {
  const db = req.db;
  const { room } = req.params;

  const query = { _id: 'users' };
  const projection = { _id: 0 };

  try {
    const users = await db.collection(room).findOne(query, projection);
    delete users._id;

    res.send({ status: 'ok', users: users });
  } catch (err) {
    console.log(err);

    res.send({
      status: 'error',
      message: 'reading from the database has failed',
    });
  }
};
