import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              MenstruationEdu
            </h1>
            <p className="text-gray-600 text-sm">
              Your comprehensive guide to menstrual health and hygiene
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
