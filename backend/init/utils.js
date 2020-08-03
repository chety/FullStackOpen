function generateId(notes) {
  const lastItemId = notes[notes.length - 1].id;
  return lastItemId + 1;
}
module.exports = {
  createUniqueId: generateId,
};
