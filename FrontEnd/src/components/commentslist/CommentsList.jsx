import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByOfferkId } from "../../services/get";

const CommentsList = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCommentsByOfferkId(id);
      setComments(response);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p> <span>{comment.username} : </span>{comment.message}</p>
          </div>
        );
      })}
    </>
  );
};

export default CommentsList;
