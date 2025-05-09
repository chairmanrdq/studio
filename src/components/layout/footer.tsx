import React from 'react';

// Replace with actual scholar name
const SCHOLAR_NAME = "Dr. Eleanor Vance";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground py-8 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {SCHOLAR_NAME}. All rights reserved.
        </p>
        {/* Optional: Add more links or information here */}
        {/*
        <p className="text-xs mt-2">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> | 
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </p>
        */}
      </div>
    </footer>
  );
}
