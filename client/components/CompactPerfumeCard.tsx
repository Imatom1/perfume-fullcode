import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Droplets, Star } from "lucide-react";
import { Perfume } from "../data/perfumes";

interface CompactPerfumeCardProps {
  perfume: Perfume;
  onClick?: () => void;
}

export function CompactPerfumeCard({
  perfume,
  onClick,
}: CompactPerfumeCardProps) {
  // Gender badge specific colors
  const getGenderBadgeColor = (gender: string) => {
    switch (gender.toLowerCase()) {
      case "women":
        return "bg-pink-200 text-pink-900 border-pink-400";
      case "men":
        return "bg-blue-200 text-blue-900 border-blue-400";
      case "unisex":
        return "bg-green-200 text-green-900 border-green-400";
      default:
        return "bg-gray-200 text-gray-900 border-gray-400";
    }
  };

  // Gender-based color schemes (simplified for compact design)
  const getGenderColors = (gender: string) => {
    switch (gender.toLowerCase()) {
      case "women":
        return {
          cardBg: "bg-gradient-to-br from-amber-100 to-amber-200",
          cardBorder: "border-amber-400 hover:border-amber-500",
          cardShadow: "shadow-amber-200/60",
          titleColor: "text-amber-900",
          brandText: "text-amber-800",
          accordBorder: "border-amber-300 text-amber-800 bg-amber-50",
          iconColor: "text-amber-700",
        };
      case "men":
        return {
          cardBg: "bg-gradient-to-br from-slate-200 to-slate-300",
          cardBorder: "border-slate-500 hover:border-slate-600",
          cardShadow: "shadow-slate-300/60",
          titleColor: "text-slate-900",
          brandText: "text-slate-800",
          accordBorder: "border-slate-400 text-slate-800 bg-slate-100",
          iconColor: "text-slate-700",
        };
      case "unisex":
        return {
          cardBg: "bg-gradient-to-br from-orange-100 to-orange-200",
          cardBorder: "border-orange-400 hover:border-orange-500",
          cardShadow: "shadow-orange-200/60",
          titleColor: "text-orange-900",
          brandText: "text-orange-800",
          accordBorder: "border-orange-300 text-orange-800 bg-orange-50",
          iconColor: "text-orange-700",
        };
      default:
        return {
          cardBg: "bg-gradient-to-br from-orange-100 to-orange-200",
          cardBorder: "border-orange-400 hover:border-orange-500",
          cardShadow: "shadow-orange-200/60",
          titleColor: "text-orange-900",
          brandText: "text-orange-800",
          accordBorder: "border-orange-300 text-orange-800 bg-orange-50",
          iconColor: "text-orange-700",
        };
    }
  };

  const colors = getGenderColors(perfume.gender);

  return (
    <Card
      className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${colors.cardBg} border ${colors.cardBorder} shadow-md ${colors.cardShadow} relative overflow-hidden
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] group-hover:before:animate-shimmer before:transition-transform`}
      onClick={onClick}
    >
      <CardContent className="p-1 sm:p-2 relative z-10 h-full">
        <div className="space-y-1 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start gap-1 mb-1">
            <div className="flex-1 min-w-0">
              <h4
                className={`text-sm sm:text-base md:text-lg font-bold ${colors.titleColor} leading-tight truncate`}
              >
                {perfume.name}
              </h4>
              <p
                className={`text-xs sm:text-sm font-bold ${colors.brandText} truncate`}
              >
                {perfume.brand}
              </p>
            </div>
            <Badge
              variant="secondary"
              className={`${getGenderBadgeColor(perfume.gender)} text-xs font-bold shadow-sm flex-shrink-0`}
            >
              {perfume.gender.charAt(0)}
            </Badge>
          </div>

          {/* Main Accords */}
          <div className="flex flex-wrap gap-1 mb-1">
            {perfume.mainAccords.map((accord) => (
              <Badge
                key={accord}
                variant="outline"
                className={`text-xs sm:text-sm ${colors.accordBorder} font-bold`}
              >
                {accord}
              </Badge>
            ))}
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-1 text-xs sm:text-sm flex-1">
            <div className="flex items-center gap-1 truncate">
              <Clock
                className={`w-3 h-3 sm:w-4 sm:h-4 ${colors.iconColor} flex-shrink-0`}
              />
              <span className="font-bold truncate">{perfume.bestTime}</span>
            </div>
            <div className="flex items-center gap-1 truncate">
              <Droplets
                className={`w-3 h-3 sm:w-4 sm:h-4 ${colors.iconColor} flex-shrink-0`}
              />
              <span className="font-bold truncate">{perfume.sillage}</span>
            </div>
            <div className="flex items-center gap-1 truncate">
              <Star
                className={`w-3 h-3 sm:w-4 sm:h-4 ${colors.iconColor} flex-shrink-0`}
              />
              <span className="font-bold truncate">
                {perfume.mainSeasons.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
