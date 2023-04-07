import React from "react";
import { Card, CardBody ,Container} from "reactstrap";

function Header(){

    return(
    <div>
    <Container>
    <Card className="my-1 bg-info">
        <CardBody>
        <h1 className="text-center my-2">Welcome to Courses Application</h1>
        </CardBody>
    </Card>
    </Container>
    </div>

    );
}

export default Header;