import { useEffect, useState } from "react"
import styled from "styled-components"

// using styled component here 
const Container = styled.div`
border:1px dashed black;
width:100%;
text-align:center;
`
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
gap:5%;
`
const Card = styled.div`
width:40%;
height:max-height;
border:1px solid black;
margin:2%;
padding:1%;
`
const Image = styled.img`
height:50%;
width:60%;
box-shadow:.2rem .3rem .5rem rgb(167, 186, 228);
position:relative;
opacity:.7;
transition:all .7s ease-in-out;
&:hover{
opacity:1;
}
`

const RecipeName = styled.h1`
font-size:1.3rem;
position:absolute;
`
const SpanTagDiv = styled.div`
margin-top:2rem;

`
const SpanTag = styled.span`
color:#FFFFFF;
padding:1.2rem;
`

export const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const fetchRecipes = async () => {
        //fetching APIs
        const response = await fetch("https://dummyjson.com/recipes")
        const data = await response.json()
        console.log(data)
        setRecipes(data.recipes)
    }
    useEffect(() => {
        fetchRecipes()
    }, []);
    return (
        // main container class 
        <Container>
            {/* wrapper class added  */}
            <Wrapper>
                {
                    recipes.map(recipe => (
                        <Card key={recipe.name}>
                            <Image src={recipe.image} alt={recipe.name} />
                            <RecipeName>{recipe.name}</RecipeName>
                            <br />
                            <SpanTagDiv>
                                {/* different card details added  */}
                                <SpanTag><strong>Prepration Time:</strong> {recipe.prepTimeMinutes} Mints.</SpanTag>
                                <SpanTag><strong>Cooking time:</strong> {recipe.cookTimeMinutes} Mints.</SpanTag>
                                <SpanTag><strong>Serving:</strong> {recipe.servings}</SpanTag>
                                <SpanTag><strong>Cusine </strong>: {recipe.cuisine}</SpanTag>
                                <SpanTag><strong>Calories:</strong> {recipe.caloriesPerServing}</SpanTag>
                                <SpanTag><strong>Ratings:</strong> {recipe.rating}</SpanTag>
                            </SpanTagDiv>
                            <li key={recipe.id}><strong>Ingredients:</strong>
                                {recipe.ingredients.map(ingredient =>
                                    <span key={ingredient}>{ingredient},</span>
                                )}</li>
                            <li><strong>Instructions: </strong>{recipe.instructions}</li>
                        </Card>
                    ))
                }
            </Wrapper>
        </Container>
    )
}