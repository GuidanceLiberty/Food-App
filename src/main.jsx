import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Categories from './pages/Categories.jsx'
import CategoryDetail from './pages/CategoryDetail.jsx'
import Home from './pages/Home.jsx'
import ConfectionaryPage from './pages/ConfectionaryPage.jsx'
import Local from './pages/Local.jsx'
import Continental from './pages/Continental.jsx'
import Chinese from './pages/Chinese.jsx'
import Appetizer from './pages/Appetizer.jsx'
import Vegetarian from './pages/Vegetarian.jsx'
import Italian from './pages/Italian.jsx'


const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/home', element: <Home />},
  { path: '/about', element: <About />},
  { path: '/categories', element: <Categories />, 
    children: [
      { path: '/categories/:cate_id', element: <CategoryDetail />}
    ]
  }, 
  
  { path: '/category', element: <App />,
    children:[
      {path: '/category/confectioneries', element: <ConfectionaryPage /> }, 
    ]
  },
  
  
  { path: '/category', element: <App />,
    children:[
      {path: '/category/local', element: <Local /> }, 
    ]
  },
  
  { path: '/category', element: <App />,
    children:[
      {path: '/category/continental', element: <Continental /> }, 
    ]
  },

  { path: '/category', element: <App />,
    children:[
      {path: '/category/chinese', element: <Chinese /> }, 
    ]
  },

  { path: '/category', element: <App />,
    children:[
      {path: '/category/appetizer', element: <Appetizer /> }, 
    ]
  },

  { path: '/category', element: <App />,
    children:[
      {path: '/category/vegetarian', element: <Vegetarian /> }, 
    ]
  },

  { path: '/category', element: <App />,
    children:[
      {path: '/category/italian', element: <Italian /> }, 
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)