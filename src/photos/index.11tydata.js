const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const photos = await EleventyFetch(url, {
    fetchOptions: {},
    duration: '30s',
    type: 'json'
  });
  return { photos };
};
