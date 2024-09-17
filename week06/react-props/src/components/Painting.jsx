export default function Painting({img_url, alt, caption}) {
  return (
    <figure>
      <img src={img_url} alt={alt}></img>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
