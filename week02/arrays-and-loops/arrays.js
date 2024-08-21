// Arrays

console.log(document);
let h1 = document.querySelector("h1");
console.log(h1);

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);

console.log(blogPosts[0]);
console.log(blogPosts[1]);
console.log(blogPosts[2]);

blogPosts.push("pushed post", 100);

console.log(blogPosts[blogPosts.length - 1]);

let array = []