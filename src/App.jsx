import React from "react";
import { BrowserRouter,Routes,Route } from "react-router";
import { ToastContainer} from "react-toastify";
import Menu from "./Component/Menu";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Update from "./Pages/Update";
import NotFound from "./Pages/NotFound";

function App(props){
  return(
    <BrowserRouter>
    <Menu/>
    <ToastContainer autoClose="3000" position="top-right"/>
    <Routes>
      <Route path={`/`} element={<Home/>}></Route>
      <Route path={`/create`} element={<Create/>}></Route>
      <Route path={`/edit/:id`} element={<Update/>}></Route>
      <Route path={`/*`} element={<NotFound/>}></Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
