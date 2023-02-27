import Hero from "../UI/Hero";
import Baking from "../UI/Baking";
import Start from "../UI/Start";
import Pricing from "../UI/Pricing"

function Home (){
    return(
        <div>
            <Hero />
            <Baking />
            <Start />
            <Pricing />
        </div>
    )
}

export default Home