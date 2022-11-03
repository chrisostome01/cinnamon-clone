export default function Button({label , style}) {
    return(
        <div className="relative">
            <button className={`relative overflow-hidden group flex justify-center items-center bg-primary-600 text-16 leading-[1.15] text-white px-8  border-2 border-primary-600 hoverState ${style}`}>
                <div className=" border-none group-hover:w-[120%] group-hover:pt-[120%] pt-[5%] group-hover:shadow-btn-h w-0 h-6 rounded-[50%] transition-all duration-[0.4s] shadow-btn  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute"></div>
                <span className="relative group-hover:text-primary-600">
                    { label }
                </span>
            </button>
        </div>

    )
}