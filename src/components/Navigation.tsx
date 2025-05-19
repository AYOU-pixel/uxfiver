import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight hover:opacity-80 transition-opacity"
            aria-label="UXOptimize Home"
          >
            UXOptimize
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              aria-label={`Navigate to ${item.name}`}
            >
              {item.name}
            </a>
          ))}
          <Button
            className="ml-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-2 transition-all duration-200 transform hover:scale-105"
            aria-label="Get Started with UXOptimize"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 rounded-full"
                aria-label="Open navigation menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-white/95 backdrop-blur-md p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <a
                  href="#"
                  className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  aria-label="UXOptimize Home"
                >
                  UXOptimize
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </Button>
              </div>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 text-base font-medium py-3 px-4 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </a>
                ))}
                <Button
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-3 transition-all duration-200"
                  aria-label="Get Started with UXOptimize"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
