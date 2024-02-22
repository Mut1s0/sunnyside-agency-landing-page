import { desktopGalleryMilkbottles, mobileGalleryMilkbottles, desktopGalleryOrange, mobileGalleryOrange, desktopGalleryCone, mobileGalleryCone, desktopGallerySugarcubes, mobileGallerySugarcubes } from "../images";
function Gallery() {

    return(

        <section>

            <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-4">

                <picture>
                    <source media="(min-width: 768px)" srcSet={desktopGalleryMilkbottles} />
                    <img src={mobileGalleryMilkbottles} alt="Milk Bottles" className="w-full" />
                </picture>

                <picture>
                    <source media="(min-width: 768px)" srcSet={desktopGalleryOrange} />
                    <img src={mobileGalleryOrange} alt="Orange" className="w-full" />
                </picture>

                <picture>
                    <source media="(min-width: 768px)" srcSet={desktopGalleryCone} />
                    <img src={mobileGalleryCone} alt="Cone" className="w-full" />
                </picture>

                <picture>
                    <source media="(min-width: 768px)" srcSet={desktopGallerySugarcubes} />
                    <img src={mobileGallerySugarcubes} alt="Sugar Cubes" className="w-full" />
                </picture>

            </div>

        </section>
    )
}

export default Gallery;