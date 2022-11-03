/* eslint-disable @next/next/no-img-element */
import Layout from "./layouts/Layout";
import Location from "../ui/Location";
import { useState } from "react";

export default function Offices() {
    const [scolled, setScrolled] = useState(false)
    return(
        <div >
            <Layout style={"pt-140 pb-160"}>
                <h1 className=" mb-56p font-mont-bold  text-54 sm:!text-40  leading-72">
                    Our offices
                </h1>
                <div className="sm:max-full sm:overflow-x-auto scroll-hidden ">
                    <div className={`inline-flex gap-32 sm:!max-full sm:!overflow-x-auto transition-all ease-in-out duration-700 ${scolled ? 'translate-x-[-30%] md:translate-x-[-50%]' : 'translate-x-[0%]'}`}>
                        <Location img={"zagreb.jpeg"} name={"Zagreb"} street={"Slavonska avenija 6, 10000, Zagreb, Croatia"} />
                        <Location img={"new-york.jpeg"} name={"New york"} street={"500 7th Ave, New York, NY 10018, United States"} />
                        <Location img={"belgrade.jpeg"} name={"Belgrade"} street={"Bulevar vojvode Mišića 37 11000, Belgrade, Serbia"} />
                    </div>
                </div>
                <div className="flex justify-between pt-46 items-center sm:hidden">
                    <div className="flex gap-46 transition-all duration-200">
                        <img onClick={() => setScrolled(false) } className={`w-48 transition-all ease-in-out h-[31px] cursor-pointer hover:-mt-[10px] ${scolled ? " ": "filter grayscale hover:-mt-[0px]" } `} src="/img/arrow-left.webp" alt="Arrow left" />
                        <img onClick={() => setScrolled(true) } className={`w-48 transition-all ease-in-out h-[31px] cursor-pointer hover:-mt-[10px] ${scolled ? " filter grayscale hover:-mt-[0px]": "" }`} src="/img/arrow-right.webp" alt="Arrow right" />
                    </div>
                </div>
            </Layout>
        </div>
    )
}