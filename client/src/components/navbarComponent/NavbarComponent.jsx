import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const NavbarComponent = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Allfounds Careers Test</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
