const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  let url = 'https://jsonplaceholder.typicode.com/todos/1';
  let globalData = await EleventyFetch(url, {
    fetchOptions: {
      // method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      //   Accept: 'application/json',
      //   Authorization: `Bearer ${datoToken}`
      // },
      // body: JSON.stringify({
      //   query: datoQuery.toString()
      // })
    },
    duration: '30s',
    type: 'json'
  });

  return globalData;
};