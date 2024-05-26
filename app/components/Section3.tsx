const Section3 = () => {
    return (
        <div className="py-[3rem]">
            <div className="relative h-[30vh] md:h-[40vh] xl:h-[85vh] bg-cover bg-center bg-no-repeat flex justify-center items-center">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/sec-3-bg.jpg')", opacity: 0.6 }} />
                <div className="relative inline-block border-2 rounded-full px-[1rem] py-[1.5rem] md:py-[2.3rem] md:px-[2rem] bg-transparent">PLAY</div>
            </div>
        </div>
    );
}

export default Section3;
