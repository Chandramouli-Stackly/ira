"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-brand-surface">
      <Container size="narrow" className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4 border border-rose-200">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-brand-navy">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          An unexpected error occurred while loading this page. You can try refreshing or contact our technical support.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => reset()} variant="teal" size="md">
            <RotateCcw className="w-4 h-4 mr-2" />
            <span>Try Again</span>
          </Button>

          <Button href="/" variant="outline" size="md">
            <span>Return to Home</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
