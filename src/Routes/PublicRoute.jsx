import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getUser } from '../redux/selectors'

const PublicRoute = () => {
  const isLogin = useSelector(getUser)
  if (isLogin) {
    return <Navigate to='/' />
  }
  return <Outlet />
}

export default PublicRoute
