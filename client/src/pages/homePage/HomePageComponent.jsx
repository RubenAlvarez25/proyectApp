import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../services/news";

import "./homePageStyle.scss";

export const HomePageComponent = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    getData(``)
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="div-ppl-home">
      <h1>BIENVENIDO A LA PAGINA PRINCIPAL</h1>
      <button onClick={() => navigate(`/allNews`)}>TODAS LAS NOTICIAS</button>
      <button onClick={() => navigate(`/archived`)}>NOTICIAS ARCHIVADAS</button>
    </div>
  );
};
