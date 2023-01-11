import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-detail py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={8} lg={6}>
            <p className="text-center text-footer-text">
              Copyright &copy; {new Date().getFullYear()} Tracktivity
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
  
  export default Footer;