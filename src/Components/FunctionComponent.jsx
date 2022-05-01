import React, { useState } from "react";
import MovieList from "../MovieList";

const FunctionComponent = () => {
  const [search, getState] = useState("");
  const [data, getData] = useState([]);

  const setValue = (event) => {
    getState(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=8012741b`
    );
    const data = await response.json();

    getData(data.Search);
  };

  return (
    <div className="container m-4 p-2">
      <div className="row">
        <div className="col-6">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Enter Movie Name"
              type="text"
              value={search}
              onChange={setValue}
            />
            <button
              disabled={search.length < 3 ? "diabled" : ""}
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 row">
        <h3 className="text-center">Movies List</h3>
        <MovieList MovieList={data} />
      </div>
    </div>
  );
};

export default FunctionComponent;
