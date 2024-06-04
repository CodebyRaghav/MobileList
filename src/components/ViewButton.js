import React, { useState } from "react";

const ViewButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [id, setId] = useState(1);

  function PopupComponent() {
    console.log(apiData, "api");
    return (
      <div>
        <h2>Popup Component</h2>
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
          {" "}
          Generation:{" "}
          {apiData.data?.generation ? apiData.data.generation : "Not Available"}
        </p>
        <p>
          Launching Year:{" "}
          {apiData.data?.year ? apiData.data.year : "Not Available"}
        </p>
      </div>
    );
  }

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const result = await axios.get(
  //           `https://api.restful-api.dev/objects/${id}`
  //         );
  //         setApiData(result.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchData();
  //   }, [id]);

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input type="number" value={id} onChange={handleIdChange} />
      <button onClick={() => setShowPopup(!showPopup)}>
        {showPopup ? "Hide Popup" : "Show Popup"}
      </button>
      {showPopup && apiData && <PopupComponent />}
    </div>
  );
};

export default ViewButton;
