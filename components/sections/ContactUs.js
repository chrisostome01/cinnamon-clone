/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "../ui/Button";
import Layout from "./layouts/Layout";

export default  function ContactUs() {
    return (
        <div className="relative bg-secondary-30">
                <Layout style={"py-160 lg:py-96"}>
                    <div className="flex flex-col justify-center items-center">
                        <div className="  text-54 sm:!text-40  lg:text-40 leading-72 md:!leading-56 font-mont-bold text-center">
                            <h1 className="md:hidden">
                                Have a project in mind?
                            </h1>
                            <h1 className="">
                                Let{"'"}s work together.
                            </h1>
                        </div>
                        <Link href={"/"}>
                            <Button style={"h-48 font-mont text-[100%] mt-[58px] md:mt-46"} label={"Contact Us"} />
                        </Link> 
                    </div>
                </Layout>
            <img className="absolute bottom-0 left-0  h-338 w-428 lg:w-220 lg:h-auto md:!w-120" src="/bg/job-application.png" alt="Job ablication image" />
        </div>
    )
}