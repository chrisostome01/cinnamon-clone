/* eslint-disable @next/next/no-img-element */
export default function Location({img ,name, street}) {
    return(
        <div className="w-[544px] md:w-220 hover:text-primary-800 group">
            <img src={`/img/${img}`} alt="Zerbag city" />
            <div className="flex mt-8">
                <div className="h-full ">
                    <img className=" mt-[5px] mr-[20px]" src="/icons/location.svg" alt="location icon" />
                </div>
                <div className="flex flex-col">
                    <h1 className="mb-[8px] leading-36 text-24 group-hover:text-primary-800 font-mont-bold">{name}</h1>
                    <p className="font-mont text-16 leading-26 text-secondary-100 group-hover:text-primary-800">{street}</p>
                </div>
            </div>
        </div>
    )
}