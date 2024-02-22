import { iconFacebook, iconInstagram, iconTwitter, iconPinterest } from "../images";

function Footer() {
    return(

        <footer className="bg-darkModerateCyan py-[70px]">

            <div>

                <h1 className="text-center text-grayishBlue font-barlow font-semiBoldBarlow text-[40px] mb-[25px]">sunnyside</h1>

                <div className="mb-[50px]">

                    <ul className="flex items-center justify-center gap-14">

                        <li><a href="#" className="font-barlow font-semiBoldBarlow text-grayishBlue text-[20px]">About</a></li>
                        <li><a href="#" className="font-barlow font-semiBoldBarlow text-grayishBlue text-[20px]">Services</a></li>
                        <li><a href="#" className="font-barlow font-semiBoldBarlow text-grayishBlue text-[20px]">Projects</a></li>

                    </ul>

                </div>

                <div>

                    <ul className="flex items-center justify-center gap-8">

                        <li>

                            <a href="#"><img src={iconFacebook} alt="Facebook" className="" /></a>

                        </li>

                        <li>

                            <a href="#"><img src={iconInstagram} alt="Instagram" /></a>

                        </li>

                        <li>

                            <a href="#"><img src={iconTwitter} alt="Twitter" /></a>

                        </li>

                        <li>

                            <a href="#"><img src={iconPinterest} alt="Pinterest" /></a>

                        </li>

                    </ul>

                </div>

            </div>

        </footer>
    )
}

export default Footer;