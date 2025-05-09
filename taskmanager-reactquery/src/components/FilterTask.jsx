import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const FilterTask = () => {
  const { dispatch } = useContext(FilterContext);

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    dispatch({ type: "SET_FILTER", payload: selectedValue });
    console.log("Selected Filter: ", selectedValue);
  };
  return (
    <div>
      <span>
        <strong>Filter Tasks</strong>
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="urgent">Urgent</option>
          <option value="non-urgent">Non-Urgent</option>
        </select>
      </span>
    </div>
  );
};

export default FilterTask;
