/* eslint-disable @next/next/no-img-element */
export default function ServiceCard({ img , title , description }) {
    return(
    <div className="w-[16rem]" >
        <img className="w-48 h-48" src={`/icons/${img}`} alt="Product design" />
        <div className="font-bold text-white text-20 leading-36 pt-24 pb-18 ">
            {title}
        </div>
        <div className="text-secondary-50 text-16 leading-26 font-mont">
            {description}
        </div>
    </div>
    )
}