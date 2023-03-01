import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getUser } from '../redux/selectors'

const PrivateRoute = () => {
  const isLogin = useSelector(getUser)
  if (!isLogin) {
    return <Navigate to='/sign-in' />
  }
  return <Outlet />
}

export default PrivateRoute
