import React from 'react'
import Image from 'next/image'
import Wrapper from '../components/wrapper/Wrapper'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

export default function page() {
  return (
   <section className='overflow-hidden'>
    <Wrapper>
    <div className='flex justify-between flex-col lg:flex-row  '>
        <div className='flex-1'>
            {/* left side  */}
            <h2 className='font-semibold text-4xl mt-60 ml-14 '>Our Story</h2>
            <p className='font-sans text-sm md:text-xl mt-6 px-14 '>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          <br />
          <br />
          <p className='font-sans text-sm md:text-xl px-14'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>

        </div>
        <div className='flex-1 mt-32 ml-4 mr-4 md:ml-32    '>
            {/* right side  */}
            <Image src="/Side Image.jpg" alt="img" width={400} height={500} className='relative  md:w-10/12 lg:w-10/12'
          />

        </div>
    </div>
    <div className='flex justify-center md:gap-7 gap-3 ml-5 mr-5 md:ml-16    '>
    <div className="group shadow-2xl  border-solid border-2 mt-44 rounded-md hover:bg-red-500 bg-white sm:w-[100px] md:w-[200px] h-[200px] flex flex-col justify-center items-center cursor-pointer relative">
  {/* Circle with SVG icon */}
  <span className="bg-black rounded-full text-white p-4 flex justify-center items-center">
    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.6416 5H27.9883L28.8216 13.3333C28.8216 13.3333 30.4883 15 32.9883 15C34.3006 15.0017 35.5684 14.524 36.5533 13.6567C36.6574 13.5594 36.735 13.4372 36.7787 13.3016C36.8224 13.166 36.8309 13.0214 36.8033 12.8817L35.6266 5.83333C35.5873 5.60049 35.4668 5.38909 35.2865 5.23656C35.1062 5.08404 34.8778 5.00024 34.6416 5V5Z" stroke="white" strokeWidth="2"/>
      <path d="M27.9883 5L28.8216 13.3333C28.8216 13.3333 27.1549 15 24.6549 15C22.1549 15 20.4883 13.3333 20.4883 13.3333V5H27.9883Z" stroke="#FAFAFA" strokeWidth="2"/>
      <path d="M20.4886 5V13.3333C20.4886 13.3333 18.8219 15 16.3219 15C13.8219 15 12.1553 13.3333 12.1553 13.3333L12.9886 5H20.4886Z" stroke="#FAFAFA" strokeWidth="2"/>
      <path d="M12.9883 5H6.3366C6.09993 4.99991 5.87089 5.08377 5.69023 5.23666C5.50957 5.38955 5.38899 5.60157 5.34994 5.835L4.17494 12.8833C4.14747 13.0231 4.15601 13.1676 4.19974 13.3032C4.24348 13.4387 4.32097 13.5609 4.42494 13.6583C4.9716 14.1417 6.19327 15.0017 7.98827 15.0017C10.4883 15.0017 12.1549 13.335 12.1549 13.335L12.9883 5.00167V5Z" stroke="#FAFAFA" strokeWidth="2"/>
      <path d="M5.5 15V31.6667C5.5 32.5507 5.85119 33.3986 6.47631 34.0237C7.10143 34.6488 7.94928 35 8.83333 35H32.1667C33.0507 35 33.8986 34.6488 34.5237 34.0237C35.1488 33.3986 35.5 32.5507 35.5 31.6667V15" stroke="#FAFAFA" strokeWidth="2"/>
      <path d="M25.2217 35V25C25.2217 24.1159 24.8705 23.2681 24.2454 22.6429C23.6202 22.0178 22.7724 21.6666 21.8883 21.6666H18.555C17.671 21.6666 16.8231 22.0178 16.198 22.6429C15.5729 23.2681 15.2217 24.1159 15.2217 25V35" stroke="#FAFAFA" strokeWidth="2" strokeMiterlimit="16"/>
    </svg>
  </span>

  {/* Label for the icon */}
  <span className="text-xl font-bold mt-2">10.5k</span>

  {/* Description text */}
  <p className="sm:text-[8px] md:text-sm text-center mt-1">Seller active on our site</p>
</div>
<div className="group shadow-2xl border-solid border-2 mt-44 rounded-md hover:bg-red-500 bg-white sm:w-[100px] md:w-[200px] h-[200px] flex flex-col justify-center items-center cursor-pointer relative">
  {/* Circle with SVG icon */}
  <span className="bg-black rounded-full text-white p-4 flex justify-center items-center">
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0003 37.2728C29.5397 37.2728 37.273 29.5395 37.273 20C37.273 10.4606 29.5397 2.72729 20.0003 2.72729C10.4608 2.72729 2.72754 10.4606 2.72754 20C2.72754 29.5395 10.4608 37.2728 20.0003 37.2728Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.0914 14.547C24.762 13.9758 24.2834 13.505 23.707 13.1848C23.1305 12.8646 22.4777 12.7072 21.8186 12.7294H18.1823C17.2178 12.7294 16.2929 13.1124 15.611 13.7941C14.929 14.4759 14.5459 15.4005 14.5459 16.3647C14.5459 17.3288 14.929 18.2535 15.611 18.9353C16.2929 19.617 17.2178 20 18.1823 20H21.8186C22.783 20 23.708 20.383 24.3899 21.0648C25.0719 21.7465 25.455 22.6712 25.455 23.6354C25.455 24.5995 25.0719 25.5242 24.3899 26.2059C23.708 26.8877 22.783 27.2707 21.8186 27.2707H18.1823C17.5232 27.2929 16.8704 27.1354 16.2939 26.8153C15.7174 26.4951 15.2389 26.0242 14.9095 25.453" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 8.18176V12.1212M20 27.8787V31.8181" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </span>

  {/* Label for the icon */}
  <span className="text-xl font-bold mt-2">33k</span>

  {/* Description text */}
  <p className="sm:text-[8px] md:text-sm text-center mt-1">Mopnthly Produduct Sale</p>
</div>
<div className="group shadow-2xl border-solid border-2 mt-44 rounded-md hover:bg-red-500 bg-white sm:w-[100px] md:w-[200px] h-[200px] flex flex-col justify-center items-center cursor-pointer relative">
  {/* Circle with SVG icon */}
  <span className="bg-black rounded-full text-white p-4 flex justify-center items-center">
  <svg width="30" height="37" viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83301 9.83329V6.16663C5.83303 5.1049 6.14036 4.06588 6.71789 3.17498C7.29543 2.28407 8.11848 1.57937 9.0877 1.14594C10.0569 0.7125 11.1309 0.568859 12.1799 0.732351C13.229 0.895842 14.2083 1.35948 14.9997 2.06729C15.791 1.35948 16.7704 0.895842 17.8194 0.732351C18.8685 0.568859 19.9424 0.7125 20.9117 1.14594C21.8809 1.57937 22.7039 2.28407 23.2815 3.17498C23.859 4.06588 24.1663 5.1049 24.1663 6.16663V9.83329H26.9163C27.6457 9.83329 28.3452 10.123 28.8609 10.6387C29.3766 11.1545 29.6663 11.8539 29.6663 12.5833V30.9258C29.6663 32.6252 28.9913 34.2549 27.7896 35.4566C26.588 36.6582 24.9582 37.3333 23.2588 37.3333H7.66634C5.72142 37.3333 3.85616 36.5607 2.48089 35.1854C1.10562 33.8101 0.333008 31.9449 0.333008 30V12.5833C0.333008 11.8539 0.622739 11.1545 1.13846 10.6387C1.65419 10.123 2.35366 9.83329 3.08301 9.83329H5.83301ZM17.9972 34.5833C17.2493 33.5104 16.8493 32.2336 16.8513 30.9258V12.5833H3.08301V30C3.08301 30.6019 3.20156 31.1979 3.43189 31.7539C3.66223 32.31 3.99983 32.8153 4.42544 33.2409C4.85104 33.6665 5.3563 34.0041 5.91238 34.2344C6.46845 34.4647 7.06445 34.5833 7.66634 34.5833H17.9972ZM14.083 9.83329V6.16663C14.083 5.43728 13.7933 4.73781 13.2776 4.22208C12.7618 3.70636 12.0624 3.41663 11.333 3.41663C10.6037 3.41663 9.90419 3.70636 9.38846 4.22208C8.87274 4.73781 8.58301 5.43728 8.58301 6.16663V9.83329H14.083ZM16.833 9.83329H21.4163V6.16663C21.4164 5.60056 21.2418 5.04826 20.9163 4.58513C20.5908 4.12199 20.1303 3.77059 19.5977 3.57888C19.0651 3.38717 18.4863 3.36449 17.9403 3.51395C17.3943 3.6634 16.9077 3.97771 16.547 4.41396C16.7322 4.96396 16.833 5.55429 16.833 6.16663V9.83329ZM19.6013 30.9258C19.6013 31.8958 19.9867 32.8261 20.6726 33.512C21.3585 34.198 22.2888 34.5833 23.2588 34.5833C24.2289 34.5833 25.1592 34.198 25.8451 33.512C26.531 32.8261 26.9163 31.8958 26.9163 30.9258V12.5833H19.6013V30.9258Z" fill="white"/>
</svg>
  </span>

  {/* Label for the icon */}
  <span className="text-xl font-bold mt-2">45.5k</span>

  {/* Description text */}
  <p className="sm:text-[8px] md:text-sm text-center mt-1">Customer active in our site</p>
</div>
<div className="group shadow-2xl border-solid border-2 mt-44 rounded-md hover:bg-red-500 bg-white sm:w-[100px] md:w-[200px] h-[200px] flex flex-col justify-center items-center cursor-pointer relative">
  {/* Circle with SVG icon */}
  <span className="bg-black rounded-full text-white p-4  flex justify-center items-center">
  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9278 18.1456V18.6456L21.4278 18.6456C22.0916 18.6457 22.739 18.8514 23.281 19.2346C23.8229 19.6178 24.2327 20.1595 24.454 20.7851C24.4727 20.8381 24.4808 20.8941 24.4778 20.9502C24.4748 21.0062 24.4608 21.0611 24.4366 21.1117C24.4124 21.1624 24.3784 21.2077 24.3367 21.2452C24.295 21.2828 24.2463 21.3117 24.1933 21.3304C24.1404 21.3491 24.0844 21.3571 24.0283 21.3542C23.9723 21.3512 23.9174 21.3372 23.8667 21.313C23.7645 21.2641 23.6858 21.1766 23.6481 21.0697L23.648 21.0695C23.4856 20.6104 23.1849 20.213 22.7873 19.9319C22.3896 19.6509 21.9146 19.5 21.4277 19.5002L20.9278 19.5003V20.0002V23.7092V24.2092H21.4278C22.2789 24.2092 23.0952 24.5473 23.697 25.1491C24.2988 25.7509 24.6369 26.5672 24.6369 27.4183C24.6369 28.2694 24.2988 29.0856 23.697 29.6874C23.0952 30.2892 22.2789 30.6273 21.4278 30.6273H20.9278V31.1273V31.5546H20.0733V31.1273V30.6273L19.5733 30.6273C18.9096 30.6273 18.2621 30.4215 17.7202 30.0383C17.1782 29.6551 16.7684 29.1134 16.5471 28.4876L16.5472 28.4875L16.5422 28.4744C16.5216 28.4211 16.512 28.3642 16.5138 28.3071C16.5156 28.25 16.5289 28.1939 16.5528 28.142C16.5767 28.0901 16.6107 28.0435 16.6529 28.005L16.317 27.6367L16.6529 28.005C16.6952 27.9665 16.7447 27.9369 16.7985 27.9179C16.8524 27.8988 16.9095 27.8908 16.9665 27.8942C17.0236 27.8977 17.0793 27.9125 17.1305 27.9379C17.1817 27.9632 17.2273 27.9986 17.2646 28.0419C17.3019 28.0852 17.3301 28.1355 17.3476 28.1899L17.3499 28.1969L17.3523 28.2039C17.6768 29.1186 18.5484 29.7728 19.5733 29.7728H20.0733V29.2728V25.5637V25.0637H19.5733C18.7222 25.0637 17.906 24.7256 17.3042 24.1238C16.7024 23.522 16.3643 22.7058 16.3643 21.8547C16.3643 21.0036 16.7024 20.1874 17.3042 19.5856C17.906 18.9837 18.7222 18.6456 19.5733 18.6456H20.0733V18.1456V17.7184H20.9278V18.1456ZM20.0733 20.0002V19.5002H19.5733C18.9488 19.5002 18.35 19.7482 17.9084 20.1898C17.4668 20.6314 17.2188 21.2302 17.2188 21.8547C17.2188 22.4792 17.4668 23.078 17.9084 23.5196C18.35 23.9612 18.9488 24.2092 19.5733 24.2092H20.0733V23.7092V20.0002ZM20.9278 29.2728V29.7728H21.4278C22.0523 29.7728 22.6512 29.5247 23.0927 29.0832C23.5343 28.6416 23.7824 28.0427 23.7824 27.4183C23.7824 26.7938 23.5343 26.1949 23.0927 25.7534C22.6512 25.3118 22.0523 25.0637 21.4278 25.0637H20.9278V25.5637V29.2728Z" fill="#FAFAFA" stroke="#FAFAFA"/>
<path d="M13.2057 12.5777L13.5219 12.6998C17.8707 14.3798 23.1083 14.3797 27.457 12.698L27.7695 12.5772L28.0001 12.8203C29.8981 14.8211 31.4858 17.0948 32.7105 19.5658L32.7115 19.5677C33.9873 22.1703 34.7037 24.8133 34.5867 27.1301L34.5867 27.1301C34.4723 29.3912 33.5716 31.3572 31.5218 32.806L31.5218 32.806C29.4129 34.296 25.9467 35.3336 20.5354 35.3336C15.1198 35.3336 11.6397 34.3141 9.51316 32.8421L9.51293 32.842C7.44943 31.412 6.53763 29.472 6.41014 27.2374L13.2057 12.5777ZM13.2057 12.5777L12.9752 12.8262M13.2057 12.5777L12.9752 12.8262M12.9752 12.8262C11.1573 14.7856 9.46566 17.1897 8.25095 19.6929L8.25091 19.6929M12.9752 12.8262L8.25091 19.6929M8.25091 19.6929C6.98037 22.3123 6.2784 24.9432 6.41013 27.2372L8.25091 19.6929ZM30.3428 6.18136C30.7832 6.39921 31.1642 6.60759 31.4775 6.79428L28.3457 11.3725L28.1141 11.7111L28.401 12.0044C30.3394 13.9861 32.1697 16.5163 33.4805 19.1919C34.7935 21.8721 35.5679 24.6624 35.441 27.1735C35.3151 29.6637 34.3054 31.8863 32.0163 33.5035C29.7051 35.1363 26.0382 36.1881 20.5364 36.1881C15.0332 36.1881 11.3544 35.1551 9.02802 33.5441C6.72448 31.9489 5.6991 29.7543 5.55803 27.2856C5.41571 24.7951 6.17576 22.0153 7.48354 19.3201C8.7889 16.6299 10.6229 14.0598 12.5812 11.9993L12.8589 11.7071L12.6323 11.3738L9.52247 6.79791C9.67984 6.70521 9.8536 6.60746 10.043 6.50656L10.043 6.50656L10.0447 6.50564C10.2353 6.40316 10.4408 6.29767 10.6614 6.19013L10.8573 6.09458C13.1034 5.02401 16.6645 3.80945 20.5364 3.80945C24.4384 3.80945 27.9975 5.04283 30.2165 6.12005C30.2165 6.12005 30.2165 6.12005 30.2165 6.12006L30.3412 6.18057C30.3417 6.18083 30.3422 6.1811 30.3428 6.18136ZM26.7245 12.0592L26.8779 12.0047L26.9698 11.8703L29.7117 7.86178L30.2968 7.00635L29.2631 7.08078C26.6696 7.26751 23.6003 7.87479 20.6554 8.7274C18.6714 9.30056 16.4387 9.21929 14.3339 8.83106C13.8046 8.73294 13.279 8.61613 12.758 8.48086L11.4726 8.14712L12.2188 9.24574L13.9991 11.8671L14.091 12.0024L14.245 12.0572C18.1692 13.4543 22.7996 13.4542 26.7245 12.0592ZM12.08 6.48035L10.8004 7.02347L12.1328 7.41985C12.8897 7.64501 13.6821 7.84132 14.4877 7.99046L14.4881 7.99055C16.523 8.36535 18.6079 8.42979 20.4168 7.90582L20.4175 7.90561C22.3859 7.33216 24.388 6.88116 26.4122 6.5552L26.4768 5.58279C24.7353 5.05845 22.6905 4.66397 20.5354 4.66397C17.2536 4.66397 14.2063 5.57787 12.08 6.48035Z" fill="#FAFAFA" stroke="#FAFAFA"/>
</svg>

  </span>

  {/* Label for the icon */}
  <span className="text-xl font-bold mt-2">25k</span>

  {/* Description text */}
  <p className="sm:text-[8px] md:text-sm text-center mt-1">Anual gross sale in our site</p>
</div>
</div>
<div className='flex md:gap-24 gap-x-2 md:mr-20 mt-44  mr-3'>
  <div className='md:ml-48  ml-4'>
  <Image src="/Frame 874.jpg" alt="img" width={300} height={500}/>
  <h3  className='md:text-lg text-sm font-bold mt-4'>Tom Cruise</h3>
  <p className='font-medium'>Founder & Chairman</p>
  <div className="flex space-x-2 text-lg mt-2 mb-8 sm:text-lg md:text-xl ">
  <a
            href="https://twitter.com" // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 "
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 text-[black]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 text-[black]"
          >
            <FaLinkedin />
          </a>
        
        </div>

  </div>
  <div>
  <Image src="/Frame 875.jpg" alt="img" width={300} height={500}/>
  <h3  className='md:text-lg text-sm font-bold mt-4'>Emma Watson</h3>
  <p className='font-medium'>Managing Director</p>
  <div className="flex space-x-2 text-lg mt-2 mb-8 sm:text-lg md:text-xl ">
  <a
            href="https://twitter.com" // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 "
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 text-[black]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 text-[black]"
          >
            <FaLinkedin />
          </a>
        
        </div>
  </div>
  <div className='md:mr-16'>
  <Image src="/Frame 876.jpg" alt="img" width={300} height={500}/>
  <h3  className='md:text-lg text-sm font-bold mt-4'>Will Smith</h3>
  <p className='font-medium'>Product Designer</p>
  <div className="flex space-x-2 text-sm mt-2 mb-8 sm:text-lg md:text-xl ">
  <a
            href="https://twitter.com" // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 "
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 "
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 "
          >
            <FaLinkedin />
          </a>
        
        </div>
  </div>
</div>
<div className="mt-28 flex justify-center items-center ">
  <Image src="/Frame 883.jpg" alt="img" width={100} height={100}
  className='w-30 md:w-42' />
</div>

<div className="w-full sm:h-[500px] lg:h-[300px] flex justify-center items-center mt-24 ml-16 ">
  <div className="w-full sm:w-[100%] lg:w-[70%] flex flex-col md:flex-row gap-y-4 sm:items-center lg:justify-evenly gap-x-4">
    {/* First block */}
    <div className="w-[260px] h-[130px]   flex justify-center items-center flex-col gap-y-3">
      <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center">
        <span>
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_30242_3517)">
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_30242_3517)">
<path d="M12.1663 31.6667C14.0073 31.6667 15.4997 30.1743 15.4997 28.3333C15.4997 26.4924 14.0073 25 12.1663 25C10.3254 25 8.83301 26.4924 8.83301 28.3333C8.83301 30.1743 10.3254 31.6667 12.1663 31.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.8333 31.6667C30.6743 31.6667 32.1667 30.1743 32.1667 28.3333C32.1667 26.4924 30.6743 25 28.8333 25C26.9924 25 25.5 26.4924 25.5 28.3333C25.5 30.1743 26.9924 31.6667 28.8333 31.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.83301 28.3335H7.49967C6.3951 28.3335 5.49967 27.4381 5.49967 26.3335V21.6668M3.83301 8.3335H20.1663C21.2709 8.3335 22.1663 9.22893 22.1663 10.3335V28.3335M15.4997 28.3335H25.4997M32.1663 28.3335H33.4997C34.6042 28.3335 35.4997 27.4381 35.4997 26.3335V18.3335M35.4997 18.3335H22.1663M35.4997 18.3335L31.0823 10.9712C30.7208 10.3688 30.0698 10.0002 29.3673 10.0002H22.1663" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 28H7.16667C6.0621 28 5.16667 27.1046 5.16667 26V21.3333M3.5 8H19.8333C20.9379 8 21.8333 8.89543 21.8333 10V28M15.5 28H25.1667M32.5 28H33.1667C34.2712 28 35.1667 27.1046 35.1667 26V18M35.1667 18H21.8333M35.1667 18L30.7493 10.6377C30.3878 10.0353 29.7368 9.66667 29.0343 9.66667H21.8333" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 11.8181H12.1667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.31836 15.4546H8.98503" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 19.0908H12.1667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_30242_3517">
<rect width="40" height="40" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
            </g>
          </svg>
        </span>
      </div>
      <div>
        <h2 className="font-bold text-center">FREE AND FAST DELIVERY</h2>
        <p className="text-sm text-center">Free delivery for all orders over $140</p>
      </div>
    </div>

    {/* Second block */}
    <div className="w-[260px] h-[130px]  flex justify-center items-center flex-col gap-y-3">
      <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center">
        <span>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_30242_3534)">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_30242_3534)">
