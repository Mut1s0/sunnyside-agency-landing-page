import { desktopGraphicDesign, mobileGraphicDesign, desktopPhotography, mobilePhotography } from "../images";

function Services() {
    return(
        <section>
            <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2">
                <article className="relative">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={desktopGraphicDesign} />
                        <img src={mobileGraphicDesign} alt="Graphic Design" className="w-full" />
                    </picture>
                    <div className="absolute bottom-[25%] left-[25%] text-center w-[50%]">
                        <h1 className="font-fraunces font-blackFraunces text-darkDesaturatedCyan text-[35px]">Graphic Design</h1>
                        <p className="font-barlow font-semiBoldBarlow text-darkDesaturatedCyan text-[15px]">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client attention.</p>
                    </div>
                </article>
                <article className="relative">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={desktopPhotography} />
                        <img src={mobilePhotography} alt="Graphic Design" className="w-full" />
                    </picture>
                    <div className="absolute bottom-[25%] left-[25%] text-center w-[50%]">
                        <h1 className="font-fraunces font-blackFraunces text-darkBlue text-[35px]">Photography</h1>
                        <p className="font-barlow font-semiBoldBarlow text-darkBlue text-[15px]">Increase your credibility by getting the most stunning high-quality photos that improve your business.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Services;