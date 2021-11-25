module.exports = async (db, room, data) => {
  try {
    await db.collection(room).insertOne(data);
  } catch (err) {
    console.log(err);
  }
};
