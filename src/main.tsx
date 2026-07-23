import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

function RedirectHandler({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const redirectPath = params.get('redirect') || sessionStorage.getItem('redirect')
    if (redirectPath && redirectPath !== '/') {
      sessionStorage.removeItem('redirect')
      navigate(redirectPath, { replace: true })
    } else {
      setReady(true)
    }
  }, [navigate])

  if (!ready && window.location.search.includes('redirect=')) return null
  return <>{children}</>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <RedirectHandler>
          <App />
        </RedirectHandler>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
