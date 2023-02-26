const getUrl = (url) => {
  return url.replace("/", "");
  // return url.split('/')[1];
};

module.exports = { getUrl };
