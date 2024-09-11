import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNew } from "../../services/news";
import { FormComponent } from "../../components/forms/FormComponent";

import { Alert } from "react-bootstrap";

import "./homePageStyle.scss";

export const HomePageComponent = () => {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleFormSubmit = (formData) => {
    try {
      const response = createNew("/createNews", formData);

      setAlertMessage("Nueva Noticia !");
      setShowAlert(true);
    } catch (error) {
      console.error("Error creating news:", error);
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      <div className="div-ppl-home">
        <h1>BIENVENIDO A LA PAGINA PRINCIPAL</h1>
        <button onClick={() => navigate(`/allNews`)}>TODAS LAS NOTICIAS</button>
        <button onClick={() => navigate(`/archived`)}>
          NOTICIAS ARCHIVADAS
        </button>
      </div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>{alertMessage}</Alert>
      )}
      <div>
        <FormComponent onSubmit={handleFormSubmit} />
      </div>
    </>
  );
};
