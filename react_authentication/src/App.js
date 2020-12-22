import Signup from "./components/Signup";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <Signup />
        </div>
      </Container>
    </div>
  );
}

export default App;
