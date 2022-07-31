import React from "react";
import { useParams } from "react-router-dom";
import "./mealDetails.css"

function MealDetails({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  // const [strCategory, setStrCategory] = useState("");
  // const [strCategoryThumb, setStrCategoryThumb] = useState("");
  // const [strCategoryDescription, setStrCategoryDescription] = useState("");

  // let { idCategory } = useParams();

  // useEffect(() => {
  //   async function searchMeal() {
  //     const mealInfo = await fetch(
  //       `http://localhost:8000/categories/${idCategory}`
  //     );
  //     const strCategory = await mealInfo.json();
  //     setStrCategory(strCategory);
  //     setStrCategoryThumb(strCategoryThumb);
  //     setStrCategoryDescription(strCategoryDescription);
  //   }
  //   searchMeal();
  // }, );

  return (
    <article className="meal">
      <h4>{strCategory}</h4>
      <img src={strCategoryThumb} alt="" />
      <p>{strCategoryDescription}</p>
    </article>
  );
}

export default MealDetails;
