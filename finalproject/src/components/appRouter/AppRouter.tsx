import { useAuth } from 'hooks/useAuth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from 'routes/routes';

const AppRouter = () => {
  let auth = useAuth();

  
  return (
      <Routes>
        {/* authorization Pages  */}
        {auth.user &&
          authRoutes.map(({ path, Element }) => (
            <Route key={`Path name : ${path}`} path={path} element={Element} />
          ))}
        {/* Public Pages */}
        {publicRoutes.map(({ path, Element }) => (
          <Route key={`Path name : ${path}`} path={path} element={Element} />
        ))}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
  );
};

export default AppRouter;
