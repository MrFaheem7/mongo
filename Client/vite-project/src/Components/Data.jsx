import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Data = () => {
  const { token, loading } = useSelector((state) => state.root.user);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getAllSalesData", {
        headers: {
          Authorization: ` ${token}`,
          "Content-Type": "application/json", // You may need to adjust the content type based on your API
        },
      })
      .then((res) => {
        const arr = res.data.allSalesData;
        const firstTenElements = arr.slice(0, 10);
        console.log(firstTenElements, "10 elements");
        setData(firstTenElements);
        console.log(data, "data");
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {loading && <LinearProgress color="success" />}
      {data?.map((item, index) => {
        return (
          <>
            <p key={index}>{item.saleDate}</p>
          </>
        );
      })}
    </>
  );
};
export default Data;
