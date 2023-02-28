import Hero from "../UI/Hero";
import Baking from "../UI/Baking";
import Start from "../UI/Start";
import Pricing from "../UI/Pricing"
import Contact from "../UI/Contact"

function Home (){
    return(
        <div>
            <Hero />
            <Baking />
            <Start />
            <Pricing />
            <Contact />
        </div>
    )
}

export default Home