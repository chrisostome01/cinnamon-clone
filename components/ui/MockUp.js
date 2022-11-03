/* eslint-disable @next/next/no-img-element */
import Layout from "../sections/layouts/Layout";

export default function MockUp({ img , titles , children, description , bg}) {
    return(
        <Layout style={"pb-160 lg:pb-64p"}>
            <div className={`${bg} mb-40 -z-40 flex justify-center items-center overflow-hidden`}>
                <img src={`/bg/${img}`} alt="Moch up image" className="transition-all ease-in-out duration-[0.5s] hover:scale-[1.03]" />
            </div>
            <div className="grid grid-cols-12 bg-white z-40">
                <div className="flex flex-wrap col-span-12  leading-12 font-bold uppercase text-secondary-400 text-12">
                    { titles.map((value,index ) => <div key={index} className="mr-8 mb-24">{value}</div>) }
                </div>
                <h3 className="col-span-12 font-mont-bold text-40 leading-56 md:text-32 md:leading-44" >
                    {children}
                </h3>
                <p className="mt-4 col-span-9 md:col-span-12 text-secondary-100 text-16 leading-26">
                    { description }
                </p>
            </div>
        </Layout>
    )
}

