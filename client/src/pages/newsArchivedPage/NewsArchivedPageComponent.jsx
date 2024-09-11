import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, deleteNew } from "../../services/news";

import { Alert } from 'react-bootstrap';

import "./newsArchivedPageStyle.scss";

export const NewsArchivedPageComponent = () => {
  const navigate = useNavigate();

  const [archivedNews, setArchivedNews] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

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

    setAlertMessage('Noticia Borrada !');
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="div-ppl-archivedNews">
       {showAlert && (
          <Alert onClose={() => setShowAlert(false)}>
            {alertMessage}
          </Alert>
        )}
      <table>
        <thead>
          <tr>
            <th>Title</th>
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
      <button onClick={() => navigate(`/`)}>Volver</button>
    </div>
  );
};
