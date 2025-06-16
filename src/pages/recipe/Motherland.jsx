import recipes from "../../lib/recipe.json"

export default function recipe(){
    const motherland = recipes.map((recipe) => (
        <section key={recipe.id} className=" ">
            <div className="circle">
                <h2 className="title"><a href={recipe.deployed} target="_blank">{recipe.title}</a></h2>
                <img className="recipeimage"src={recipe.image} alt={recipe.title}/>
            </div>
        </section>
    ));
return (
    <>
        {motherland}
    </>
)                      
};