//Pages
import Darkmode from '../components/Darkmode';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Email from '../components/Email';
import Accordion from '../components/Accordion';
import Navbar from '../components/Navbar';
import Checkbox from '../components/Checkbox';
import Rating from '../components/Rating';
import Socials from '../components/Socials';

export function Home() {
    return (
        <>
        
            <Navbar/> 
            <br/>
            <Hero/>
            <Darkmode/><br/>
            <hr/><Carousel/><hr/>
            <Accordion/><hr/>
            <Checkbox/><hr/>
            <Rating/>
            {/* <Socials/> */}
        </>
    );
}