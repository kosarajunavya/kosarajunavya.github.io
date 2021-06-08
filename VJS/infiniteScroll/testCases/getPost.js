async function getPosts(limit, page) {
  const fetch = require("node-fetch");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data;
}
getPosts(10, 1);
module.exports = getPosts;
