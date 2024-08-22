import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/navigationbar/NavigationBar";
import CategoryList from "../components/categorylist/CategoryList";
import ButtonsBar from "../components/buttonsbar/ButtonsBar";

const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavigationBar />
      <ButtonsBar>
      <button
        className="buttonBarButton"
        onClick={() => navigate("/newcategory")}
      >
        Add Category
      </button>
      </ButtonsBar>
      <CategoryList />
    </>
  );
};
export default CategoryPage;
