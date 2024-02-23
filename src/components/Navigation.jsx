import { useState } from "react";
import { logo, iconMenu, iconClose } from "../images";

function Navigation() {

    const [ toggle, setToggle ] = useState(false);

    return(

        <section>

            <div className="px-5 py-5 xs:p-10 flex items-center justify-between">

                <div>

                    <img src={logo} alt="Logo" className="w-[150px] sm:w-[180px] cursor-pointer" />

                </div>

                <nav>

                    <ul className="hidden sm:flex items-center justify-end gap-10">

                        <li className="font-barlow font-semiBoldBarlow text-white"><a href="#">About</a></li>
                        <li className="font-barlow font-semiBoldBarlow text-white"><a href="#">Services</a></li>
                        <li className="font-barlow font-semiBoldBarlow text-white"><a href="#">Projects</a></li>
                        <li className="bg-white rounded-full px-5 py-4 font-fraunces uppercase font-blackFraunces"><a href="#">Contact</a></li>

                    </ul>

                    <div className="sm:hidden block">

                        <img 
                            src={ toggle ? iconClose : iconMenu } alt="" 
                            className="cursor-pointer w-[40px] h-[40px]"
                            onClick={() => setToggle((prev) => !prev)} 
                        />

                        <div className={`${toggle ? 'block' : 'hidden'} absolute top-[100px] xs:top-[130px] right-4 xs:right-[100px] min-w-[250px] text-center py-8 bg-white transition-all duration-500`}>

                            <ul className="flex flex-col gap-8">

                                <li className="font-barlow font-semiBoldBarlow text-grayishBlue"><a href="#" className="">About</a></li>
                                <li className="font-barlow font-semiBoldBarlow text-grayishBlue"><a href="#">Services</a></li>
                                <li className="font-barlow font-semiBoldBarlow text-grayishBlue"><a href="#">Projects</a></li>
                                <li className="bg-yellow w-[75%] mx-auto rounded-full px-5 py-4 font-fraunces uppercase font-blackFraunces"><a href="#">Contact</a></li>

                            </ul>

                        </div>
                        
                    </div>

                </nav>

            </div>

        </section>
    );
}

export default Navigation;