import React from 'react'
import { FaFacebook , FaTwitter,FaYoutube } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
const Footer = () => {
  return (
    <>
    <div className='grid grid-cols-4 p-20 border'>
     <div>
        <h2 className=''><b>ONLINE SHOPPING</b></h2>
        <div className='mt-4'>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Beauty</li>
                <li>Gift card</li>
                <li>Myntra insider</li>
            </ul>
        </div>
        <h2 className='mt-4'><b>USEFUL LINKS</b></h2>
        <div className='mt-4'>
            <ul>
                <li>Blog</li>
                <li>Careers</li>
                <li>Site map</li>
                <li>Corporate information</li>
                <li>Whitehat</li>
                <li>Cleartrip</li>
            </ul>
        </div>
     </div>


     <div>
     <h2 className=''><b>CUSTOMER POLICIES</b></h2>
     <div className='mt-4 '>
            <ul>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>T&C</li>
                <li>Terms Of Use</li>
                <li>Track Orders</li>
                <li>Shipping</li>
                <li>Cancellation</li>
                <li>Returns</li>
                <li>Privacy Policy</li>
                <li>Grievance Offers</li>
            </ul>
        </div>
     </div>


     <div >
     <h2 className=''><b>EXPERIENCE MYNTRA APP ON MOBILE</b></h2>
     <div className='flex'>
        <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' alt='img' className='w-[170px]'/>
        <img src='https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg' alt='img' className='w-[160px] h-[50px] mt-2'/>
     </div>
     <h4 className='mt-4 '>KEEP IN TUCH</h4>
     <div className='mt-4 flex gap-3 text-2xl'>
        <a href='#'><FaFacebook /></a>
        <a href='#'><FaTwitter /></a>
        <a href='#'><FaYoutube /></a>
        <a href='#'><ImInstagram /></a>
     </div>
     </div>




     <div className='ml-16'>
        <div className='flex'>
        <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt='' className='h-[80px]'/>
        <h1><b>100% ORIGINAL </b> guarantee for all products at myntra.com</h1>
        </div>
        <div className='flex mt-4' >
        <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" className='h-[80px]'/>
        <h1><b>Return within 14days </b> of receiving your order</h1>
        
        </div>
     </div>
     <hr/>
    
    </div>
    <footer className='text-center mb-5 mt-5'>
      <div>Made By : <b><i>Imran Ansari</i></b></div>
     </footer>
    </>
  )
}

export default Footer