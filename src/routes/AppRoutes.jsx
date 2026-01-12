import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Loader } from '../components/loaders/Loader/index.jsx'
import { useCurrentUser } from '../hooks/auth/useCurrentUser.js'
import { NewsHistory } from '../pages/NewsHistory/index.jsx'

const Home = lazy(() => import('../pages/Home/index.jsx'))
const Login = lazy(() => import('../pages/Login/index.jsx'))
const NewsByCategory = lazy(() => import('../pages/NewsByCategory/index.jsx'))
const Register = lazy(() => import('../pages/Register/index.jsx'))
const UserProfile = lazy(() => import('../pages/UserProfile/index.jsx'))
const NewsBySearch = lazy(() => import('../pages/NewsBySearch/index.jsx'))
const NotFound = lazy(() => import('../pages/NotFound/index.jsx'))
const NotAuthorized = lazy(() => import('../pages/NotAuthorized/index.jsx'))
const Subscription = lazy(() => import('../pages/Subscription/index.jsx'))
const Data = lazy(() => import('../pages/Subscription/Data.jsx'))

const ThemeButton = lazy(() => import('../components/ThemeButton/index.jsx'))
const Footer = lazy(() => import('../components/layout/Footer/index.jsx'))

export default function AppRoutes() {
  const [] = React.useState(null)
  const { isUserLoggedIn } = useCurrentUser()

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/noticias'
            element={<Navigate to='/noticias/search/actualidad' replace />}
          />
          <Route
            path='/noticias/search'
            element={<Navigate to='/noticias/search/actualidad' replace />}
          />
          <Route path='/noticias/search/:search' element={<NewsBySearch />} />
          <Route
            path='/noticias/reload/:data'
            element={<ReloadPage baseURL={'/noticias'} />}
          />
          <Route path='/noticias/:category' element={<NewsByCategory />} />
          <Route
            path='/noticias/historial'
            element={isUserLoggedIn ? <NewsHistory /> : <NotAuthorized />}
          />
          <Route
            path='/login'
            element={
              isUserLoggedIn ? (
                <Navigate to='/usuario/perfil' replace />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path='/register'
            element={
              isUserLoggedIn ? (
                <Navigate to='/usuario/perfil' replace />
              ) : (
                <Register />
              )
            }
          />
          <Route
            path='/usuario/perfil'
            element={isUserLoggedIn ? <UserProfile /> : <NotAuthorized />}
          />
          <Route path='/suscripcion' element={<Subscription />} />
          <Route
            path='/suscripcion/data'
            element={isUserLoggedIn ? <Data /> : <NotAuthorized />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <ThemeButton />
      </BrowserRouter>
    </Suspense>
  )
}

function ReloadPage({ baseURL }) {
  let { data } = useParams()
  return <Navigate to={`${baseURL}/${data}`} replace />
}
