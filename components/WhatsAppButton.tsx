import { WhatsAppIcon } from "./BrandIcons";

export default function WhatsAppButton({ number }: { number: string }) {
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with this business on WhatsApp"
      className="fixed right-6 bottom-6 z-20 flex h-12 items-center gap-2 rounded-full bg-brand px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-dark"
    >
      <WhatsAppIcon className="h-5 w-5" />
      WhatsApp
    </a>
  );
}