import React from "react";
import './_ImageText.scss';
import ImgText1 from '../../assests/ImgText1.jpg';
import ImgText2 from '../../assests/ImgText2.jpeg';

const ImageText = (slide) => {
    return (
        <section className={["image-text"]}>
            <div className={["image-text-top"]}>
                <img src={ImgText2} alt="pool" className={["image-text-top-img1"]} />
                {/* <h1>LOCATED IN QUITE PLACE NEAR ZADAR</h1> */}
                <p className={["image-text-top-p1"]}>Apartment resort Oliva Vallis is located in a very
                    quite suburb overlooking the sea, mountain and the olive grove.
                    It is also just a step away of a beautiful, historic town of Zadar and its monuments.
                    The house lies in the very center of the Zadar County, surrounded by historical towns,
                    magnificent national parks and a delightful parks.
                </p>
            </div>
            <div className={["image-text-bottom"]}>
                <p className={["image-text-bottom-p2"]}>The house is new bulit, peaceful, comfortable
                    and fully equipped with pool, garden, roof terrace and private parking.

                </p>
                <img src={ImgText1} alt="pool" className={["image-text-bottom-img2"]} />


            </div>
        </section>
    )
}

export default ImageText;