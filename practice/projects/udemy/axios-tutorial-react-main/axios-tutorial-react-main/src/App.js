// import Title from "./components/Title";
// import Getup from "./examples/6-interceptors";

// function App() {
//   return (
//     <main>
//       <Title />
//       <Getup />
//     </main>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://fakestoreapi.com/products/1";
const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <p>id:{data.id}</p>
      <p>category:{data.category}</p>
      <p>title:{data.title}</p>
      <p>desc:{data.description}</p>
      <p>price:Rs.{data.price}</p>
    </div>
  );
};

export default App;
