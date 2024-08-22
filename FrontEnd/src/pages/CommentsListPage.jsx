import { useNavigate } from "react-router-dom";
import CommentsList from "../components/commentslist/CommentsList";
import NavigationBar from "../components/navigationbar/NavigationBar";

const CommentsListPage = () => {
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
      <CommentsList />
    </>
  );
};

export default CommentsListPage;
