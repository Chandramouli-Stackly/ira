import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-brand-surface">
      <Container size="narrow" className="text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
          404 Error
        </span>

        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-navy">
          Page Not Found
        </h1>

        <p className="mt-4 text-base text-slate-600 max-w-md mx-auto leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Explore our technology services or return to the homepage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="teal" size="md">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </Button>

          <Button href="/services" variant="outline" size="md">
            <span>Explore Services</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
