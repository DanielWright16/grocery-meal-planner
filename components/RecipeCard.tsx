type RecipeCardProps = {
    name: string;
    servings: number;
};

export default function RecipeCard({ name, servings }: RecipeCardProps) {
    return (
        <div className="recipe-card">
            <h2>{name}</h2>
            <p>Servings: {servings}</p>
        </div>
    );
}
