import { NavLink, NavLinks, Navbar } from "./components/Navbar";
import { User } from "./components/User";
import Chip from "@mui/material/Chip";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <br />

      <Navbar>
        <User onLogin={() => {}} onLogout={() => {}} user={null} />
      </Navbar>
      <br />

      <Navbar>
        <User
          onLogin={() => {}}
          onLogout={() => {}}
          user={{ name: "Name", fedid: "FedID" }}
        />
      </Navbar>
      <br />

      <Navbar>
        <NavLinks>
          <NavLink href="#">Proposal</NavLink>
          <NavLink href="#">Visits</NavLink>
        </NavLinks>
      </Navbar>
      <br />
      
      <Navbar logo={null}>
        <NavLinks>
          <NavLink href="#">Proposal</NavLink>
          <NavLink href="#">Visits</NavLink>
        </NavLinks>
      </Navbar>
      <br />

      <Navbar>
        <Chip label="Hello, World" />
      </Navbar>

    </>
  );
}

export default App;
