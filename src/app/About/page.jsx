import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss';
import profile from '@/app/Profile/profile.jpg'
import Background from '@/app/background/image.jpg'


function page() {
  return (
    
    <div  class="flex flex-row ...">
        {/* <Image src={Background} width={1000} height={700} className='object-cover'></Image>
     */}

      <Head>
        <title> Pathum</title>
        <meta name="description" content="About page for your portfolio" />
      </Head>
      <div class="m-8 mt-36">
    
      <h1 style={{ fontFamily: 'Open Sans' }}>About Me</h1>
      <p style={{ fontFamily: 'Open Sans' }}>Welcome to my portfolio!<br/> I'm Pathum, a software developer with a passion for develop the software product. </p>
      <button class="rounded-full ..." >read more....</button>
      </div>
      <div class="self-end ... m-8 ml-24"  >
      <Image src={Background} width={600} height={600} alt='profile'  ></Image>

      </div>
      
      

    </div>
  )
}

export default page