import Image from "next/image";

export default function PhotoGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const galleryImages =
    images.length > 0 && images.length < 10
      ? Array.from({ length: 10 }, (_, index) => images[index % images.length])
      : images;

  return (
    <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-proximity">
      {galleryImages.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="h-64 w-64 shrink-0 snap-start overflow-hidden rounded-xl"
        >
          <Image
            src={image}
            alt={`${name} photo ${index + 1}`}
            width={600}
            height={600}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}
