import Ban from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <div className="flex justify-between container mx-auto items-center">
            <div className="g">
                <div>
                <h1 className="-mb-5 text-[50px] font-bold">Build Your Ideal</h1>
                <h1 className="mb-5 text-[50px] font-bold bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development  Stack</h1>
                <p className=" leading-relaxed mb-12.5">Explore frontend, backend, database, and tooling options,<br />
compare them side by side, and put together the stack that fits your<br />
next project.</p></div>
<div className="flex gap-3">
    <button className="btn btn-wide px-6 py-3 rounded-lg text-white font-semibold
               bg-linear-to-r from-orange-500 to-pink-500
               hover:opacity-90 transition">Explore Technologies</button>
    <button className="btn btn-wide rounded-lg">Learn More</button>
</div>
            </div>
            <div>
                <img src={Ban} alt="" />
            </div>
        </div>
    );
};

export default Banner;