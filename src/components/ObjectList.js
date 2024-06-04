import React, { useState } from "react";
import "./ObjectList.css";
import ViewInfo from "./ViewInfo";

// const url = "https://api.restful-api.dev/objects";
const ObjectList = () => {
  const [objIdList, setObjIdList] = useState([
    {
      id: "1",
      name: "Google Pixel 6 Pro",
      data: {
        color: "Cloudy White",
        capacity: "128 GB",
      },
    },
    {
      id: "2",
      name: "Apple iPhone 12 Mini",
      data: {
        color: "Blue",
        capacity: "256GB",
      },
    },
    {
      id: "3",
      name: "Apple iPhone 12 Pro Max",
      data: {
        color: "Cloudy White",
        "capacity GB": 512,
      },
    },
    {
      id: "4",
      name: "Apple iPhone 11, 64GB",
      data: {
        price: 389.99,
        color: "Purple",
      },
    },
    {
      id: "5",
      name: "Samsung Galaxy Z Fold2",
      data: {
        price: 689.99,
        color: "Brown",
      },
    },
    {
      id: "6",
      name: "Apple AirPods",
      data: {
        generation: "3rd",
        price: 120,
      },
    },
    {
      id: "7",
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    },
    {
      id: "8",
      name: "Apple Watch Series 8",
      data: {
        "Strap Colour": "Elderberry",
        "Case Size": "41mm",
      },
    },
    {
      id: "9",
      name: "Beats Studio3 Wireless",
      data: {
        Color: "Red",
        Description: "High-performance wireless noise cancelling headphones",
      },
    },
    {
      id: "10",
      name: "Apple iPad Mini 5th Gen",
      data: {
        Capacity: "64 GB",
        "Screen size": 7.9,
      },
    },
    {
      id: "11",
      name: "Apple iPad Mini 5th Gen",
      data: {
        Capacity: "254 GB",
        "Screen size": 7.9,
      },
    },
    {
      id: "12",
      name: "Apple iPad Air",
      data: {
        Generation: "4th",
        Price: "419.99",
        Capacity: "64 GB",
      },
    },
    {
      id: "13",
      name: "Apple iPad Air",
      data: {
        Generation: "4th",
        Price: "519.99",
        Capacity: "256 GB",
      },
    },
  ]);

  function getOneObjectData(id) {
    return objIdList.find((eachObj) => eachObj.id === id);
  }
  /*
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
  }, []);*/

  return (
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      {objIdList.map((post) => {
        const { id, name, data } = post;
        return (
          <div className="List" key={id}>
            <div className="List2">
              <p>Serial Number: {id}</p>
              <p>Model Name: {name}</p>
              {/* <p>Color: {data?.}</p> */}
              {/* {data &&
                Object.keys(data).map((everyProperty, index) => {
                  return (
                    <div className="insidedata" key={index}>
                      {everyProperty} : {data[everyProperty]}
                    </div>
                  );
                })} */}
              <ViewInfo id={id} getOneObjectData={getOneObjectData} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ObjectList;
