import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-serif font-bold text-text">404</h1>
        <h2 className="text-2xl font-serif font-semibold text-text">Page Not Found</h2>
        <p className="text-text/70 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-primary text-background hover:bg-primary/90">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
