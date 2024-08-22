import { useContext, useEffect, useState } from "react";
import "./Offer.css";
import { getUserRoleFromToken } from "../services/token";
import { deleteOfferById } from "../services/delete";
import { EditContext, UpdateContext } from "../App";
import { useNavigate } from "react-router-dom";
const Offer = ({ offer }) => {
  const { id, name, description, price, city } = offer;
  const [error, setError] = useState("");
  const [role, setRole] = useState();
  const { setUpdate } = useContext(UpdateContext);
  const navigate = useNavigate();
  const { setEdit } = useContext(EditContext);

  const getRole = async () => {
    const role = await getUserRoleFromToken();
    setRole(role);
  };

  useEffect(() => {
    getRole();
  }, []);

  const deleteHandler = async () => {
    try {
      await deleteOfferById(id);
      setUpdate((update) => update + 1);
      navigate("/homepage");
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const updateHandler = () => {
    setEdit(true);
    navigate(`/offeredit/${id}`);
  };

  const commentHandler = () => {
    navigate(`/comment/${id}`);
  };

  const commenViewtHandler = () => {
    navigate(`/commentslist/${id}`);
  };

  return (
    <>
      {error && <p className="error">{error}</p>}
      <div className="singleOffer">
        <p>
          <span>Name: </span>
          {name}
        </p>
        <p>
          <span>Description: </span>
          {description}
        </p>
        <p>
          <span>Price: </span>
          {price}
        </p>
        <p>
          <span>City: </span>
          {city}
        </p>
        <p>
          <span>Category: </span>
          {offer.category.name}
        </p>
        <button className="buttonBarButton" onClick={commentHandler}>
          Add Comment
        </button>
        <button className="buttonBarButton" onClick={commenViewtHandler}>
          View Comments
        </button>
        {role === "ADMIN" ? (
          <>
            <button className="buttonBarButton" onClick={deleteHandler}>
              Delete Offer
            </button>
            <button className="buttonBarButton" onClick={updateHandler}>
              Edit Offer
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Offer;
