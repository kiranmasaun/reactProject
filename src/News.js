import React, { useState, useEffect } from "react";
import axios from "axios";
import Lists from "./Lists";

const News = () => {
  const [value, getSearch] = useState(""); // for search field empty data return
  const [results, setData] = useState([]); // for empty results in starting stage

  useEffect(() => {
    let timeId = null;
    if (value) {
      timeId = setTimeout(async () => {
        // set timeout to get result after specific interval of time
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          // await function is used to wait till the results does not get
          // axios function is used to get results from API
          params: {
            // These params are used in wikipedia API
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: value,
          },
        });

        setData(data.query.search);
      }, 1000);
    }

    return () => {
      clearTimeout(timeId); // Need to clear timeout after result get
    };
  }, [value]);

  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          id="search"
          className="form-control m-4 p-2"
          value={value}
          onChange={(e) => getSearch(e.target.value)}
        />
      </form>

      <Lists results={results} />
    </React.Fragment>
  );
};

export default News;