<path d="M13.3337 25.0001C13.3337 23.1591 11.8413 21.6667 10.0003 21.6667C8.15938 21.6667 6.66699 23.1591 6.66699 25.0001V28.3334C6.66699 30.1744 8.15938 31.6667 10.0003 31.6667C11.8413 31.6667 13.3337 30.1744 13.3337 28.3334V25.0001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.3337 25.0001C33.3337 23.1591 31.8413 21.6667 30.0003 21.6667C28.1594 21.6667 26.667 23.1591 26.667 25.0001V28.3334C26.667 30.1744 28.1594 31.6667 30.0003 31.6667C31.8413 31.6667 33.3337 30.1744 33.3337 28.3334V25.0001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66699 25.0001V20.0001C6.66699 16.4639 8.07175 13.0725 10.5722 10.572C13.0727 8.07151 16.4641 6.66675 20.0003 6.66675C23.5365 6.66675 26.9279 8.07151 29.4284 10.572C31.9289 13.0725 33.3337 16.4639 33.3337 20.0001V25.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 31.6667C30 32.9928 28.9464 34.2646 27.0711 35.2023C25.1957 36.14 22.6522 36.6667 20 36.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_30242_3534">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>

            </g>
          </svg>
        </span>
      </div>
      <div>
        <h2 className="font-bold text-center">24/7 CUSTOMER SERVICE</h2>
        <p className="text-sm text-center">Friendly 24/7 customer support</p>
      </div>
    </div>

    {/* Third block */}
    <div className="w-[260px] h-[130px]  lg:mr-48 flex justify-center items-center flex-col gap-y-3 md:mr-3">
      <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center">
        <span>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.09943 30.5992L8.0992 30.5991C7.22647 29.9483 6.42586 28.9206 5.84306 27.759C5.26022 26.5973 4.91699 25.3451 4.91699 24.2666V11.8666C4.91699 9.50736 6.67182 6.96177 8.89149 6.13513L8.89245 6.13477L17.2087 3.01826C17.2088 3.01823 17.2089 3.0182 17.2089 3.01817C17.9624 2.73661 18.9619 2.5874 19.9837 2.5874C21.0054 2.5874 22.0049 2.73661 22.7584 3.01817C22.7585 3.0182 22.7585 3.01823 22.7586 3.01826L31.0749 6.13477L31.0758 6.13513C33.2955 6.96177 35.0503 9.50736 35.0503 11.8666V24.2499C35.0503 25.3371 34.7069 26.5892 34.1244 27.7483C33.5419 28.9073 32.7414 29.9313 31.8681 30.5824L31.8679 30.5826L24.7012 35.9326L24.7012 35.9325L24.695 35.9373C23.4123 36.9264 21.7243 37.4332 20.0003 37.4332C18.2777 37.4332 16.5855 36.927 15.2652 35.9486C15.265 35.9484 15.2649 35.9483 15.2647 35.9482L8.09943 30.5992ZM17.7422 4.43145L17.7415 4.4317L9.42487 7.54837L9.42416 7.54863C8.59658 7.86019 7.85535 8.52248 7.32443 9.29061C6.79333 10.059 6.43366 10.9898 6.43366 11.8832V24.2666C6.43366 25.161 6.74424 26.1892 7.20124 27.101C7.65813 28.0126 8.29361 28.8722 9.00118 29.4005L9.00122 29.4006L16.1676 34.7503C17.2296 35.5445 18.6286 35.9249 20.0024 35.9249C21.3764 35.9249 22.7786 35.5445 23.8481 34.7516L23.8494 34.7506L31.0161 29.4006L31.017 29.3999C31.7317 28.8638 32.3672 28.005 32.8225 27.0943C33.2779 26.1837 33.5837 25.16 33.5837 24.2666V11.8666C33.5837 10.9804 33.2232 10.0538 32.6929 9.28645C32.1624 8.51889 31.4226 7.85396 30.5979 7.5338L30.598 7.53376L30.5925 7.5317L22.2758 4.41503L22.2758 4.41495L22.2667 4.41174C21.6286 4.18651 20.8005 4.08314 20.001 4.08532C19.2024 4.0875 18.3755 4.19514 17.7422 4.43145Z" fill="#FAFAFA" stroke="#FAFAFA"/>
<path d="M17.4135 21.0536L17.7671 21.4071L18.1206 21.0536L24.4039 14.7703C24.692 14.4822 25.1754 14.4822 25.4635 14.7703C25.7516 15.0583 25.7516 15.5417 25.4635 15.8298L18.2968 22.9965C18.1455 23.1478 17.9583 23.2167 17.7671 23.2167C17.5758 23.2167 17.3886 23.1478 17.2373 22.9965L14.5539 20.3131C14.2659 20.0251 14.2659 19.5417 14.5539 19.2536C14.842 18.9655 15.3254 18.9655 15.6135 19.2536L17.4135 21.0536Z" fill="#FAFAFA" stroke="#FAFAFA"/>
</svg>
          </svg>
        </span>
      </div>
      <div>
        <h2 className="font-bold text-center">MONEY BACK GUARANTEE</h2>
        <p className="text-sm text-center">We return money within 30 days</p>
      </div>
    </div>
  </div>
</div>
</Wrapper>
   </section>
  )
}