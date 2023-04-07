import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container
    , CardFooter,
} from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';





const Course = ({ course, update }) => {

const history = useNavigate();

const routeChange= ()=>{
    const path = `/add-course`;
    history.push(path);
} 

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("course deleted");
                update(id);

            },
            (error)=>{
                toast.error("course not deleted !! Server problem");
            }
        );
    };
    return (

        <Card className="text-center">

            <CardBody>
                <CardSubtitle className="font-weight-bold" >{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className='text-center'>
                    <Button color='danger' onClick={()=>{
                        deleteCourse(course.id);

                    }}> Delete </Button>
                    <Button color='warning m1-3' onClick={routeChange}> Update </Button>
                    {/* <Link to="../add" className="text-decoration-none" state={{data:course}}>
                    <Button color="primary" style={{width:55,height:35,fontSize:"4",paddingTop:4}} >Edit</Button>
                    </Link> */}
                </Container>
            </CardBody>
        </Card>
    );

}

export default Course;