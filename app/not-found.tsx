import React from "react";
import Link from "next/link";
import {AlertCircle} from "lucide-react";

import {Button} from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="bg-destructive/10 mx-auto mb-4 flex size-16 items-center justify-center rounded-full">
        <AlertCircle className="text-destructive size-8" />
      </div>
      <h1 className="text-foreground text-2xl font-bold">404 - Page Not Found</h1>
      <p className="text-muted-foreground">
        Oops! It looks like this Pokemon has wandered off into the tall grass. The page you’re
        looking for doesn’t exist or has been moved.
      </p>
      <Button
        asChild
        variant="default"
        className="mt-4">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
