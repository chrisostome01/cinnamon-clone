/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "./Button";
import Layout from "../sections/layouts/Layout";

export default function HowItWorks() {
    return(
        <div className="bg-white relative">
            <Layout style={"py-160 lg:py-96"}>
                <div className="grid grid-cols-12 gap-x-32 grid-flow-col items-center">
                    <div className=" col-start-1 col-end-5 md:col-end-12">
                        <img src="/img/cinn-college.webp" alt="college"  />
                    </div>
                    <div className="col-start-6 col-end-10 lg:col-start-1 lg:col-end-12">
                        <p className="text-secondary-100 text-16 leading-26 font-mont lg:mt-8">
                            Seize the unique opportunity to participate in 
                            a wide range of courses conducted by professionals 
                            with an impeccable reputation in the digital industry.
                        </p>
                        <div className="mt-8">
                            <Link href={"/"}>
                                <Button style={"h-48 font-mont text-[100%]"} label={"See How it Works"} />
                            </Link> 
                        </div>
                    </div>
                </div>
            </Layout>
            <img className="absolute right-0 bottom-0 w-[556px] h-[402px] lg:hidden" src="/img/cinn-college-illustration.webp" alt="cinn college illustration" />
        </div>
    )
}