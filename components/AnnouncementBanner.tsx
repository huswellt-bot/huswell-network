import Image from "next/image";

const announcement = {
  image: "/images/cover-huswell-trading.webp",
  alt: "Huswell Trading packaging solutions announcement",
};

export default function AnnouncementBanner() {
  return (
    <section aria-label="Announcement" className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <div className="relative aspect-[3/1] min-h-40 w-full sm:min-h-56">
        <Image
          src={announcement.image}
          alt={announcement.alt}
          fill
          priority
          sizes="(min-width: 1024px) 1152px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
