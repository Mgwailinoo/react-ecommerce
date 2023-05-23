import { Navigate } from "react-router-dom";
import { useLoginContext } from "../Context/LoginContext";
export const RouteGard = ({ children }) => {
  const { loggedIn } = useLoginContext();
  if (loggedIn) return children;
  else return <Navigate to="/login" />;
};
