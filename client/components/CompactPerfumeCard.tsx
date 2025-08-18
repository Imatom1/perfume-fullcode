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
        return "bg-gold-600 text-black-950 border-black-8000";
      case "men":
        return "bg-black-8000 text-black-950 border-gold-400";
      case "unisex":
        return "bg-gold-400 text-black-950 border-gold-300";
      default:
        return "bg-black-8000 text-black-950 border-gold-400";
    }
  };

  // Gender-based color schemes (black and gold theme)
  const getGenderColors = (gender: string) => {
    switch (gender.toLowerCase()) {
      case "women":
        return {
          cardBg: "bg-gradient-to-br from-black-900 to-black-800",
          cardBorder: "border-gold-600 hover:border-black-8000",
          cardShadow: "shadow-black-8000/20",
          titleColor: "text-gold-400",
          brandText: "text-gold-300",
          accordBorder: "border-black-8000 text-gold-200 bg-black-800",
          iconColor: "text-black-8000",
        };
      case "men":
        return {
          cardBg: "bg-gradient-to-br from-black-950 to-black-900",
          cardBorder: "border-black-8000 hover:border-gold-400",
          cardShadow: "shadow-gold-400/20",
          titleColor: "text-gold-300",
          brandText: "text-gold-200",
          accordBorder: "border-gold-400 text-gold-100 bg-black-900",
          iconColor: "text-gold-400",
        };
      case "unisex":
        return {
          cardBg: "bg-gradient-to-br from-black-900 to-black-800",
          cardBorder: "border-black-8000 hover:border-gold-400",
          cardShadow: "shadow-gold-400/20",
          titleColor: "text-gold-400",
          brandText: "text-gold-300",
          accordBorder: "border-gold-400 text-gold-200 bg-black-800",
          iconColor: "text-black-8000",
        };
      default:
        return {
          cardBg: "bg-gradient-to-br from-black-900 to-black-800",
          cardBorder: "border-black-8000 hover:border-gold-400",
          cardShadow: "shadow-gold-400/20",
          titleColor: "text-gold-400",
          brandText: "text-gold-300",
          accordBorder: "border-gold-400 text-gold-200 bg-black-800",
          iconColor: "text-black-8000",
        };
    }
  };

  const colors = getGenderColors(perfume.gender);

  return (
    <Card
      className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${colors.cardBg} border ${colors.cardBorder} shadow-md ${colors.cardShadow} relative overflow-hidden
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-black-8000/10 before:to-transparent before:translate-x-[-200%] group-hover:before:animate-shimmer before:transition-transform`}
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
