export default callback => {
  setTimeout(() => {
    callback(null, "Alice");
  }, 500);
};
