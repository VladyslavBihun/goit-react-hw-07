import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={handleChange}></input>
    </div>
  );
};

export default SearchBox;
