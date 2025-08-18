import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag, DollarSign, Crown } from "lucide-react";

export function PricingBanner() {
  return (
    <Card
      className="bg-gradient-to-r from-copper-100 via-copper-200 to-copper-300 border border-copper-400 shadow-md relative overflow-hidden my-3 sm:my-4
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] before:animate-shimmer before:transition-transform"
    >
      <CardContent className="p-3 sm:p-4 md:p-5 relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-center">
          <div className="hidden sm:flex items-center gap-1">
            <Crown className="w-4 h-4 text-copper-700" />
            <span className="font-bold text-gray-900 text-sm">Premium</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-800 text-xs sm:text-sm">
                30ml:
              </span>
              <Badge className="bg-copper-600 text-white font-bold text-xs">
                $29.99
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-800 text-xs sm:text-sm">
                50ml:
              </span>
              <Badge className="bg-copper-600 text-white font-bold text-xs">
                $44.99
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-800 text-xs sm:text-sm">
                100ml:
              </span>
              <Badge className="bg-copper-600 text-white font-bold text-xs">
                $74.99
              </Badge>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            <Tag className="w-4 h-4 text-copper-700" />
            <span className="font-bold text-gray-900 text-sm">Best Value</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
