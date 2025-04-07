
import { Button } from "@/components/ui/button";
import NutritionChatbot from "@/components/NutritionChatbot";
import { Apple } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-nutrition-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-screen-lg">
        <div className="text-center mb-10">
          <div className="inline-block p-3 mb-4 bg-nutrition-100 rounded-full">
            <Apple className="h-8 w-8 text-nutrition-600" />
          </div>
          <h1 className="text-4xl font-bold mb-3">NutriAI Buddy</h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Your personal AI nutritionist to help with meal planning, dietary advice, and healthy eating habits.
          </p>
          <div className="flex gap-4 justify-center mt-5">
            <Button className="bg-nutrition-600 hover:bg-nutrition-700">
              Learn More
            </Button>
            <Button variant="outline">
              Nutrition Articles
            </Button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <NutritionChatbot />
        </div>
        
        <div className="text-center text-sm text-muted-foreground mt-10">
          <p>NutriAI Buddy provides general information and is not a substitute for professional medical advice.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
