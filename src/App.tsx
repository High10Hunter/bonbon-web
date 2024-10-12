import useRouteElements from './useRoutesElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppContextProvider from './contexts/app.context'

function App() {
  const routeElements = useRouteElements()
  return (
    <>
      <AppContextProvider>
        {routeElements}
        <ToastContainer
          position='top-right'
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme='light'
        />
      </AppContextProvider>
    </>
  )
}

export default App
