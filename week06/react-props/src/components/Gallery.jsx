import Painting from "./Painting";

export default function Gallery() {
  return (
    <div>
      <Painting
        img_url="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5b87fa9a-112a-4c4d-a7c9-d368266319d4_1426x1445.webp"
        alt="3 wise men"
        caption="3 wise men"
      />
      <Painting
        img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jEcyhBKvqBOrps4ENGVob3DOkxMMAFHSMQ&s"
        alt="Godspeed"
        caption="Godspeed"
      />
      <Painting
        img_url="https://s3.eu-west-2.amazonaws.com/artery-listing-images/listing_images/images/ALL/MDJ002964_BL.jpg"
        alt="African Woman"
        caption="African Woman"
      />
      <Painting
        img_url="https://i.etsystatic.com/29816960/r/il/7edd48/4074046958/il_fullxfull.4074046958_gpw3.jpg"
        alt="Elephants"
        caption="Elephants"
      />
    </div>
  );
}
