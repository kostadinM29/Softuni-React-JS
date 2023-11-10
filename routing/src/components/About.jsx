import { Link, Outlet, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import OurMission from "./OurMission";
import OurValues from "./OurValues";

const About = () =>
{
    return (
        <>
            <h2>About Page</h2>
            <nav>
                <Link to='us'>About Us</Link>
                <Link to='mission'>Our Mission</Link>
                <Link to='values'>Our Values</Link>
            </nav>

            <Outlet />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae laboriosam, aut fuga blanditiis eligendi nemo magni non impedit pariatur accusantium voluptate molestiae error quos consequuntur tempore laudantium earum. Perferendis illo beatae excepturi, voluptatum inventore illum autem ullam voluptatem magni numquam ducimus quibusdam id? Laborum vitae ullam autem consequatur cumque. Animi.</p>
        </>
    );
};

export default About;