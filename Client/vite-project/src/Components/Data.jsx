import axios from "axios";
import { useEffect, useState } from "react";
const Data = () => {
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWIzYjJiNjVkYjA2ZDM0MzUwM2M1YjIiLCJpYXQiOjE3MDY2MjEzODEsImV4cCI6MTcwNjYyMTk4MX0.zuNqKPDvS51LPyN2FJMxVu6z5fdiTI55isnJ4Un2em8";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getAllSalesData", {
        headers: {
          Authorization: ` ${authToken}`,
          "Content-Type": "application/json", // You may need to adjust the content type based on your API
        },
      })
      .then((res) => {
        const arr = res.data.allSalesData;
        console.log(arr, "arrr");
        const firstTenElements = arr.slice(0, 10);
        console.log(firstTenElements, "10 elements");
        setData(firstTenElements);
        console.log(data, "data");
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <p>{item.saleDate}</p>
          </>
        );
      })}
    </>
  );
};
export default Data;
