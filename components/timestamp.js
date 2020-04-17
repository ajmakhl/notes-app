const handleMinutes = (t) => {
  return t < 2 ? `a minute ago` : `${t} minutes ago`;
};
const handleHours = (t) => {
  return t < 2 ? `an hour ago` : `${t} hours ago`;
};
const handleDays = (t) => {
  return t < 2 ? `a day ago` : `${t} days ago`;
};
const handleDate = (t) => {
  return `${t.getMonth()}-${t.getDate()}-${t.getFullYear()}`;
};
export default (note) => {
  const now = new Date();
  const then = new Date(note.createdAt);
  const mili = now.getTime() - then.getTime();
  const sec = mili / 1000;
  const min = Math.floor(sec / 60);
  const hr = Math.floor(sec / 3600);
  const day = Math.floor(sec / 86400);
  const isMinutes = mili <= 3600000;
  const isHours = mili <= 82800000;
  const isWeek = mili <= 4233600000;
  switch (true) {
    case isMinutes:
      return handleMinutes(min);
    case isHours:
      return handleHours(hr);
    case isWeek:
      return handleDays(day);
    default:
      return handleDate(then);
  }
};
