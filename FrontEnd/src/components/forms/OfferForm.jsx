import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditContext } from "../../App";
import { useForm } from "react-hook-form";
import { getAllCategories, getOfferById } from "../../services/get";
import { addOffer } from "../../services/post";
import { updateOffer } from "../../services/update";

const OfferForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const { edit, setEdit } = useContext(EditContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const formSubmitHandler = async (data) => {
    if (edit) {
      try {
        await updateOffer(id, data);
        reset();
        navigate("/homepage");
        setEdit(false);
      } catch (error) {
        setError(error.message);
      }
    } else {
      try {
        await addOffer(data);
        reset();
        navigate("/homepage");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const [book, setBook] = useState({ labas: "rytas" });
  const [categories, setCategories] = useState([]);
  const getBook = async (id) => {
    const book = await getOfferById(id);
    setBook(book);
  };
  const getCategories = async () => {
    const categories = await getAllCategories();
    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
    if (edit) {
      getBook(id);
    }
  }, [id, edit]);

  useEffect(() => {
    if (edit) {
      const {
        name,
        description,
        city,
        price,
        category: { id: categoryId } = {},
      } = book;
      setTimeout(() => {
        setValue("name", name, { shouldValidate: true });
        setValue("description", description);
        setValue("city", city, { shouldValidate: true });
        setValue("price", price, { shouldValidate: true });
        setValue("category.id", categoryId, { shouldValidate: true });
      }, 100);
    }
  }, [book, edit, setValue]);

  return (
    <>
      <form
        className="form width-fitContent"
        noValidate
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <div className="formInputBody">
          <input
            className="formInput"
            type="text"
            placeholder="Offer name"
            {...register("name", {
              required: "This field is mandatory",
              validate: (value) => {
                return !!value.trim() || "This field is mandatory";
              },
            })}
          />
          {errors.name ? <p className="error">{errors.name.message}</p> : ""}
        </div>
        <div className="formInputBody">
          <textarea
            className="formInput"
            placeholder="Offer description"
            {...register("description")}
          />
        </div>
        <div className="formInputBody">
          <input
            type="text"
            className="formInput"
            placeholder="Price"
            {...register("price", {
              required: "This field is mandatory",
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Input must be number",
              },
            })}
          />
          {errors.price ? <p className="error">{errors.price.message}</p> : ""}
        </div>
        <div className="formInputBody">
          <input
            type="text"
            placeholder="City"
            className="formInput"
            {...register("city", {
              required: "This field is mandatory",
              validate: (value) => {
                return !!value.trim() || "This field is mandatory";
              },
            })}
          />
          {errors.city ? <p className="error">{errors.city.message}</p> : ""}
        </div>
        <div className="formInputBody">
          <select
            className="formInput"
            {...register("category.id", {
              required: "Please choose an category",
            })}
          >
            <option value="">Select category</option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          {errors.category ? (
            <p className="error">{errors.category.id.message}</p>
          ) : (
            ""
          )}
        </div>

        <input
          className="submitButton"
          type="submit"
          value={edit ? "Update Offer" : "Add Offer"}
        />
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default OfferForm;
