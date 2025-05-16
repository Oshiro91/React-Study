import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StarRating from './StarRating'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} defaultRating={3} />
  </StrictMode>,
)
