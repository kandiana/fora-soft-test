module.exports = async (db, room, id, data) => {
  const filter = { _id: id };

  try {
    await db.collection(room).updateOne(filter, { $unset: data });
  } catch (err) {
    console.log(err);
  }
};
