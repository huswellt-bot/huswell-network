import { ViberIcon, WhatsAppIcon } from "./BrandIcons";

export default function WhatsAppButton({ number }: { number: string }) {
  return (
    <div className="fixed right-6 bottom-6 z-20 flex flex-col items-end gap-3">
      <a
        href={`viber://chat?number=${number}`}
        aria-label="Chat with Huswell Trading on Viber"
        className="flex h-12 items-center gap-2 rounded-full bg-[#7360f2] px-5 text-sm font-medium text-white transition-colors hover:bg-[#665cac] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7360f2]/40 focus-visible:ring-offset-2"
      >
        <ViberIcon className="h-5 w-5" />
        Viber
      </a>
      <a
        href={`https://wa.me/${number}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Huswell Trading on WhatsApp"
        className="flex h-12 items-center gap-2 rounded-full bg-[#25d366] px-5 text-sm font-medium text-white transition-colors hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366]/40 focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
