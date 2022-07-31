import React from "react";
import "./NewMeal.css";
// import { Link } from "react-router-dom";

function NewMeal({
  category,
  thumb,
  description,
  handleCategory,
  handleThumb,
  handleDescription,
  handleSubmit,
}) {
  return (
    <form className="meal-add" onSubmit={handleSubmit}>
      <h2 className="meal-title">Add Meal</h2>
      <div>
        <label htmlFor="category" className="category-label">
          Category
        </label>
        <input
          type="category"
          name="category"
          id="category"
          value={category}
          onChange={handleCategory}
          required
        />
      </div>
      <div>
        <label htmlFor="thumb" className="thumb-label">
          Meal Thumb
        </label>
        <input
          type="thumb"
          name="thumb"
          id="thumb"
          value={thumb}
          onChange={handleThumb}
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="description-label">
          Description
        </label>
        <textarea
          className="description"
          type="description"
          name="description"
          id="description"
          value={description}
          onChange={handleDescription}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewMeal;
