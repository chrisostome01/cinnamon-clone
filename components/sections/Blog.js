/* eslint-disable @next/next/no-img-element */
import BlogCard from "../ui/BlogCard";
import Layout from "./layouts/Layout";

export default function Blog() {
    return (
        <Layout style={"mb-160"}>
            <h1 className="max-w-[480px]  text-54 sm:!text-40  leading-[74px] font-mont-bold mb-64">
                Stay in the loop on tech topics
            </h1>
            <div className="lg:flex gap-32 lg:overflow-x-auto lg:scroll-hidden grid grid-cols-3 scroll-hidden " >
               <BlogCard title={"Sales"} img={"Freelance_VS.webp"} description={"Defferences in Hiring an Agency vs. Frelancers 2.0"}>
                    <p className="overflow-hidden font-mont-semibold text-ellipsis whitespace-nowrap text-secondary-100 text-16 leading-[24px]">
                        Matija Bermanec & Lorena Ujević
                    </p>
                    <span className="bg-warning-100 w-[6px] h-[6px] rounded-full"></span>
                    <p className="overflow-hidden font-mont-semibold text-ellipsis whitespace-nowrap text-secondary-100 text-16 leading-[24px]">
                        2022-10-13
                    </p>
                    <span className="bg-warning-100 w-[6px] h-[6px] rounded-full"></span>
                    <p className="overflow-hidden font-mont-semibold text-ellipsis whitespace-nowrap text-secondary-100 text-16 leading-[24px]">
                        6min
                    </p>
               </BlogCard>
               <BlogCard title={"Development"} img={"Flutter_Template.png"} description={"Cinnamon Flutter Tamplate Overview"}>
                    <p className="overflow-hidden font-mont-semibold text-ellipsis whitespace-nowrap text-secondary-100 text-16 leading-[24px]">
                        Samantha Holstead
                    </p>
                    <span className="bg-warning-100 w-[6px] h-[6px] rounded-full"></span>
                    <p className="overflow-hidden font-mont-semibold text-ellipsis whitespace-nowrap text-secondary-100 text-16 leading-[24px]">
                        2022-10-03
                    </p>
                    <span className="bg-warning-100 w-[6px] h-[6px] rounded-full"></span>
                    <p className="overflow-hidden font-mont-semibold text-ellipsis whitespace-nowrap text-secondary-100 text-16 leading-[24px]">
                        3min
                    </p>
               </BlogCard>
               <BlogCard title={"Design"} img={"Tinder_blog.png"} description={"How Tinder Swindled User Experience"}>
                    <p className="overflow-hidden font-mont-semibold text-ellipsis whitespace-nowrap text-secondary-100 text-16 leading-[24px]">
                        Jan Marin
                    </p>
                    <span className="bg-warning-100 w-[6px] h-[6px] rounded-full"></span>
                    <p className="overflow-hidden font-mont-semibold text-ellipsis whitespace-nowrap text-secondary-100 text-16 leading-[24px]">
                        2022-09-13
                    </p>
                    <span className="bg-warning-100 w-[6px] h-[6px] rounded-full"></span>
                    <p className="overflow-hidden font-mont-semibold text-ellipsis whitespace-nowrap text-secondary-100 text-16 leading-[24px]">
                        10min
                    </p>
               </BlogCard>
            </div>
            <div className="grid gap-[16px] grid-flow-col mt-64 w-max items-center cursor-pointer">
                <img src="/icons/arrowRight.svg" alt="arrow right" />
                <p className=" text-primary-800 leading-26 font-mont-bold uppercase text-16 border-b-2 border-primary-800">
                    VIEW MORE BLOGS
                </p>
            </div>
        </Layout>
    )
}