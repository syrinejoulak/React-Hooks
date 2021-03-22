import React from "react";

const FilterRate = ({ rateCheck, onRate }) => {
  return (
    <div className="rate-box">
      <h6>Rate: </h6>
      <form>
        <select className="custom-select" onChange={onRate}>
          <option value={0}>All the movies</option>
          <option value={9}>Movies rated 9 and above</option>
          <option value={8}>Movies rated 8 and above</option>
          <option value={7}>Movies rated 7 and above</option>
          <option value={6}>Movies rated below 7</option>
        </select>
      </form>
    </div>
  );
};

export default FilterRate;
