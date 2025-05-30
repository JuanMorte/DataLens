import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@context/useAuth';

const ProtectedRoute = ({ children }) => {
    const { user, authLoading } = useAuth()
    const location = useLocation()
    console.log(user)
    console.log(!user)

    if (authLoading) {
        return <div>Loading...</div>; // or a spinner component
    }
    
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (!user.subscribed) {
        return <Navigate to="/subscribe" state={{ from: location }} replace />
    }

    return children;
}

export default ProtectedRoute;