/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "./Button";
import Layout from "../sections/layouts/Layout";


export default function WhoWeAre() {

    const renderProject = (projects) => (
        projects.map((value , index) => (
            <div key={index} className={`text-20 leading-36 mb-24 cursor-pointer font-mont-bold`}>
                {value}
            </div>
        ))
    )

    return (
        <div className="bg-secondary-30 relative">
            <Layout style={"py-245 lg:py-96 relative"}>
                <div className="">
                    <h1 className=" text-54 sm:!text-40  leading-32 font-bold mb-8">
                        Who we are
                    </h1>
                    <p className="text-secondary-100 mb-64 lg:mb-8 text-16 max-w-[448px] font-mont leading-26">
                        Meet our international teams made up of 86 
                        innovators, branched into 8 departments, 
                        that influence the market throughout 20 
                        different countries.
                    </p>
                    <img className="w-340 md:w-280 hidden lg:block lg:mb-8" src="/img/who-we-are.png" alt="who we are image" />
                    <div className="max-h-310 w-[70%] grid grid-cols-2 mb-72 lg:hidden">
                        { renderProject(["Product design","Project management", "Web development","Human resources","Mobile development","Sales","Quality assurance","Fluffy friends","Marketing"]) }
                    </div>
                    <Link href={"/"}>
                        <Button style={"h-48 font-mont text-[100%]"} label={"Read About Us"} />
                    </Link> 
                </div>
            </Layout>
            <img className="absolute top-[30%] right-0 bottom-0 w-[340px] h-[539px] lg:hidden" src="/img/who-we-are.png" alt="who we are image" />
        </div>
    )
}