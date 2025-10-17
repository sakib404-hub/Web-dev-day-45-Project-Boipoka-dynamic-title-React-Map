import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, } from "react-router";
import { router } from './Router/Router.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)

// map can not be used without the debit card he is borolok i need to Have 
// debit or credit card to use the map(for paying some fee) Google-map
