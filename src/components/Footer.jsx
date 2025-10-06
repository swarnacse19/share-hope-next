import Link from "next/link";
import { FaTwitter, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-[#05d7d0] text-[14px] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:flex-row justify-between">
        
        <div>
          <div className='flex items-center gap-2 mb-4'>
          <h2 className="text-2xl font-bold">ShareHope</h2>
          </div>
          <div className='flex gap-2 items-center text-gray-600 mb-4'>
            <FaPhoneAlt/>
            <p>Cell/WhatsApp: +880 18243-11959</p>
          </div>
          <div className='flex gap-2 items-center text-gray-600'>
            <MdEmail />
            <p>Email: sharehope@gmail.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Important Links</h3>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-white"><IoLogoFacebook size={24} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-black text-sm">
        © 2025 ShareHope. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;