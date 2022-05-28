import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
     const initialFormState = {
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    };
  
  const [formData, setFormData] = useState({ ...initialFormState });
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const handleSubmit = (event) => {
      event.preventDefault();
      createRecipe(formData);
      setFormData({ ...initialFormState });
    };
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleContentChange = ({ target }) => {
        setFormData({
          ...formData,
          [target.name]: target.value,
        });
      };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" placeholder="Name" onChange={handleContentChange} value={formData.name}/>
            </td>
            <td>
              <input id="cuisine" name="cuisine" placeholder="Cuisine" onChange={handleContentChange} value={formData.cuisine}/>
            </td>
            <td>
              <input id="photo" name="photo" placeholder="URL" typ="url" onChange={handleContentChange} value={formData.photo}/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" placeholder="Ingredients" rows={3} onChange={handleContentChange} value={formData.ingredients}/>
            </td>
            <td>
              <textarea id="preparation" name="preparation" placeholder="Preparation" rows={3} onChange={handleContentChange} value={formData.preparation}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
