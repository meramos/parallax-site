import React, { Component } from 'react';
import './index.css'
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';

export default class Content extends Component{

    render(){
        return (
            <div className="App">

                <div className="parallax" style={styles.img1}>
                    <div className="text">
                        HEALTH
                    </div>
                </div>

                <div className="info">
                A New Year's resolution is a tradition, most common in the Western Hemisphere but also found in the Eastern Hemisphere, 
                in which a person resolves to continue good practices, change an undesired trait or behavior, to accomplish a personal 
                goal, or otherwise improve their life.
                </div>

                <div className="parallax" style={styles.img2}>
                    <div className="text">
                        WEIGHT LOSS
                    </div>
                </div>

                <div className="info">
                In a 2014 report, 35% of participants who failed their New Year's Resolutions admitted they had unrealistic goals, 33% 
                of participants didn't keep track of their progress, and 23% forgot about them; about one in 10 respondents claimed 
                they made too many resolutions.
                </div>

                <div className="parallax" style={styles.img3}>
                    <div className="text">
                        RECYCLING
                    </div>
                </div>

                <div className="info">
                A 2007 study by Richard Wiseman from the University of Bristol involving 3,000 people showed that 88% of those who set 
                New Year revolutions fail, despite the fact that 52% of the study's participants were confident of success at the 
                beginning. Men achieved their goal 22% more often when they engaged in goal setting, wherein resolutions are made in 
                terms of small and measurable goals (e.g., "lost a pound a week" rather than "lose weight").
                </div>

                <div className="parallax" style={styles.img4}>
                    <div className="text">
                        HIKING
                    </div>
                </div>

                <div className="info">
                    Some popular resolutions are: Weight loss, eating healthy, getting a new job, and reading more books.
                    {/* <FormGroup>
                        <FormControlLabel control={<Checkbox value="checkedA" />} label="Weight Loss" />
                        <FormControlLabel control={<Checkbox value="checkedB" />} label="Healthy eating" />
                        <FormControlLabel control={<Checkbox value="checkedC" />} label="New job" />
                        <FormControlLabel control={<Checkbox value="checkedD" />} label="Read more books" />
                    </FormGroup> */}
                    {/* <ul>
                        <li>Weight Loss</li>
                        <li>Healthy eating</li>
                        <li>New job</li>
                        <li>Read more books</li>
                    </ul> */}
                </div>

            </div>
        )
    }
}

const styles = {
    img1: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80)',
    },
    img2: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)'
    },
    img3: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1474&q=80)'
    },
    img4: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1440186347098-386b7459ad6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)'
    },
};