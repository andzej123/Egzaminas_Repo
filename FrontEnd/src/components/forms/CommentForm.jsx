import { useContext, useState } from "react";
import { UpdateContext } from "../../App";
import { useForm } from "react-hook-form";
import { getUsernameFromToken } from "../../services/token";
import { useNavigate, useParams } from "react-router-dom";
import { addComment } from "../../services/post";

const CommentForm = () => {
  const [error, setError] = useState("");

  const { setUpdate } = useContext(UpdateContext);

  const { id } = useParams();

  const navigate = useNavigate();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formSubmitHandler = async (data) => {
    try {
      const username = await getUsernameFromToken();
      const newData = {
        ...data,
        offer: {
          id: id,
        },
        user: {
          username: username,
        },
      };
      
      await addComment(newData);
      setUpdate((update) => update + 1);
      reset();
      navigate("/homepage");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form
        noValidate
        className="form commentForm"
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <div className="formInputBody">
          <textarea
            className="formInput commentFormTextArea"
            placeholder="Comment"
            {...register("message", {
              required: "This field is mandatory",
              validate: (value) => {
                return !!value.trim() || "This field is mandatory";
              },
            })}
          ></textarea>
          {errors.message ? (
            <p className="error">{errors.message.message}</p>
          ) : (
            ""
          )}
        </div>

        <input className="submitButton" type="submit" value="Add Comment" />
        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
};

export default CommentForm;
