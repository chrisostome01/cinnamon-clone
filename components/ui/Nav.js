/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import Layout from "../sections/layouts/Layout";

export default function Nav(){
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
      document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY > 8;
        if (scrollCheck !== scroll) setScroll(scrollCheck);
      })
      return document.addEventListener("scroll",() => {})
    })

    return(
        <header className={`text-white w-full fixed  z-50 ${scroll? 'bg-white text-ci-dark-600': ' bg-transparent '}`}>
            <Layout>
                <div className="flex justify-between items-center h-[80px]  ">
                    <div>
                        <img className={`w-160 h-20 ${scroll? 'hidden ': ' block'}`} src="/logo.svg" alt="Logo"  />
                        <img className={`w-160 h-20 ${scroll? 'block ': ' hidden '}`} src="/logo-dark.svg" alt="Logo"  />
                    </div>
                    <div className="grid gap-[32px] items-center grid-flow-col lg:hidden">
                        <ul className="grid grid-flow-col items-center font-bold leading-20 transition-colors ease-in-out duration-[0.2s] font-mont ">
                            <li className="p-links hover:text-primary-800 leading-20 text-16">
                                <Link href={"/"}>
                                    Projects
                                </Link>
                            </li>
                            <li className="p-links hover:text-primary-800 leading-20 text-16">
                                <Link href={"/"}>
                                    Services
                                </Link>
                            </li>
                            <li className="p-links hover:text-primary-800 leading-20 text-16">
                                <Link href={"/"}>
                                    About Us
                                </Link>
                            </li>
                            <li className="p-links hover:text-primary-800 leading-20 text-16">
                                <Link href={"/"}>
                                    Careers
                                </Link>
                            </li>
                            <li className="p-links hover:text-primary-800 leading-20 text-16">
                                <Link href={"/"}>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                        <Link href={"/"}>
                            <div className={`relative group w-46 h-45 border-2 hover:border-primary-800  border-white flex rounded-full ${scroll? '!border-primary-800 ': ' border-white '}`}>
                                <div className=" border-none group-hover:w-[100%] group-hover:pt-[100%] pt-[5%] group-hover:shadow-btn shadow-btn-h w-0 h-6 rounded-[50%] transition-all duration-[0.2s]   top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute"></div>
                                <div className="h-16 group w-13 m-auto overflow-hidden ">
                                    <svg className="relative" width="13" height="16" viewBox="0 0 13 16"  xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0V16L13 8L0 0Z" className={`  ${scroll? '!fill-primary-800 group-hover:!fill-white ': ' !fill-white '} group-hover:fill-primary-800`} />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/"}>
                            <Button style={"h-48 font-mont text-[100%]"} label={"Contact Us"} />
                        </Link> 
                    </div>
                    {/* ========== start:bugger ============  */}
                    <div className="lg:block hidden cursor-pointer">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33301 8H26.6663" stroke={`${scroll? 'black ': ' white '}`} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.33301 16H18.6663" stroke={`${scroll? 'black ': ' white '}`} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.33301 24H23.9997" stroke={`${scroll? 'black ': ' white '}`} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* ========== end:bugger ============  */}                    
                </div>
            </Layout>
        </header>
    )
}

