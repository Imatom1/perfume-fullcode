import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Droplets,
  Star,
  Scale,
  Tag,
  X,
  ShoppingCart,
} from "lucide-react";
import { Perfume } from "../data/perfumes";
import { getPerfumeBuyUrl } from "../data/perfume-links";
import { useState } from "react";

interface PerfumeDetailProps {
  perfume: Perfume | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCompare?: (perfume: Perfume) => void;
  isInComparison?: boolean;
}

export function PerfumeDetail({
  perfume,
  open,
  onOpenChange,
  onCompare,
  isInComparison,
}: PerfumeDetailProps) {
  if (!open || !perfume) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onOpenChange(false);
        }}
      />

      {/* Modal Content */}
      <div
        className="relative bg-gradient-to-br from-copper-50 via-copper-100 to-copper-200 border border-copper-400 rounded-lg shadow-2xl w-full max-w-lg max-h-[75vh] overflow-hidden flex flex-col
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] before:animate-shimmer before:transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 z-50 p-1 sm:p-2 rounded-full bg-copper-200 hover:bg-copper-300 text-copper-800 transition-colors shadow-md border border-copper-300"
          type="button"
        >
          <X className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>

        <div className="p-2 sm:p-3 relative z-10 overflow-y-auto flex-1">
          {/* Header */}
          <div className="mb-2">
            <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-1 pr-6">
              {perfume.name}
            </h2>
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-medium text-copper-600">
                  {perfume.brand}
                </p>
                <p className="text-xs text-gray-500">
                  Inspired by {perfume.originalBrand}
                </p>
              </div>
              <Badge
                variant="secondary"
                className="bg-copper-100 text-copper-800 border-copper-300 text-xs"
              >
                {perfume.gender}
              </Badge>
            </div>
          </div>

          {/* Description */}
          {perfume.description && (
            <div className="p-2 bg-copper-50 rounded border border-copper-200 mb-2">
              <p className="text-xs text-gray-700 italic">
                {perfume.description}
              </p>
            </div>
          )}

          {/* Main Accords */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              Main Accords
            </h3>
            <div className="flex flex-wrap gap-1">
              {perfume.mainAccords.map((accord) => (
                <Badge
                  key={accord}
                  variant="outline"
                  className="border-copper-200 text-copper-700 bg-copper-50 text-xs"
                >
                  {accord}
                </Badge>
              ))}
            </div>
          </div>

          {/* Fragrance Details */}
          <div className="grid grid-cols-1 gap-1 mb-2">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-copper-500 flex-shrink-0" />
              <span className="text-xs font-medium text-gray-700">Time:</span>
              <span className="text-xs text-gray-600 truncate">
                {perfume.bestTime}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-copper-500 flex-shrink-0" />
              <span className="text-xs font-medium text-gray-700">
                Seasons:
              </span>
              <span className="text-xs text-gray-600 truncate">
                {perfume.mainSeasons.join(", ")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Droplets className="w-3 h-3 text-copper-500 flex-shrink-0" />
              <span className="text-xs font-medium text-gray-700">
                Sillage:
              </span>
              <span className="text-xs text-gray-600 truncate">
                {perfume.sillage}
              </span>
            </div>
          </div>

          {/* Notes Pyramid - Compact */}
          <div className="grid grid-cols-3 gap-1 mb-2">
            <div className="text-center">
              <h4 className="text-xs font-semibold text-gray-800 mb-1">Top</h4>
              <div className="text-xs text-gray-600">
                {perfume.topNotes.map((note) => (
                  <p key={note} className="truncate">
                    {note}
                  </p>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xs font-semibold text-gray-800 mb-1">
                Middle
              </h4>
              <div className="text-xs text-gray-600">
                {perfume.middleNotes.map((note) => (
                  <p key={note} className="truncate">
                    {note}
                  </p>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xs font-semibold text-gray-800 mb-1">Base</h4>
              <div className="text-xs text-gray-600">
                {perfume.baseNotes.map((note) => (
                  <p key={note} className="truncate">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Sizes and Pricing Display - Compact */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-800">
              Sizes & Prices
            </h3>
            <div className="grid grid-cols-3 gap-1">
              {perfume.sizes.map((size) => (
                <Card
                  key={size.size}
                  className="border-copper-200 bg-copper-50"
                >
                  <CardContent className="p-1 text-center">
                    <div className="text-xs font-semibold text-gray-800">
                      {size.size}
                    </div>
                    <div className="text-sm font-bold text-copper-700">
                      ${size.price}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-2">
              {/* Buy Button */}
              <Button
                className="w-full bg-copper-600 hover:bg-copper-700 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={() => {
                  const buyUrl = getPerfumeBuyUrl(perfume.id);
                  window.open(buyUrl, "_blank", "noopener,noreferrer");
                }}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy Now
              </Button>

              {/* Compare Section */}
              <div className="p-2 bg-gradient-to-br from-copper-50 to-copper-100 rounded border border-copper-200">
                <Button
                  variant="outline"
                  className="w-full border-copper-300 text-copper-700 hover:bg-copper-50 text-sm h-8"
                  onClick={() => onCompare?.(perfume)}
                  disabled={isInComparison}
                >
                  <Scale className="w-4 h-4 mr-2" />
                  {isInComparison ? "Added" : "Compare Perfumes"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
