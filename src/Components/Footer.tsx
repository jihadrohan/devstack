
import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <div className="w-full h-0.5 bg-taupe-100 mb-17"></div>
        <div className='flex justify-between mb-10'>
            <div>
                <img src={Logo} className='mb-5'/>
                <h6 className='mb-5 text-gray-600'>Curated tools, technologies, and resources for developers building <br />
modern software.</h6>
<div className='mb-5'>
    <ul className='flex gap-3 font-medium'>
        <li>GitHub</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
    </ul>
</div>
            </div>
            <div className='flex justify-between gap-50'>
                <ul>
                    <li className='font-bold'>PRODUCT</li>
                    <li className='text-gray-600'>Home</li>
                    <li className='text-gray-600'>Technologies</li>
                    <li className='text-gray-600'>Projects</li>
                </ul>
                <ul>
                    <li className='font-bold'>COMPANY</li>
                    <li className='text-gray-600'>About</li>
                    <li className='text-gray-600'>Contact</li>
                    <li className='text-gray-600'>Careers</li>

                </ul>
                <ul>
                    <li className='font-bold'>LEGAL</li>
                    <li className='text-gray-600'>Privacy Policy</li>
                    <li className='text-gray-600'>Terms of Service</li>
                </ul>
            </div>
        </div>
        <div className="w-full h-0.5 bg-taupe-100 mb-5"></div>
        <div className='flex justify-between mb-5 text-gray-400'>
            <div>© 2026 Dev Stack. All rights reserved.</div>
            <div className='flex gap-3'>
                <h6>Privacy</h6>
                <h6>Terms</h6>
            </div>
        </div>
        </div>
    );
};

export default Footer;