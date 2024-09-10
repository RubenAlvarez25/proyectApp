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

  const handleButtonClick = (item) => {
    console.log(item, "borrado");
  };

  return (
    <div className="div-ppl-archivedNews">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {archivedNews?.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>
                <button onClick={() => handleButtonClick(item)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};
