
import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="flex justify-between container mx-auto py-5">
            <img src={Logo} alt="" />
                <ul className="flex gap-10 items-center">
                    <li className="text-pink-600">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            <div className="flex gap-4">
                <button className="btn btn-ghost rounded-full px-4 py-2 border-black-500">Sign In</button>
                <button className="btn btn-secondary rounded-full px-4 py-2">Sign Up</button>
            </div>
        </div>
        <div className="w-full h-0.5 bg-taupe-100"></div>
        </div>
    );
};

export default Nav;