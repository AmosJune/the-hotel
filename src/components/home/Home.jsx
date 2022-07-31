import React, { useState, useEffect } from "react";
import MealDetails from "../MealDetails/MealDetails";
import "./home.css";
import Search from "../search/Search";
import NewMeal from "../NewMeal/NewMeal";
import axios from "axios";

function Home() {
  const [meal, setMeal] = useState([]);
  const [filteredMeal, setFilteredMeal] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [thumb, setThumb] = useState("");
  const [description, setDescription] = useState("");
  const [newMeal, setNewMeal] = useState("");

  useEffect(() => {
    async function fetchMeals() {
      const allMeals = await fetch("http://localhost:8000/categories");
      const meal = await allMeals.json();

      setMeal(meal);
      setFilteredMeal(meal);
    }
    fetchMeals();
  }, []);

  const filteredMeals = meal.filter(
    (m) =>
      m.strCategory.toLowerCase().includes(search.toLowerCase()) ||
      m.strCategoryDescription.toLowerCase().includes(search.toLowerCase())
  );
  const handleSearch = (e) => setSearch(e.target.value);

  const handleCategory = (e) => setCategory(e.target.value);
  const handleThumb = (e) => setThumb(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeal = {
      idCategory: Date.now(),
      strCategory: category,
      strCategoryThumb: thumb,
      strCategoryDescription: description,
    };
    const addMeal = async () => {
      return await axios.post("http://localhost:8000/categories", newMeal);
    };
    addMeal();
  };

  return (
    <div className="container">
      <div className="meal-form">
        <NewMeal
          handleCategory={handleCategory}
          handleThumb={handleThumb}
          handleDescription={handleDescription}
          category={category}
          thumb={thumb}
          description={description}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="search">
        <Search handleSearch={handleSearch} search={search} />
      </div>

      <div className="meal-wrapper">
        <div className="meal-items">
          {filteredMeals.map(
            ({
              idCategory,
              strCategory,
              strCategoryThumb,
              strCategoryDescription,
            }) => {
              return (
                <MealDetails
                  key={idCategory}
                  strCategory={strCategory}
                  strCategoryThumb={strCategoryThumb}
                  strCategoryDescription={strCategoryDescription}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
