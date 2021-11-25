module.exports = async (req, res) => {
  const db = req.db;
  const { room } = req.params;
  let { start, size } = req.query;

  const query = { _id: { $ne: 'users' } };
  const projection = { _id: 0 };
  const sortRule = { timestamp: -1 };

  if (!start) {
    start = 0;
  } else {
    start = Number(start);
  }

  if (!size) {
    size = 0;
  } else {
    size = Number(size);
  }

  try {
    const messages = await db
      .collection(room)
      .find(query)
      .project(projection)
      .sort(sortRule)
      .skip(start)
      .limit(size)
      .toArray();

    res.send({ status: 'ok', messages });
  } catch (err) {
    console.log(err);

    res.send({
      status: 'error',
      message: 'reading from the database has failed',
    });
  }
};
