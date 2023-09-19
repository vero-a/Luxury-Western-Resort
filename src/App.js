import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import {createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import Restaurant from "./pages/Restaurant";
import Spa from "./pages/Spa";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path: '/room/:id',
    element: <RoomDetails/>
  },
  {
    path: '/Restaurant',
    element: <Restaurant/>
  },
  {
    path: 'Spa',
    element: <Spa/>
  },
]);

function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  );
}

export default App;
