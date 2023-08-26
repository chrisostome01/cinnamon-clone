/* eslint-disable @next/next/no-img-element */

export default function BlogCard({ img , title , description, children }) {
    return(
        <div className="hover:text-primary-800 cursor-pointer min-w-352 max-w-[70%]">
            <img className="mb-24 max-h-full max-w-full min-w-full  m-auto" src={`/img/${img}`} alt="Freelance image" />
            <p className="mb-12 uppercase font-mont-bold leading-12 ">
                {title}
            </p>
            <div className="grid gap-12 grid-flow-col items-center mt-16 my-12p " >
                {children}
            </div>
            <div className="text-24 leading-36 font-mont-bold">
                {description}
            </div>
        </div>
    )
}
