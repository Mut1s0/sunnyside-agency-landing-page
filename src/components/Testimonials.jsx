import { testimonials } from "../constants";

function Testimonials() {
    
    return(

        <section>

            <div className="py-[120px]">

                <h1 className="text-center uppercase text-[20px] font-fraunces font-blackFraunces text-grayishBlue tracking-[5px] sm:tracking-[10px]">client testimonials</h1>

                <div className="flex flex-wrap items-center justify-center md:gap-[40px] mt-[30px]">

                    {testimonials.map((test) => (

                        <div key={test.id} className="flex flex-col items-center justify-center gap-[40px] text-center py-[50px] w-[360px] px-3">

                            <img src={test.icon} alt="Testimony profile" className="rounded-full w-[80px]" />

                            <p className="font-barlow font-semiBoldBarlow text-veryDarkGrayishBlue text-[18px]">{test.testimony}</p>

                            <div className="">

                                <span className="font-fraunces font-blackFraunces text-[21px]">{test.name}</span>
                                <p className="font-barlow font-semiBoldBarlow text-grayishBlue">{test.position}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Testimonials;