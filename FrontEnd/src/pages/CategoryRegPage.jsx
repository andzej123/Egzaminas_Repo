import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/navigationbar/NavigationBar";
import CategoryForm from "../components/forms/CategoryForm";
import { EditContext } from "../App";

const CategoryRegPage = () => {
    const { setEditCategory } = useContext(EditContext);
    const navigate = useNavigate();
  
    const navigateHandler = () => {
      setEditCategory(false);
      navigate("/categories");
    };
  
    return (
      <>
        <NavigationBar />
        
          <button className="buttonBarButton" onClick={navigateHandler}>
            Back
          </button>
        
        <CategoryForm />
      </>
    );
  };
  
  export default CategoryRegPage;