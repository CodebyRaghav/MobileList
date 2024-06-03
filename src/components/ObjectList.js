import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ObjectList.css";
const url = "https://api.restful-api.dev/objects";
const ObjectList = () => {
  const [objIdList, setObjIdList] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setObjIdList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {objIdList.map((post) => {
        const { id, name, data } = post;

        return (
          <div className="List" key={id}>
            <div className="List2">
              <p>Sr.No.: {id}</p>
              <p>Model Name: {name}</p>
              {/* <p>Color: {data?.}</p> */}
              {data &&
                Object.keys(data).map((everyProperty) => {
                  return (
                    <div className="insidedata">
                      {everyProperty} : {data[everyProperty]}
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ObjectList;
