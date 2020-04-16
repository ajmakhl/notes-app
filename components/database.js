import _ from "lodash";
const key = "notes-app-q1!w2@";
export const post = (note) => {
  const db = JSON.parse(localStorage.getItem(key)) || [];
  localStorage.setItem(key, JSON.stringify([...db, note]));
};
export const get = () => {
  const db = JSON.parse(localStorage.getItem(key) || []);
  const sorted = _.sortBy(db, "createdAt");
  return sorted.reverse();
};
export const remove = (note) => {
  const db = JSON.parse(localStorage.getItem(key));
  const filtered = db.filter((n) => n.id !== note.id);
  localStorage.setItem(key, JSON.stringify(filtered));
};
