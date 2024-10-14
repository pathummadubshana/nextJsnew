import React from 'react'
import Image from 'next/image'
import CSS from '@/app/Image/css-3.png'
import Html from '@/app/Image/html-5.png'
import Script from '@/app/Image/java-script.png'
import Java from '@/app/Image/java.png'
import Php from '@/app/Image/php.png'
import Python from '@/app/Image/python.png'
import Git from '@/app/Image/social.png'
import Mysql from '@/app/Image/mysql.png'



function page() {
  return (
    <div class="grid grid-cols-4 gap-4 py-4 bg-gray-100 ">
      <div>
      <h1 className='text-black'>Skill</h1>
      </div>
      
      <Image src={CSS} width={200} height={200}></Image>
      <Image src={Html} width={200} height={200}></Image>
      <Image src={Script} width={200} height={200}></Image>
      <Image src={Java} width={200} height={200}></Image>
      <Image src={Php} width={200} height={200}></Image>
      <Image src={Python} width={200} height={200}></Image>
      <Image src={Git} width={200} height={200}></Image>
      <Image src={Mysql} width={200} height={200}></Image>
      
    </div>

  )
}

export default page