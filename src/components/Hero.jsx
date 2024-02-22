import { iconArrowDown } from "../images";

function Hero() {

    return(

        <main className="min-h-dvh flex flex-col items-center justify-start pt-[120px] relative">

            <div>

                <div className="text-center">

                    <h1 className="text-white uppercase font-fraunces font-blackFraunces text-[35px] sm:text-[45px] tracking-[5px] sm:tracking-[10px]">we are <br className="block sm:hidden"/> creatives</h1>

                </div>

                <div className="flex items-center justify-center absolute bottom-[34%] sm:bottom-[43%] md:bottom-[46%] right-[43%] sm:right-[44%] md:right-[49%]">

                    <img src={iconArrowDown} alt="Arrow Down" className="w-[50px] sm:w-[90px] md:w-[50px]" />

                </div>

            </div>

        </main>
    )
}

export default Hero;