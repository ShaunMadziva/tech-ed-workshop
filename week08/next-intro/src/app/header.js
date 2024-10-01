import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-yellow-500 text-center text-2xl hover:bg-violet-300">
      <nav>
        <Link href="/" className="active:bg-green-500 focus:ring focus:ring-white hover:bg-pink-400">
          <span>Home</span>
        </Link>{" "}
        <Link href="/about" className="active:bg-green-500 focus:ring focus:ring-white hover:bg-pink-400">
          <span>About</span>
        </Link>{" "}
        <Link href="/posts" className="active:bg-green-500 focus:ring focus:ring-white hover:bg-pink-400">
          <span>Posts</span>
        </Link>
      </nav>
    </header>
  );
}
