import React from "react";
import RecipeCard from "@/components/RecipeCard";
import ServingsCounter from "@/components/ServingCounter";

export default function RecipesPage() {
  return (
    <main>
      <h1>Recipes</h1>
      <ServingsCounter />
      <RecipeCard name="Pasta" servings={4} />
      <RecipeCard name="Salad" servings={2} />
    </main>
  );
}