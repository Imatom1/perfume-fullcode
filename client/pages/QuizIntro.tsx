import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ArrowRight,
  Clock,
  Brain,
  Target,
  Sparkles,
  Users,
  Check,
} from "lucide-react";
import { Header } from "../components/Header";

export default function QuizIntro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-800 via-black-800 to-black-800">
      <Header />

      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Enhanced Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="relative">
              <Heart className="w-7 h-7 text-gold-700" />
              <Sparkles className="w-3 h-3 text-gold-500 absolute -top-1 -right-1" />
            </div>
            <h1 className="text-2xl font-bold text-gold-300">Fragrance Quiz</h1>
          </div>
          <p className="text-sm text-gold-300 mb-3">
            Find your perfect scent in under 3 minutes
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Our AI analyzes your style, mood preferences, and occasion needs to
            match you with fragrances that truly reflect your personality.
          </p>
        </div>

        {/* What You'll Get */}
        <Card className="bg-black-800 border border-black-700 shadow-sm mb-4">
          <CardContent className="p-4">
            <h3 className="text-sm font-semibold text-gold-300 mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-gold-600" />
              What You'll Get:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-gold-400 block">
                    6 Personalized Matches
                  </span>
                  <span className="text-xs text-gray-500">
                    Curated specifically for your taste profile
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-gold-400 block">
                    Detailed Explanations
                  </span>
                  <span className="text-xs text-gray-500">
                    Why each fragrance suits your personality
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-gold-400 block">
                    Occasion Recommendations
                  </span>
                  <span className="text-xs text-gray-500">
                    Perfect scents for work, dates, and events
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Facts */}
        <Card className="bg-black-800 border border-black-700 shadow-sm mb-6">
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="space-y-1">
                <Clock className="w-5 h-5 text-gold-600 mx-auto" />
                <div className="text-xs font-medium text-gold-400">
                  3 Minutes
                </div>
                <div className="text-xs text-gray-500">Quick & Easy</div>
              </div>
              <div className="space-y-1">
                <Brain className="w-5 h-5 text-gold-600 mx-auto" />
                <div className="text-xs font-medium text-gold-400">
                  AI Powered
                </div>
                <div className="text-xs text-gray-500">Smart Analysis</div>
              </div>
              <div className="space-y-1">
                <Users className="w-5 h-5 text-gold-600 mx-auto" />
                <div className="text-xs font-medium text-gold-400">
                  1K+ Users
                </div>
                <div className="text-xs text-gray-500">Trusted Results</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="space-y-3">
          <Button
            onClick={() => navigate("/quiz")}
            className="w-full bg-gold-600 hover:bg-gold-700 text-black-800 font-semibold py-4 text-base"
          >
            <Heart className="w-4 h-4 mr-2" />
            Start Your Fragrance Journey
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="w-full border-gold-300 text-gold-300 hover:bg-black-800 hover:text-white"
          >
            Browse All Fragrances Instead
          </Button>
        </div>

        {/* Enhanced How It Works */}
        <div className="mt-6 text-center">
          <p className="text-xs font-medium text-gold-300 mb-3">
            How it works:
          </p>
          <div className="space-y-2">
            <div className="flex justify-center items-center gap-2 text-xs text-gold-300">
              <span className="bg-black-800 px-3 py-1.5 rounded-full font-medium">
                1. Answer 6 Questions
              </span>
              <span className="text-gold-400">→</span>
              <span className="bg-black-800 px-3 py-1.5 rounded-full font-medium">
                2. AI Analysis
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-gold-400 text-xs">↓</span>
            </div>
            <div className="flex justify-center">
              <span className="bg-black-700 px-3 py-1.5 rounded-full font-medium text-xs text-gold-400">
                3. Get Perfect Matches
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            Join thousands who've discovered their signature scent through our
            personalized approach to fragrance matching.
          </p>
        </div>
      </div>
    </div>
  );
}
