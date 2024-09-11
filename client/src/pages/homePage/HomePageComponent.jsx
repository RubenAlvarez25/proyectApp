import { useState } from "react";
import { createNew } from "../../services/news";
import { FormComponent } from "../../components/forms/FormComponent";

import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import "./homePageStyle.scss";

export const HomePageComponent = () => {
  const [formVisible, setFormVisible] = useState(false);
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

  const handleButtonClick = () => {
    setFormVisible(!formVisible);
  };

  return (
    <>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>{alertMessage}</Alert>
      )}

      {formVisible ? (
        <div className="form-home">
          <FormComponent
            onSubmit={handleFormSubmit}
            handleButton={handleButtonClick}
          />
        </div>
      ) : (
        <div className="div-ppl-home">
          <Button onClick={handleButtonClick}>Añadir Noticias</Button>
        </div>
      )}
    </>
  );
};
