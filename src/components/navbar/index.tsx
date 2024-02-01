import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

export default function NavBarComponent({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar className="mb-4" style={{ backgroundColor: "black" }}>
        <NavbarBrand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", color: "white" }}
        >
          Blog <img src="/logo-edit.svg" alt="logo-longo" width="50%" />
        </NavbarBrand>
      </Navbar>
      {children}
    </div>
  );
}
