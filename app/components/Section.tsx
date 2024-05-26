import Image from "next/image"
import rocketImg from "@/public/sec-2-rocket.jpg"
import astronautImg from "@/public/astronaut.jpg"

const Section = () => {
    return (
        <div className="h-[62rem] md:h-fit md:grid grid-cols-2 py-[5rem] px-[1rem] md:py-[5rem] md:px-[3rem] lg:pt-[10rem] lg:pb-[5rem] lg:px-[5rem] gap-[40px]">
            <div>
                <div className="relative mb-[4rem] md:mb-[90px]">
                    <h1 className="absolute text-[12rem] md:text-[15rem] opacity-[0.2] top-[-6rem] md:bottom-[-5rem]">01</h1>
                    <p>ABOUT STARGAZE</p>
                    <h1 className="text-[1.6rem] md:text-[3rem] md:leading-[3.5rem]">Space exploration for a better tomorrow</h1>
                </div>
                <div className="flex justify-end">
                    <Image className="w-[240px] md:w-[350px]" src={rocketImg} alt="rocket-img" />
                </div>
            </div>

            <div className="relative bottom-[10rem] md:static">
                <div className="flex justify-start md:justify-end">
                    <Image className="w-[250px] md:w-[500px]" src={astronautImg} alt="rocket-img" />
                </div>
                <div className="flex justify-end mt-[3rem]">
                    <p className="opacity-[0.7] w-[475px] leading-[2rem]">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    )
}

export default Section