import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Image from 'next/image';
import "../styles/footer.css"


function Footer() {
  return (
    <main className=' bg-[#161B1F] pt-10 overflow-clip'>
        <section className='md:flex justify-around items-center md:space-x-36 space-y-4 md:space-y-0  mx-12 md:mx-0'>
            <div className='space-y-6 '>
                <h1 id='contact'>Contact</h1>
                <h2  id='h2'><FiPhoneCall color='white' size={16}/> 619-393-4981 ext. 101</h2>
                <h3  id="h2"><AiTwotoneMail size={20} color='white'/>Invest@AtlasLPS.com</h3>
                <h4  id='h3'><MdOutlineLocationOn size={30} color='white'/>501 West Broadway,
                    Suite 800, San Diego, CA
                    92101
                </h4>
            </div>
            <div className='space-y-2'>
                <h1 className='text-xl font-bold mb-5 text-white' id='links'>Links</h1>
                <h2  id='h4'>FAQs</h2>
                <h3  id='h4'>Disclosures</h3>
                <h4  id='h4'>Terms and Conditions</h4>
                <h5  id='h4'>Privacy Policy</h5>
                <h6  id='h4'>Submit Deals</h6>
                <h6  id='h4'>Media Kit</h6>
            </div>
            <div className='max-w-md space-y-7'>
                <h1  id='h5'>Investment disclosure</h1>
                <p className='font-extralight text-md text-gray-400'>When you invest with Atlas, you are more than a number; you are a partner. As a partner with us, you can access
                opportunities usually reserved only for the largest institutional investors. You can access a team driven only by
                excellence and results. You can access real estate investment opportunities designed with you in mind.</p>
            </div>
        </section>
        <div className='flex mt-12 pb-6 justify-center items-center space-x-6'>
            <Image src={'/logo.png'} alt={'logo'} width={80} height={30} color='white'/>
            <p id='p1'>ATLAS 2022 @ All Right Reserved</p>
            
        </div>
       
    </main>
  )
}

export default Footer;