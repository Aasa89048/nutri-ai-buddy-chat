
interface NutritionResponse {
  keywords: string[];
  response: string;
}

export const nutritionResponses: NutritionResponse[] = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hello! I'm your AI Nutrition Buddy. How can I help with your nutrition questions today?"
  },
  {
    keywords: ["healthy breakfast", "breakfast ideas", "morning meal"],
    response: "Great breakfast options include:\n\n• Oatmeal with fruits and nuts\n• Greek yogurt with berries and honey\n• Whole grain toast with avocado and eggs\n• Smoothie with spinach, banana, and protein powder\n\nAim for a balance of protein, complex carbs, and healthy fats to keep you energized throughout the morning."
  },
  {
    keywords: ["weight loss", "lose weight", "diet for weight loss"],
    response: "Sustainable weight loss typically involves:\n\n• Creating a moderate calorie deficit (300-500 calories/day)\n• Focusing on whole foods rather than processed foods\n• Increasing protein intake to maintain muscle mass\n• Regular physical activity including both cardio and strength training\n• Adequate sleep and stress management\n\nRemember that healthy weight loss is typically 1-2 pounds per week. Anything faster may be difficult to maintain long-term."
  },
  {
    keywords: ["protein", "protein sources", "protein rich"],
    response: "Good sources of protein include:\n\n• Animal-based: chicken, turkey, fish, eggs, dairy\n• Plant-based: tofu, tempeh, legumes, lentils, beans\n• Nuts and seeds: almonds, chia seeds, hemp seeds\n• Grains: quinoa, amaranth\n\nMost adults need around 0.8g of protein per kg of body weight daily, but athletes and active individuals may need more."
  },
  {
    keywords: ["carbs", "carbohydrates", "good carbs"],
    response: "Healthy carbohydrate sources include:\n\n• Whole grains (oats, brown rice, quinoa)\n• Fruits and vegetables\n• Legumes (beans, lentils)\n• Starchy vegetables (sweet potatoes, squash)\n\nThese complex carbs provide sustained energy and are rich in fiber, vitamins, and minerals."
  },
  {
    keywords: ["fats", "healthy fats", "good fats"],
    response: "Nutritious sources of fats include:\n\n• Avocados\n• Olive oil and olives\n• Nuts and seeds (walnuts, flaxseeds, chia seeds)\n• Fatty fish (salmon, mackerel, sardines)\n\nHealthy fats support brain health, hormone production, and help with vitamin absorption."
  },
  {
    keywords: ["meal prep", "meal planning", "prepare meals"],
    response: "Effective meal prep strategies:\n\n• Start with a weekly plan and shopping list\n• Prepare proteins, grains, and vegetables in batches\n• Use similar ingredients in multiple meals for efficiency\n• Store properly in containers suitable for refrigeration or freezing\n• Include variety to prevent boredom\n• Prepare grab-and-go snacks too\n\nEven prepping components rather than full meals can save time during busy weekdays."
  },
  {
    keywords: ["vegetarian", "vegan", "plant-based"],
    response: "Key nutrients to focus on with plant-based diets:\n\n• Protein: legumes, tofu, tempeh, seitan\n• Vitamin B12: fortified foods or supplements\n• Iron: lentils, spinach, fortified cereals, paired with vitamin C for absorption\n• Calcium: fortified plant milks, tofu, leafy greens\n• Omega-3s: flaxseeds, chia seeds, walnuts, algae-based supplements\n\nA well-planned plant-based diet can meet all your nutritional needs."
  },
  {
    keywords: ["intermittent fasting", "fasting", "if diet"],
    response: "Intermittent fasting involves cycling between periods of eating and fasting. Common approaches include:\n\n• 16:8 (16 hours fasting, 8 hour eating window)\n• 5:2 (5 days normal eating, 2 days restricted calories)\n• Alternate day fasting\n\nPotential benefits include improved insulin sensitivity and cellular repair processes. However, it's not suitable for everyone, particularly those with certain medical conditions or a history of disordered eating."
  },
  {
    keywords: ["vitamins", "minerals", "supplements"],
    response: "While a balanced diet should provide most nutrients, common supplements include:\n\n• Vitamin D: Often needed in northern climates or with limited sun exposure\n• Vitamin B12: Particularly important for vegans/vegetarians\n• Omega-3s: If fatty fish consumption is limited\n• Iron: For those with increased needs (menstruating women, athletes, pregnant women)\n\nAlways consult with a healthcare provider before starting supplements, as more isn't always better."
  },
  {
    keywords: ["how are you", "what can you do"],
    response: "I'm your AI Nutrition Buddy! I can provide general nutrition information, answer questions about healthy eating, suggest meal ideas, and offer guidance on common nutrition topics. Feel free to ask me about foods, nutrients, diets, or meal planning! What would you like to know about?"
  }
];

export const fallbackResponses = [
  "That's an interesting nutrition question. While I don't have specific information on that topic, I'd recommend consulting with a registered dietitian for personalized advice.",
  "Great question about nutrition! I don't have detailed information on that specific topic. Consider researching reliable sources like the Academy of Nutrition and Dietetics or speaking with a healthcare provider.",
  "I'm still learning about nutrition topics. For that specific question, you might want to check resources from organizations like the CDC or NIH for evidence-based information.",
  "I don't have comprehensive information on that nutrition topic yet. A registered dietitian could provide personalized guidance based on your specific health needs and goals.",
  "That's beyond my current nutrition knowledge. For specific dietary advice, especially related to medical conditions, please consult with qualified healthcare professionals."
];

export function getRandomFallbackResponse(): string {
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
}

export function findResponse(userInput: string): string {
  const normalizedInput = userInput.toLowerCase();
  
  for (const item of nutritionResponses) {
    if (item.keywords.some(keyword => normalizedInput.includes(keyword))) {
      return item.response;
    }
  }
  
  return getRandomFallbackResponse();
}
