export default function Layout({ children , style }) {
    return(
        <div className={`max-w-[1120px] mx-auto ${style} lg:px-24`}>
            {children}        
        </div>
    )
}