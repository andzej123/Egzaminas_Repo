import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/navigationbar/NavigationBar";
import OfferForm from "../components/forms/OfferForm";

const OffersPage = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/homepage");
  };

  return (
    <>
      <NavigationBar />

      <button className="buttonBarButton" onClick={navigateBack}>
        Back
      </button>

      <OfferForm />
    </>
  );
};

export default OffersPage;
