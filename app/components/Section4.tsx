import { IoIosSend } from "react-icons/io";

const Section4 = () => {
    return (
        <div className="xl:grid grid-cols-2 p-4 xl:py-[4rem] xl:px-[5rem]">
            <div>
                <h1 className="xl:text-[3rem] md:leading-[3.5rem] text-2xl leading-[2rem] mb-2">Stay updated with cosmics discoveries!</h1>
            </div>
            <div className="flex items-center md:justify-center xl:justify-normal">
                <form className="max-w-sm w-full">
                    <div className="mb-2">
                        <input autoComplete="off" type="email" id="email" className="text-xs md:text-sm block w-full p-2.5 bg-black border-b-[1px] focus:outline-none" placeholder="Enter your email address" required />
                    </div>
                    <div className="flex items-start xl:mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-black" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-xs md:text-sm font-medium opacity-[0.7]">I agree to the <a className="underline" href="#">Privacy Policy</a></label>
                    </div>
                </form>
                <div className="text-xs lg:text-lg ms-[1rem] xl:ms-[5rem] flex items-center">
                    <IoIosSend className="me-2"/>
                    <a href="#">Subscribe</a>
                </div>
            </div>
        </div>
    )
}

export default Section4