import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-charcoal mb-4">Portfolio</h1>
        <p className="text-charcoal/60 mb-8">Full portfolio page coming soon.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-olive hover:text-burnt transition-colors"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>
      </div>
    </main>
  );
}
