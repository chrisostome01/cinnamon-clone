/* eslint-disable @next/next/no-img-element */
import Layout from "./layouts/Layout";
import FooterCard from "../ui/FooterCard"
import Button from "../ui/Button";
import Link from "next/link";




export default function Footer() {

    return (
        <footer className="bg-ci-dark-600 bg-header min-h-min text-white">
            <Layout style={"pt-90"}>
                <div className="flex md:flex-col">
                    {/* footer left side */}
                    <div className="mr-12 flex-grow">
                        <img className={`w-160 h-20 `} src="/logo.svg" alt="Logo"  />
                        <h3 className="text-24 leading-36 w-182 font-mont-bold mt-40">All software, zero bullshit.</h3>
                        <ul className="grid gap-16 md:grid-cols-2 mt-[44px] mb-64">
                            <li className="leading-20 text-16 font-mont-semibold">
                                Home
                            </li>
                            <li className="leading-20 text-16 font-mont-semibold text-secondary-50 hover:text-white">
                                Projects
                            </li>
                            <li className="leading-20 text-16 font-mont-semibold text-secondary-50 hover:text-white">
                                Services
                            </li>
                            <li className="leading-20 text-16 font-mont-semibold text-secondary-50 hover:text-white">
                                About Us
                            </li>
                            <li className="leading-20 text-16 font-mont-semibold text-secondary-50 hover:text-white">
                                Carreers
                            </li>
                            <li className="leading-20 text-16 font-mont-semibold text-secondary-50 hover:text-white">
                                Blog
                            </li>
                        </ul>
                    </div>
                    {/* footer right side */}
                    <div className="flex flex-col justify-between gap-30">
                        <h3 className="text-[32px] leading-46 font-mont-bold md:hidden">All software, zero bullshit.</h3>
                        <div className="grid grid-cols-3 gap-24 mb-64 md:grid-cols-2">
                            <FooterCard title={`Zagreb`} rowOne={`Slavonska avenija 6,`} rowTwo={`10000, Zagreb, Croatia`} rowThree={`+385 99 347 3103`} />
                            <FooterCard title={`New York`} rowOne={`500 7th Ave, New York,`} rowTwo={`NY 10018, United States`} />
                            <FooterCard title={`Belgrade`} rowOne={`Bulevar vojvode Mišića 37`} rowTwo={`11000, Belgrade, Serbia`} />                   
                        </div>
                        <div className="flex my-36 justify-between w-full md:flex-col md:gap-9 md:items-center">
                            <div className="w-80 md:w-full">
                                <p className="text-secondary-30 font-mont-bold text-16">Our news letter</p>
                                <div className="pt-[15px] inline-flex flex-col w-full">                                    
                                    <div class="relative z-0 mb-6 w-full group">
                                        <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary-50 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="email" className="peer-focus:font-medium absolute text-16 text-secondary-50 dark:text-secondary-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your E-main</label>
                                    </div>
                                </div>
                                <Button label={"Subscribe"}  style={"mt-24  pb-12  pt-12 md:w-full"} />
                            </div>
                            <div className="">
                                <img className="max-w-full min-w-full" src="/icons/pangea.svg" alt="pangea icon" />
                                <img className="w-[216px] mt-8" src="/icons/clutch-badge.webp" alt="clutch-badge" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============ copywrite =============== */}
                <div className="py-36 border-t border-secondary-500">
                    <div className="flex justify-between  md:flex-col-reverse">
                        <div className="flex text-16 text-secondary-600 font-mont md:justify-center  md:border-t md:border-secondary-500 md:pt-36 md:mt-36">
                            <Link href="/">
                                <p>
                                    © 2022 Cinnamonnm
                                </p>
                            </Link>
                            <Link href="/" className="ml-24 underline">
                                <p>
                                    Privacy Policy
                                </p>
                            </Link>
                        </div>
                        <div className="flex md:justify-center">
                            <div className="h-24 pl-[20px]">
                                <img  src="/icons/linked.svg" alt="icon"/>
                            </div>
                            <div className="h-24 pl-[20px]">
                                <img  src="/icons/bal.svg" alt="icon"/>
                            </div>
                            <div className="h-24 pl-[20px]">
                                <img  src="/icons/behance.svg" alt="icon"/>
                            </div>
                            <div className="h-24 pl-[20px]">
                                <img  src="/icons/insta.svg" alt="icon"/>
                            </div>
                            <div className="h-24 pl-[20px]">
                                <img  src="/icons/facebook.svg" alt="icon"/>
                            </div>
                            <div className="h-24 pl-[20px]">
                                <img src="/icons/feed.svg" alt="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </footer>
    )
}