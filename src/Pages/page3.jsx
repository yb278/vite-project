import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Suspense } from "react";
import Fallback from "../components/Fallback";
import Checkbox from "../components/Checkbox";
export function Page3() {
    return (
        <>
            <Navbar/><br/>
            <Hero/><hr/>
            <h4 class = "center_header">This is Page 3 </h4>
            <Suspense fallback ={<Fallback />}>
                <Checkbox/>
            </Suspense>
         
        </>
    );
}