// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
<BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/lr6' : '/'}>
    <App />
</BrowserRouter>
