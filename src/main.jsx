import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter([
  { path: '/', element: <App />,
    children: [
      {path: '/', element: <Hero />}
    ]
   },

  { path: '/', element: <App />,
    children: [
      {path: '/home', element: <Hero />}
    ]
  },

  { path: '/', element: <App />,
  children: [
    { path: '/about', element: <About />}
  ]
  },

  { path: '/', element: <App />,
    children: [
      { path: '/contact', element: <Contact />}
    ]
    },

    
  
  { path: '/category-page', element: <App />,
    children:[
      {path: '/category-page/:category', element: <CategoryPage /> }, 
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)