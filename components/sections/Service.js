/* eslint-disable @next/next/no-img-element */
import Layout from "./layouts/Layout";
import ServiceCard from "../ui/ServiceCard"
import Button from "../ui/Button";
import Link from "next/link";

export default function Service() {
    return(
        <div className="bg-header bg-ci-dark-600 text-white">
            <Layout style={"pb-160 pt-176 lg:py-96"}>
                <div className="grid grid-cols-12 gap-32">
                    <div className="col-span-5 lg:col-span-12">
                        <h1 className=" text-54 sm:!text-40  leading-72 font-mont-bold">
                            Our services
                        </h1>
                    </div>
                    <div className="col-span-6 lg:col-span-12">
                        <div className="grid grid-cols-2 gap-x-128 gap-y-120 md:gap-y-64p md:grid-cols-1">
                            <ServiceCard img={"product-design.webp"} title={"Product design"} description={`
                                Producing, prototyping 
                                and testing sketches, 
                                high-fidelity wireframes
                                and the final UI is a 
                                process that results in 
                                intuitive and impactful 
                                design that's easy on the eyes.
                            `} />

                            <ServiceCard img={"development.webp"} title={"Develoment"} description={`
                                By selecting the befitting tech 
                                stack and architecture for the 
                                deliverable in question, we build
                                out the product until it's a 
                                fully-fledged digital solution.
                            `} />

                            <ServiceCard img={"quality-assurance.webp"} title={"Quality assurance"} description={`
                                Our QA engineering team makes your
                                product bug-free, bulletproof and 
                                performance-driven through both 
                                automatic and manual testing. 
                            `} />

                            <ServiceCard img={"marketing-and-growth.png"} title={"Marketing & growth"} description={`
                                By understanding the mechanics of 
                                digital marketing, we make sure to 
                                put your product, at the right time,
                                in front of the right people. 
                            `} />
                        </div>
                        <div className="mt-90">
                            <Link href={"/"}>
                                <Button style={"h-48 font-mont text-[100%]"} label={"See Our Services"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

