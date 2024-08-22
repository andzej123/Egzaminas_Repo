import { useContext, useEffect, useState } from "react";
import { UpdateContext } from "../../App";
import {
  getAllCategories,
  getAllOffers,
  getFilteredOffersByCategory,
} from "../../services/get";
import Offer from "../../offer/Offer";
import "./OfferList.css";

const OfferList = () => {
  const [offers, setoffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [categoryField, setCategoryField] = useState(0);
  const [categories, setCategories] = useState([]);

  const { update } = useContext(UpdateContext);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const data = await getAllOffers();
      const cat = await getAllCategories();
      setoffers(data);
      setCategories(cat);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [update]);

  const selectHandler = (e) => {
    setCategoryField(e.target.value);
  };

  useEffect(() => {
    const filterBooks = async () => {
      if (categoryField != 0) {
        const data = await getFilteredOffersByCategory(categoryField);
        setFilteredOffers(data);
      } else {
        setFilteredOffers(offers);
      }
    };
    filterBooks();
  }, [categoryField, offers]);

  return (
    <>
      <div className="searchBar">
        <select
          onChange={selectHandler}
          value={categoryField}
          className="formInput"
        >
          <option value="0">Search by category</option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="offersList">
        {filteredOffers.map((offer) => {
          return <Offer key={offer.id} offer={offer} />;
        })}
      </div>
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default OfferList;
