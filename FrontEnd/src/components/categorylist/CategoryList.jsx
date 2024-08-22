import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../services/get";
import { EditContext, UpdateContext } from "../../App";
import { deleteCategoryById } from "../../services/delete";
import './CategoryList.css'

const CategoryList = () => {
    const { update, setUpdate } = useContext(UpdateContext);
    const [categories, setCategories] = useState([]);
    const { setEditCategory } = useContext(EditContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
  
    const getCategories = async () => {
      const categories = await getAllCategories();
      setCategories(categories);
    };
    useEffect(() => {
      getCategories();
    }, [update]);

    const deleteHandler = async (id) => {
        try {
          await deleteCategoryById(id);
          setUpdate((update) => update + 1);
        } catch (error) {
          setError(error.message);
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      };
    
      const updateHandler = (id) => {
        setEditCategory(true);
        navigate(`/categoryedit/${id}`);
      };
  
    
  
   
  
    return (
      <>
        {error && <p className="error">{error}</p>}
        {categories.map((category) => {
          return (
            <div className="singleCategory" key={category.id}>
              {category.name} &nbsp;
              <button
                className="buttonBarButton"
                onClick={() => deleteHandler(category.id)}
              >
                DELETE
              </button>
              <button
                className="buttonBarButton"
                onClick={() => updateHandler(category.id)}
              >
                UPDATE
              </button>
              
                
            
            </div>
          );
        })}
      </>
    );
  };
  export default CategoryList;