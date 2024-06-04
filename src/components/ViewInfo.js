import React, { useState } from "react";
import "./ViewInfo.css";

const ViewInfo = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [id, setId] = useState(props.id);

  function PopupComponent() {
    console.log(apiData, "api");
    return (
      <div className="post">
        <h2 className="author">Information</h2>
        <div className="text">
          <p>Name of Model: {apiData.name}</p>
          <p>Color: {apiData.data ? apiData.data.color : "Not Available"}</p>
          <p>
            Capacity:{" "}
            {apiData.data?.capacity ? apiData.data.capacity : "Not Avaialble"}
          </p>
          <p>
            Price: {apiData.data?.price ? apiData.data.price : "Not Available"}
          </p>

          <p>
            Generation:
            {apiData.data?.generation
              ? apiData.data.generation
              : "Not Available"}
          </p>
          <p>
            Launching Year:{" "}
            {apiData.data?.year ? apiData.data.year : "Not Available"}
          </p>
        </div>
      </div>
    );
  }

  const handleIdChange = (id) => {
    setShowPopup(!showPopup);
    setId(id);
    setApiData(props.getOneObjectData(id));
  };

  return (
    <div className="flex justify-around">
      {/* <input type="number" value={id} onChange={handleIdChange} /> */}
      {/* <p>{props.id}</p> */}
      <button
        onClick={() => handleIdChange(props.id)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {showPopup ? "Hide Popup" : "View Info"}
      </button>
      <button
        type="button"
        class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 me-2 mt-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Update Info
      </button>
      <button
        type="button"
        class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 me-2 mt-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
      >
        <a
          href="https://www.amazon.com/Google-Pixel-Pro-Smartphone-Telephoto/dp/B09HYR2NC8?th=1"
          target="_blank"
        >
          Buy
        </a>
      </button>
      {showPopup && apiData && <PopupComponent />}
    </div>
  );
};

export default ViewInfo;
