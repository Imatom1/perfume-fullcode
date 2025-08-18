import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Scale, Menu, X, Heart, Beaker } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Fragrances", href: "/", icon: Crown },
    { name: "Compare", href: "/compare", icon: Scale },
    { name: "Quiz", href: "/quiz-intro", icon: Heart },
    { name: "Mixer", href: "/mixer", icon: Beaker },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-gradient-to-r from-copper-100 via-copper-200 to-copper-300 border-b-2 border-copper-400 shadow-xl backdrop-blur-sm
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer before:transition-transform"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <Crown className="w-8 h-8 text-copper-700 group-hover:text-copper-800 transition-colors" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-copper-800 via-copper-700 to-copper-600 bg-clip-text text-transparent">
                  Golden Aroma
                </span>
                <span className="text-xs font-semibold text-copper-600 -mt-1">
                  PREMIUM FRAGRANCES
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = item.href === location.pathname;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-copper-300 text-copper-900 shadow-md"
                      : "text-copper-800 hover:bg-copper-200 hover:text-copper-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-copper-800 hover:bg-copper-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-copper-300 bg-copper-100/90 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = item.href === location.pathname;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold transition-colors ${
                      isActive
                        ? "bg-copper-300 text-copper-900"
                        : "text-copper-800 hover:bg-copper-200"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
