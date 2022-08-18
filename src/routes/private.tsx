import { Navigate,Outlet } from "react-router-dom";
import {useAuth} from '../context/useAuth'
import AdminLayout from '../components/Layout/AdminLayout'
//{ children}:{children:JSX.Element}
export const ProtectedRoute = () => {
  const {username} = useAuth()
  // if (!username) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>)
};
