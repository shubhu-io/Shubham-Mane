import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

function RedirectHandler({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const handled = React.useRef(false)

  React.useEffect(() => {
    if (handled.current) return
    handled.current = true
    const params = new URLSearchParams(window.location.search)
    const redirectPath = params.get('redirect') || sessionStorage.getItem('redirect')
    if (redirectPath && redirectPath !== '/') {
      sessionStorage.removeItem('redirect')
      navigate('/' + redirectPath, { replace: true })
    }
  }, [navigate])

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
