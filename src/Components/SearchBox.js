import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control form-dark"
        placeholder="Type to search..."
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
