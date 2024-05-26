import { IoIosArrowRoundForward } from "react-icons/io";

const Section6 = () => {
    return (
        <div className="px-[1rem] py-[3rem] xl:px-[5.5rem]">
            <div className="text-center">
                <p className="tracking-[0.2rem]">INTERESTING UPDATES</p>
                <h1 className="text-[2rem] md:text-[2.5rem] xl:text-[3rem]">Latest news from Stargaze</h1>
            </div>
            <div className="py-[2.5rem] md:grid grid-cols-3 gap-2 xl:gap-[3rem]">
                <div className="bg-[#101010] px-[1rem] py-[2.5rem] xl:py-[4rem] xl:px-[3rem]">
                    <p className="mb-3 text-sm">NEWS . <span className="opacity-[0.5]">Aug 12, 2023</span></p>
                    <h1 className="mb-4 xl:text-[1.5rem] xl:leading-[2rem]">Astronomy for all: educational insights</h1>
                    <p className="opacity-[0.4] text-sm xl:leading-[2rem]">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt.…</p>
                    <IoIosArrowRoundForward className="text-3xl mt-3" />
                </div>
                <div className="bg-[#101010] my-3 md:my-0 px-[1rem] py-[2.5rem] xl:py-[4rem] xl:px-[3rem]">
                    <p className="mb-3 text-sm">NEWS . <span className="opacity-[0.5]">Aug 12, 2023</span></p>
                    <h1 className="mb-4 xl:text-[1.5rem] xl:leading-[2rem]">Cosmic challenges help us prepare</h1>
                    <p className="opacity-[0.4] text-sm xl:leading-[2rem]">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt.…</p>
                    <IoIosArrowRoundForward className="text-3xl mt-3" />
                </div>
                <div className="bg-[#101010] px-[1rem] py-[2.5rem] xl:py-[4rem] xl:px-[3rem]">
                    <p className="mb-3 text-sm">NEWS . <span className="opacity-[0.5]">Aug 12, 2023</span></p>
                    <h1 className="mb-4 xl:text-[1.5rem] xl:leading-[2rem]">Zero gravity thrills: a life of an astronaut</h1>
                    <p className="opacity-[0.4] text-sm xl:leading-[2rem]">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt.…</p>
                    <IoIosArrowRoundForward className="text-3xl mt-3" />
                </div>
            </div>
            <div className="text-center mt-3">
                <button className="border-2 rounded-full px-[1.5rem] py-[0.7rem] md:py-[1rem] md:px-[3rem] hover:bg-white hover:text-black">View All Articles</button>
            </div>
        </div>
    )
}

export default Section6