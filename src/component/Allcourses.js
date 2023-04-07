import React, { useState,useEffect } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';
const Allcourse = () =>{
// Array of all Course. 
//React Hoock

    useEffect(()=>{
        document.title="All Courses";
    },[]);


    // fxn to call server

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                // Success
                console.log(response.data);
                toast.success("course has been loaded",{
                    position:"bottom-center",
                });
                setCourses(response.data);
            },
            (error)=>{
                // for error
                console.log(error);
                toast.error("Something went wrong",{
                    position:"bottom-center",
                });

            }
        );
    };

    // loading course fxn

    useEffect(()=>{
        getAllCoursesFromServer();

    },[]);

    const [courses,setCourses]=useState([ ]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c) => c.id != id));
    };

    return(
        <div>
       <h1>All Courses.</h1>
       <p>List of all Courses are  follows as..</p>
      
       {
           courses.length > 0
           ? courses.map((item) =>( 
           <Course key={item.id} course={item} update = {updateCourses}/>
           ))
           : "Not Available"
       }
       </div>
    );
};

export default Allcourse;
