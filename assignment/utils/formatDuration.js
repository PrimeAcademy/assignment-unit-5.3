export const formatDuration = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  let seconds = (milliseconds % 60000) / 1000;
  if (seconds.toString().length === 1) {
    seconds = `0${seconds.toString()}`;
  }
  return `${minutes}:${seconds}`;
};
