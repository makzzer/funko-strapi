import { useUserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateLayout = () => {
  const { user } = useUserContext();

  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default PrivateLayout;
