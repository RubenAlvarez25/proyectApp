import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../services/news";

import "./allNewsPageStyle.scss";

export const AllNewsPageComponent = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    getData(`/getNews`)
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="div-ppl-allNews">
      {" "}
      {data?.map((item, index) => (
        <h1 key={index}>{item.title}</h1>
      ))}
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};
