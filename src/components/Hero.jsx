import { iconArrowDown } from "../images";

function Hero() {

    return(

        <main className="h-full">

            <div className="h-full">

                <div className="text-center">

                    <h1 className="text-white uppercase font-fraunces font-blackFraunces">we are <br className="block sm:hidden"/> creatives</h1>

                </div>

                <div className="flex items-center justify-center">

                    <img src={iconArrowDown} alt="Arrow Down" className="" />

                </div>

            </div>

        </main>
    )
}

export default Hero;