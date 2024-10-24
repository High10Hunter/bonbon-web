import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import PrivateLayout from 'src/components/layouts/PrivateLayout'
import { PATH_URL } from 'src/constants/path'
import { AppContext, AppContextType } from 'src/contexts/app.context'

function PrivateRoutes() {
  console.log('Render PrivateRoutes')

  const { isAuthenticated } = useContext<AppContextType>(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(PATH_URL.login)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return null
  }

  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  )
}

export default PrivateRoutes
