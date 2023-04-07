import React, { useEffect } from 'react';
import { Container, Button} from 'reactstrap';


const Home = () => {
    useEffect(()=>{
        document.title="Home || Course Details"
    },[]);
    return(
        <div>
            <div class="p-5 bg-light text-center">
            <h1>Web Application Made By Shivendra.</h1>
                <p>This is a web application where you can fetch Course Details..</p>
                    <Container>
                <Button color="warning" outline >Learn More</Button>
                </Container>

            </div>
            
        </div>
        
    );

}
export default Home;