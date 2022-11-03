/* eslint-disable @next/next/no-img-element */
import Layout from "../sections/layouts/Layout";

export default function Testimony() {
    return(
        <div className="bg-white">
            <Layout style={"pt-160 pb-140 relative md:pb-96px md:pt-60"}>
                <div className="text-258 font-mont-bold text-primary-900 absolute left top-[6%] left-[-7%] lg:left-[0%] md:top-0 md:text-175 ">
                    {"“"}
                </div>
                <div className="flex lg:flex-col ">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-start-1 col-end-8 md:col-end-12" >
                            <div className="z-20 text-40 leading-56 font-mont-bold mb-8 md:text-32 md:leading-44">
                                They{"'"}re consistent, and  the communication is good.
                            </div>
                            <div className="text-secondary-100 text-16 leading-26 mb-8 font-mont">
                                When I have a deadline, they would work extra hours on the weekend and after hours. Cinnamon gives the impression of being a smaller team that’s focused on customers.
                            </div>
                            <div className="flex lg:flex-col">
                                <img className="mr-24 w-[64px] h-[64px] rounded-full" src="/img/GarinProfile.png" alt="Garin profile" />
                                <div>
                                    <h1 className="text-24 leading-36 font-mont-bold">Garin Toren,</h1>
                                    <p className="text-16 leading-26 font-semibold text-ci-dark-600">CEO, ping</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-10 col-end-12 lg:hidden">
                            <img src="/img/pingLogo.webp" alt="ping logo" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-46 items-center lg:flex-col lg:items-start ">
                    <div className="flex gap-46 transition-all duration-200 lg:mt-46">
                        <img className="w-48 h-[31px] cursor-pointer hover:-mt-[20px]" src="/img/arrow-left.webp" alt="Arrow left" />
                        <img className="w-48 h-[31px] cursor-pointer hover:-mt-[20px]" src="/img/arrow-right.webp" alt="Arrow right" />
                    </div>
                    <div className="grid gap-[16px] grid-flow-col w-max items-center cursor-pointer lg:mt-46">
                        <img src="/icons/arrowRight.svg" alt="arrow right" />
                        <p className=" text-primary-800 leading-26 font-mont-bold uppercase text-16 border-b-2 border-primary-800">
                            VIEW CASE STUDY
                        </p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}