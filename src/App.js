import React from "react";
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row,Col } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './component/Home';
import Course from "./component/Course";
import AllCourses from "./component/Allcourses";
import AddCourse from "./component/AddCourse";
//import Addcourse from './component/Addcourse'
import Header from "./component/Header";
import Menu from './component/Menus';
import { BrowserRouter, Route,Routes} from "react-router-dom";
import AboutComponent from "./component/About";
import ContactUsComponent from "./component/Contact";
import updateForm from './component/updateForm';
function App() {
  const btnHandle = () => {
    toast.error("done", {
      position: "top-center",
    });
  };
  return (
    <div>
      <ToastContainer /> 
      {/* <Home/>
      <Allcourses></Allcourses>
      <AddCourse></AddCourse> */}
      <BrowserRouter>
      <Container>
        <Header/>
        <Row>
          <Col md = {4}><Menu/></Col>
          <Col md ={8}>
            {/* <Home/> */}
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/view-courses" element={<AllCourses />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/contact" element={<ContactUsComponent />} />
              {/* <Route path="/update" element={<updateForm />} /> */}
            </Routes>
            
            </Col>
        </Row>
      </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;