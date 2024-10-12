import { Link } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { useContext, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import authApi from 'src/apis/auth.api'
import { toast } from 'react-toastify'
import { AppContext, AppContextType } from 'src/contexts/app.context'

export default function Home() {
  const [idToken, setIdToken] = useState<string>('')
  const queryClient = useQueryClient()

  const { setIsAuthenticated, setUser } = useContext<AppContextType>(AppContext)
  const mutationLogin = useMutation({
    mutationFn: authApi.login,
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ['login']
      })
      const { data } = res

      const user = {
        id: data.id,
        email: data.email,
        fullName: data.full_name,
        avatar: data.avatar
      }

      setIsAuthenticated(true)
      setUser(user)
      toast.success('Login successfully!')
    },
    onError: (error: any) => {
      console.log('Login with google error:', error)
    }
  })

  useEffect(() => {
    if (idToken !== '') {
      mutationLogin.mutate({ id_token: idToken })
    }
  }, [idToken])

  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center bg-zinc-800'>
      <img src='/vite.svg' alt='Bonbon logo' className='mb-4 h-24' />
      <h1 className='font-sans text-white'>BonBon Application 🤑</h1>
      <p className='mt-4 font-sans text-white'>An application that helps you to manage your money</p>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <div className='mt-4'>
          <GoogleLogin
            onSuccess={(authResponse) => {
              setIdToken(authResponse.credential as string)
              console.log('authResponse', authResponse)
            }}
          />
        </div>
      </GoogleOAuthProvider>

      <Link to='#' target='_blank' className='mt-4 font-sans text-sky-400 underline'>
        Download mobile app now
      </Link>
    </div>
  )
}
