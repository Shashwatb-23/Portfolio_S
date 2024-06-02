import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About"
// import Card from "./components/Card/Card"
// import Carousel from './components/About/Carousel';
import Skill from "./components/Skill/Skill"
import Project from './components/Project/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
  { path: '/',
    element:<App />,
    errorElement:<Error/>,
    children:[
      { 
        path: '/',
        element:<Home/>,
      },
      { 
        path: '/about',
        element:<About/>,
      },
      { 
        path: '/skill',
        element:<Skill/>,
      },
      { 
        path: '/project',
        element:<Project />,
      },
      { 
        path: '/contact',
        element:<Contact/>,
      },
    ]
},
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)


