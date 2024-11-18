import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Propstest from "../components/Propstest";
export function Page2() {
    return (
        <>  
            <Navbar/><br/>
            <Hero/><hr/>
            <Propstest name = {'Yaseen'}/>
            <h4 class = "center_header">This is Page 2 </h4>
            
        </>
    );
}