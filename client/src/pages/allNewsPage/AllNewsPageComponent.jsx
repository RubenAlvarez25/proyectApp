import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, updateNew } from "../../services/news";

import { Alert } from 'react-bootstrap';

import "./allNewsPageStyle.scss";

export const AllNewsPageComponent = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {

    getData(`/getNews`)

      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const handleButtonClick = (item, e) => {
    e.preventDefault();
    updateNew(`/updateArchived/${item._id}`);

    setData((prevData) =>
      prevData.filter((newsItem) => newsItem._id !== item._id)
    );

    setAlertMessage('Noticia archivada !');
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      <div className="div-ppl-allNews">
         {showAlert && (
          <Alert onClose={() => setShowAlert(false)}>
            {alertMessage}
          </Alert>
        )}
      <table>
        <thead>
          <tr>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>
                <button onClick={(e) => handleButtonClick(item, e)}>
                  Archivar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
    </>
    
  );
};
