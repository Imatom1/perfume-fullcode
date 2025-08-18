import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Crown, ArrowRight, CheckCircle, Plus } from "lucide-react";
import { Header } from "../components/Header";

export default function CompareIntro() {
  const navigate = useNavigate();

  const features = [
    "Side-by-side detailed comparison table",
    "Compare fragrance profiles and notes",
    "Analyze seasonal preferences and occasions",
    "Compare up to 3 fragrances at once",
    "Shareable comparison links",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-copper-50 via-cream-50 to-copper-100">
      <Header />

      {/* Page Header */}
      <div
        className="bg-gradient-to-r from-copper-100 via-copper-200 to-copper-300 py-16 relative overflow-hidden
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] before:animate-shimmer before:transition-transform"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Scale className="w-12 h-12 text-copper-700" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-copper-800 via-copper-700 to-copper-600 bg-clip-text text-transparent">
                Compare Fragrances
              </h1>
              <Crown className="w-12 h-12 text-copper-700" />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Compare up to 3 fragrances side-by-side to find your perfect match
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - How It Works */}
          <Card
            className="bg-gradient-to-br from-copper-50 via-copper-100 to-copper-200 border-2 border-copper-400 shadow-xl relative overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] before:animate-shimmer before:transition-transform"
          >
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Crown className="w-6 h-6 text-copper-700" />
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-copper-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Select Fragrances
                    </h3>
                    <p className="text-sm text-gray-600">
                      Choose up to 3 fragrances from our collection to compare
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-copper-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      View Detailed Table
                    </h3>
                    <p className="text-sm text-gray-600">
                      See side-by-side comparison of notes, profiles, and
                      characteristics
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-copper-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Make Your Choice
                    </h3>
                    <p className="text-sm text-gray-600">
                      Analyze differences and find the perfect fragrance for you
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Features */}
          <Card
            className="bg-gradient-to-br from-copper-50 via-copper-100 to-copper-200 border-2 border-copper-400 shadow-xl relative overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] before:animate-shimmer before:transition-transform"
          >
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Scale className="w-6 h-6 text-copper-700" />
                Comparison Features
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-copper-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card
            className="bg-gradient-to-r from-copper-200 via-copper-300 to-copper-400 border-2 border-copper-500 shadow-xl relative overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] before:animate-shimmer before:transition-transform"
          >
            <CardContent className="p-8 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Ready to Compare Fragrances?
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Start comparing fragrances side-by-side to make the perfect
                  choice
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    onClick={() => navigate("/compare")}
                    className="bg-copper-600 hover:bg-copper-700 text-white font-bold text-lg px-8 py-4"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Start Comparing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/")}
                    className="border-copper-600 text-copper-800 hover:bg-copper-100 font-semibold text-lg px-8 py-4"
                  >
                    Browse All Fragrances
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
