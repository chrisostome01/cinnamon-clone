export default function FooterCard({ title, rowOne , rowTwo, rowThree}) {
    return(
        <div className="mt-30 mr-40 md:mr-0">
            <div className="text-secondary-30 font-mont-bold text-16 min-w-full">{title}</div>
            <div className="text-secondary-50 leading-24 text-14">{rowOne}</div>
            <div className="text-secondary-50 leading-24 text-14">{rowTwo}</div>

            {
                rowThree ? <div className="text-secondary-50 leading-24 text-14">{rowThree}</div> : <></>
            }
            
        </div>
    )
}