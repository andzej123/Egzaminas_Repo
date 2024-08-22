import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/navigationbar/NavigationBar";
import { useContext, useEffect, useState } from "react";
import { getUserRoleFromToken } from "../services/token";
import { EditContext } from "../App";
import ButtonsBar from "../components/buttonsbar/ButtonsBar";
import OfferList from "../components/offerlist/OfferList";

const HomePage = () => {
    const navigate = useNavigate();
  const { setEdit } = useContext(EditContext);

  const [role, setRole] = useState();

  const getRole = async () => {
    const role = await getUserRoleFromToken();
    setRole(role);
  };

  useEffect(() => {
    getRole();
  }, []);

  const navigateHandler = () => {
    setEdit(false);
    navigate("/offerspage");
  };
  return (
    <>
      <NavigationBar />
      <ButtonsBar>
      {role === "ADMIN" ? (
        
          <button className="buttonBarButton" onClick={navigateHandler}>
            Add New Offer
          </button>
        
      ) : (
        ""
      )}
      </ButtonsBar>
      <OfferList />
    </>
  );
};

export default HomePage;
