import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./navBarStyle.scss";

export const NavbarComponent = () => {
  return (
    <>
      <Navbar className="navbar-custom">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand-custom">
            ALLFOUNDS CRUD
          </Navbar.Brand>
          <div className="navbar-buttons">
            <Button href="/allNews" className="navbar-button">
              Nuevas noticias
            </Button>
            <Button href="/archived" className="navbar-button">
              Noticias archivadas
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
