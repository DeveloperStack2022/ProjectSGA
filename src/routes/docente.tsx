import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import AdminLayout from "../components/Layout/AdminLayoutDocente";
//{ children}:{children:JSX.Element}
export const ProtectedRouteDocente = () => {
  const { username } = useAuth();
  // if (!username) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};
