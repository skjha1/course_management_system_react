import React, { Component } from 'react';


export default class AboutComponent extends Component {
    render() {
        return (
            <div className="contentcontainer">
                <h1>About Page</h1>
                <div>
                    <p>
                        Hello there!<br/>
                        Here’s an easy way for you to keep track of all the course details.
                    </p>
                    <div>
                        <strong>Course application allows you to easily track:</strong>
                        <ul>
                            <li>Course Id</li>
                            <li>Course Name</li>
                            <li>Course Description</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}
