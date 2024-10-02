import Image from "next/image";
import myImage from "@/../public/myImage.png";

export default function Home() {
  return (
    <div>
       <Image alt="two beatles" src={myImage} />
      <p>Home Page</p>
    </div>
  )
}