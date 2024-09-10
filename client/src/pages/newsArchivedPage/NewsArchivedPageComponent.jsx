import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../services/news";

import "./newsArchivedPageStyle.scss";

export const NewsArchivedPageComponent = () => {
  const navigate = useNavigate();

  const [archivedNews, setArchivedNews] = useState(null);

  useEffect(() => {
    getData(`/getArchivedNews`)
      .then((result) => {
        setArchivedNews(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="div-ppl-archivedNews">
      {archivedNews?.map((item, index) => (
        <h1>{item.title}</h1>
      ))}
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};
