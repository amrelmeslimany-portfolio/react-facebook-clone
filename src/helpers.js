export function truncate(text, wordNumber = 0) {
  let newText = text.trim().replace(/ {2,}/g, " ").split(" ");
  if (wordNumber > newText.length) {
    wordNumber = newText.length;
  }
  return newText[wordNumber].length > 8
    ? newText[wordNumber].slice(0, 8) + ".."
    : newText[wordNumber];
}

export function createID() {
  return Math.random().toString().slice(3, 9);
}

export const formatTimeAgo = (value, unit) => {
  if (unit === "month" || unit === "year") return `${value} ${unit}`;
  return `${value} ${unit.slice(0, 1)}`;
};
