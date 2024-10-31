import React from 'react'
import Image from "next/image";
import "../styles/hero.css"

function Hero() {
  return (
    <main id='main' className='space-x-32 '>
        <section   id='section'>
            <div className='space-x-3 ' id='div1'>
                <div id='div2' >
                    <h2  id='head6'>06</h2>
                    <h2  id='month'>Month</h2>
                </div>
                <div id='div2' >
                    <h2 id='head6'>25</h2>
                    <h2 id='month'>Days</h2>
                </div>
                <div id='div2' >
                    <h2 id='head6'>12</h2>
                    <h2 id='month'>Hours</h2>
                </div>
                <h1  id='remaining'>Remaining</h1>
            </div>
            <h1  id='equity'>Equity Raising for Luxury</h1>
            <h1  id='house'>House in san Diego</h1>
            <p  id='p'>
            Be an Investor and live your dream life , follow the links bellow to read more about the project
            </p>
            <div className='space-x-3'>
                <button className='md:px-6' id="button1">Become Investor now</button>
                <button  id="button2">Learn More About the project</button>
            </div>
        </section>
        <section className='md:block' id='#section2'>
            <Image src={'/home.png'} alt={'home'} width={280} height={200} className='rounded-lg'/>
        </section>
    </main>
  )
}

export default Hero