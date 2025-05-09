"use client";

import Link from 'next/link';
import { Home, FlaskConical, Newspaper, FolderGit2, Users, GraduationCap, Download as DownloadIcon, MessageSquare, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import React from 'react';

// Replace with actual scholar name
const SCHOLAR_NAME = "Dr. Eleanor Vance";

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/research', label: 'Research', icon: FlaskConical },
  { href: '/publications', label: 'Publications', icon: Newspaper },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/team', label: 'Team', icon: Users },
  { href: '/courses', label: 'Courses', icon: GraduationCap },
  { href: '/resources', label: 'Resources', icon: DownloadIcon },
  { href: '/contact', label: 'Contact', icon: MessageSquare },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-black sticky top-0 z-50 w-full border-b border-primary/30 backdrop-blur supports-[backdrop-filter]:bg-black/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
          {SCHOLAR_NAME}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-accent/10 text-primary hover:bg-accent/20"
                  : "text-gray-300 hover:text-primary hover:bg-neutral-800"
              )}
            >
              <Link href={item.href}>
                {/* <item.icon className="h-4 w-4 mr-2 hidden lg:inline-block" /> */}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu" className="text-gray-300 hover:text-white focus:ring-gray-500">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-black p-0 text-gray-300">
              <div className="flex flex-col h-full">
                <div className="p-6 flex justify-between items-center border-b border-primary/30">
                    <Link href="/" className="text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        {SCHOLAR_NAME}
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon" aria-label="Close menu" className="text-gray-300 hover:text-white focus:ring-gray-500">
                            <X className="h-6 w-6" />
                        </Button>
                    </SheetClose>
                </div>
                <nav className="flex-grow p-6 space-y-2">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                       <Link
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-3 text-md font-medium transition-colors rounded-md px-3 py-2",
                          pathname === item.href
                            ? "bg-accent/10 text-primary"
                            : "text-gray-300 hover:bg-neutral-800 hover:text-primary"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
