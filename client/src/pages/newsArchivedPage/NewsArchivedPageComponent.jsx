import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, deleteNew } from "../../services/news";

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
    deleteNew(`/deleteNews/${item._id}`);
    setArchivedNews(
      archivedNews.filter((newsItem) => newsItem._id !== item._id)
    );
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
