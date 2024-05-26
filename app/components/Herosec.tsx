import Image from "next/image";
import manImg from "@/public/space-man.png";

const Herosec = () => {
  return (
    <div className="h-[70vh] flex items-end px-[1rem] lg:px-[4rem]">
      <div>
        <p className="leading-[1rem] tracking-[5px] m-0">COSMIC CHRONICLES</p>
        <div className="leading-[3.5rem] md:leading-[6rem] lg:leading-[7rem]">
          <h1 className="text-[3rem] md:text-[5rem] lg:text-[6.5rem]">
            OUR{" "}
            <div className="inline-block relative top-[1rem] md:top-[30px]">
              <Image
                src={manImg}
                alt="logo-img"
                className="w-[60px] md:w-[90px] lg:w-[100px]" // Set width for small and medium devices
                height={100} // Adjust height as needed, or you can use inline styles to control height
              />
            </div>{" "}
            FORAY
          </h1>
          <h1 className="text-[3rem] md:text-[5rem] lg:text-[6.5rem]">
            INTO SPACE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Herosec;
