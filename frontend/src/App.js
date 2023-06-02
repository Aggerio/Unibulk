import './App.css';
import './stylecom.css';
import Homepage from './components/Homepage/HomePage';
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
// import ErrorPage from './Errorpage';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, RouterProvider, Route, Routes } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navbar />,
//     errorElement: <ErrorPage />,
//     children: [
//       {

//         children: [
//           {
//             path: '/home',
//             element: <Homepage />,
//           },
//           {
//             path: '/shop',
//             element: <Shop />
//           }
//         ]
//       },
//       {
//         path: '/blog',

//         element: <Blog />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/home" element={<Homepage />}>
        </Route>
        <Route path="/shop" element={<Shop />}>
        </Route>
        <Route path="/blog" element={<Blog />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
        <Route path="/cart" element={<Cart />}>
        </Route>
      </Routes>
    </Router>
  );
}

// function App() {
//   return <RouterProvider router={router} />
// }

export default App;
