import Img1 from "@/public/sec-5img1.jpg"
import Img2 from "@/public/sec-5img2.jpg"
import Image from "next/image"
import compLogo1 from "@/public/comp-img1.png"
import compLogo2 from "@/public/comp-img2.png"
import compLogo3 from "@/public/comp-img3.png"
import compLogo4 from "@/public/comp-img4.png"
import compLogo5 from "@/public/comp-img5.png"
import compLogo6 from "@/public/comp-img6.png"

const Section5 = () => {
    return (
        <div>
            <div className="md:grid grid-cols-2 gap-0 md:gap-9 md:mt-[5rem] py-[3rem] px-[1rem] xl:px-[5rem]">
                <div className="grid grid-cols-2 gap-[1.5rem] mb-[3rem]">
                    <div className="md:relative bottom-[5rem]">
                        <Image src={Img2} alt="man-img" className="w-[250px]" height={100} />
                    </div>
                    <div>
                        <Image src={Img1} alt="space-img" className="w-[250px]" height={100} />
                    </div>
                </div>
                <div className="relative">
                    <h1 className="absolute text-end w-[100%] xl:w-[85%] md:top-[-6rem] xl:top-[-7rem] text-[12rem] xl:text-[17rem] opacity-[0.1] top-[-6rem]">03</h1>
                    <p className="text-xs text-[1rem] xl:leading-[4.5rem] tracking-[0.1rem] md:tracking-[0.2rem]">KEY ACHIEVEMENTS</p>
                    <h1 className="text-[1.5rem] md:text-[2rem] leading-[2rem] md:leading-[2.8rem] xl:text-[3.5rem] xl:leading-[3.5rem] xl:mb-4">Our milestones in space exploration</h1>
                    <p className="text-sm md:text-lg opacity-[0.6] xl:leading-[2rem] mb-5 xl:mb-7 xl:text-[1.2rem]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    <button className="border-2 rounded-full px-[1.5rem] py-[0.7rem] md:py-[1rem] md:px-[3rem] hover:bg-white hover:text-black">View All Projects</button>
                </div>
            </div>
            <div className="flex justify-evenly items-center px-[1rem] pb-[2rem] xl:px-[5rem] xl:pb-[5rem] flex-wrap">
                <Image src={compLogo1} alt="space-img" className="w-[150px] opacity-[0.2] hover:opacity-[1] cursor-pointer" height={100} />
                <Image src={compLogo2} alt="space-img" className="w-[150px] opacity-[0.2] hover:opacity-[1] cursor-pointer" height={100} />
                <Image src={compLogo3} alt="space-img" className="w-[150px] opacity-[0.2] hover:opacity-[1] cursor-pointer" height={100} />
                <Image src={compLogo4} alt="space-img" className="w-[150px] opacity-[0.2] hover:opacity-[1] cursor-pointer" height={100} />
                <Image src={compLogo5} alt="space-img" className="w-[150px] opacity-[0.2] hover:opacity-[1] cursor-pointer" height={100} />
                <Image src={compLogo6} alt="space-img" className="w-[150px] opacity-[0.2] hover:opacity-[1] cursor-pointer" height={100} />
            </div>
        </div>
    )
}

export default Section5