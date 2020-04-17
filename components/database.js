const key = "nl4b6345phwrjvw43mt2uv945jptg3i53n66";
export const post = (note) => {
  const db = JSON.parse(localStorage.getItem(key)) || [];
  localStorage.setItem(key, JSON.stringify([...db, note]));
};
export const get = () => {
  const db = JSON.parse(localStorage.getItem(key)) || [];
  const sorted = db.sort((a, b) => a.createdAt - b.createdAt);
  return sorted.reverse();
};
export const remove = (note) => {
  const db = JSON.parse(localStorage.getItem(key));
  const filtered = db.filter((n) => n.id !== note.id);
  localStorage.setItem(key, JSON.stringify(filtered));
};
