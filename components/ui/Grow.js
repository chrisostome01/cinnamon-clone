/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "./Button";
import Layout from "../sections/layouts/Layout";

export default function Grow() {

    const renderTopic = (topic) => {
        return topic.map((value,index) => (
            <div key={index} className="grid grid-flow-col items-center justify-between py-24 pr-[12px] pl-1 border-b border-[#3F3F3F]">
                <div className="text-[#F9F9F9] text-24 font-mont-semibold leading-36">
                    {value}
                </div>
                <div className="">
                    <img src="/img/arrowRightWhite.webp" alt="arrow right" />
                </div>
            </div>
        ))
    } 

    return(
        <div className="bg-ci-dark-600 bg-header">
            <Layout style={"py-160 lg:py-96"}>
                <div className="grid grid-cols-12 text-white">
                    <div className=" col-start-1 col-end-6 gap-x-32 lg:col-end-12 lg:pb-64p">
                        <h1 className="mb-24  text-54 sm:!text-40  leading-72 text-[#F9F9F9] font-mont-bold md:text-40">
                            We{"'"}re growing
                        </h1>
                        <p className="mb-8 text-secondary-50 text-16 leading-26 font-mont md:font-sans">
                            Jump on board with Cinnamon and get the 
                            privilege of working on challenging projects 
                            for leading global companies! Make the world
                            a better, more connected place.
                        </p>
                        <Link href={"/"}>
                            <Button style={"h-48 font-mont text-[100%]"} label={"See All Positions"} />
                        </Link> 
                    </div>
                    <div className="col-start-8 col-end-12 lg:col-start-1">                        
                        { renderTopic(["Android Developer","Android Developer","Backend Development Team Lead"]) }                        
                    </div>
                </div>
            </Layout>
        </div>
    )
}