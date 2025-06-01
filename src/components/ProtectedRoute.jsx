import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@context/useAuth';

const ProtectedRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.subscribed) {
    return <Navigate to="/subscribe" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;