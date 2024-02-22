import { desktopTransform, mobileTransform, desktopStandOut, mobileStandOut } from "../images";

function Features() {

    return(

        <section className="grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2">

            <div className="">

                <picture>

                    <source media="(min-width: 768px)" srcSet={desktopTransform} />
                    <img src={mobileTransform} alt="Transform" className="w-full h-full object-cover" />

                </picture>

            </div>

            <div className="sm:col-start-1 sm:row-start-1 py-[50px]">

                <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left gap-6 lg:gap-9 h-full xs:px-[35px] sm:px-[50px] lg:px-[150px]">

                    <h1 className="font-fraunces font-blackFraunces text-[25px] xs:text-[30px] sm:text-[25px] lg:text-[40px] lg:leading-[50px]">Transform your <br /> brand</h1>

                    <p className="sm:text-[14px] lg:text-[17px] font-barlow font-semiBoldBarlow text-grayishBlue">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients trough compelling visuals that do most of the marketing for you.</p>

                    <span className="border-b-4 border-yellow"><a href="#" className="font-fraunces font-blackFraunces sm:text-[18px] lg:text-[20px] uppercase">Learn more</a></span>

                </div>

            </div>

            <div className="">

                <picture>

                    <source media="(min-width: 768px)" srcSet={desktopStandOut} />
                    <img src={mobileStandOut} alt="Stand Out" className="w-full h-full object-cover" />

                </picture>

            </div>

            <div className="py-[50px]">

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left justify-center gap-6 lg:gap-9 h-full xs:px-[35px] sm:px-[50px] lg:px-[150px]">

                    <h1 className="font-fraunces font-blackFraunces text-[25px] xs:text-[30px] sm:text-[25px] lg:text-[40px] lg:leading-[50px]">Stand out to the <br className="block sm:hidden"/> right <br className="hidden sm:block" /> audience</h1>

                    <p className="sm:text-[14px] lg:text-[17px] font-barlow font-semiBoldBarlow text-grayishBlue">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we will build and extend your brand in digital places.</p>

                    <span className="border-b-4 border-softRed"><a href="#" className="font-fraunces font-blackFraunces sm:text-[18px] lg:text-[20px] uppercase">learn more</a></span>

                </div>

            </div>

        </section>
    )
}

export default Features;