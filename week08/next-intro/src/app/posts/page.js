import Link from "next/link";

export default async function PostsPage({ searchParams }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  console.log("searchParams", searchParams);
  if (searchParams.sort === "desc") {
    posts.reverse();
  }
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1> <br />
      <Link href={"/posts?sort=asc"}>Sort Ascending</Link> <br />
      <Link href={"/posts?sort=desc"}>Sort Descending</Link> <br />
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3>
                {post.title}
                <br />
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
