/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "../ui/Button";
import Layout from "../sections/layouts/Layout";

export default function Agile() {
    return (
        <div className="bg-secondary-30 relative">
            <Layout style={"py-160 md:py-96"}>
                <div className="grid grid-cols-12 gap-x-32 lg:gap-32">
                    <div className="col-span-6 font-mont-bold  text-54 sm:!text-40  leading-72 lg:col-span-12">
                        Agile team 
                        <br></br>
                        on demand
                    </div>
                    <img className=" col-start-1 col-end-12 w-338 h-220 right-0 hidden lg:block" src="/img/agile-team-on-demand.webp" alt="Agile tem on demand image" />
                    <div className=" col-start-7 col-end-11 lg:col-start-1 lg:col-end-12">
                        <p className="text-16 font-mont leading-26 text-secondary-100 opacity-90 mb-24">
                            By hiring and managing talented people 
                            with skills specific to your project, 
                            we build you a team that{"'"}s accomplished, 
                            agile and scalable in both directions.
                        </p>
                        <Link href={"/"}>
                            <Button  style={"h-48 font-mont text-[100%]"} label={"See how it works"} />
                        </Link> 
                    </div>
                </div>
            </Layout>
            <img className="w-338 h-220 absolute bottom-0 right-0 lg:hidden" src="/img/agile-team-on-demand.webp" alt="Agile tem on demand image" />
        </div>
    )
}