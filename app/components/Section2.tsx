import Image from "next/image"
import Img1 from "@/public/new-space-inverse-1.png"
import Img2 from "@/public/new-space-inverse-2.png"
import Img3 from "@/public/new-space-inverse-3.png"
import { GoArrowRight } from "react-icons/go";

const Section2 = () => {
    return (
        <div className="md:flex items-center justify-evenly px-[1rem] lg:px-[5rem] lg:py-[2rem]">
            <div className="text-center flex flex-col items-center justify-center cursor-pointer">
                <div>
                    <Image src={Img1} className="w-[200px]" alt="logo-img" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="opacity-[0.6] text-lg">Our mission</p>
                    <h1 className="xl:leading-[3.5rem] text-2xl md:text-lg lg:text-2xl">Satellite maintenance</h1>
                    <p className="opacity-[0.6] md:text-xs lg:text-sm text-sm">Nemo enim ipsam voluptatem quia voluptas sit aspernaturant odit aut fugit, sed quia.</p>
                    <GoArrowRight className="bg-[#151515] hover:bg-[#797979] cursor-pointer rounded-full p-2 text-[3rem] mt-6" />
                </div>
            </div>
            <div className="text-center flex flex-col items-center justify-center cursor-pointer">
                <div>
                    <Image src={Img2} className="w-[200px]" alt="logo-img" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="opacity-[0.6] text-lg">Our mission</p>
                    <h1 className="xl:leading-[3.5rem] text-2xl md:text-lg lg:text-2xl">Exploration missions</h1>
                    <p className="opacity-[0.6] md:text-xs lg:text-sm text-sm">Nemo enim ipsam voluptatem quia voluptas sit aspernaturant odit aut fugit, sed quia.</p>
                    <GoArrowRight className="bg-[#151515] hover:bg-[#797979] cursor-pointer rounded-full p-2 text-[3rem] mt-6" />
                </div>
            </div>
            <div className="text-center flex flex-col items-center justify-center cursor-pointer">
                <div>
                    <Image src={Img3} className="w-[200px]" alt="logo-img" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="opacity-[0.6] text-lg">Our mission</p>
                    <h1 className="xl:leading-[3.5rem] text-2xl md:text-lg lg:text-2xl">Research and observation</h1>
                    <p className="opacity-[0.6] md:text-xs lg:text-sm text-sm">Nemo enim ipsam voluptatem quia voluptas sit aspernaturant odit aut fugit, sed quia.</p>
                    <GoArrowRight className="bg-[#151515] hover:bg-[#797979] cursor-pointer rounded-full p-2 text-[3rem] mt-6" />
                </div>
            </div>
        </div>
    )
}

export default Section2