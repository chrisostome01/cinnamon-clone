import MockUp from "../ui/MockUp";

export default function Project() {
    return(
        <>
            <MockUp 
                img={"Mockup_1.webp"} 
                titles={["Product design","Quality Assurance"]} 
                description={`
                Corrily tailors your prices and discounts to the needs of different user
                segments in order to increase your revenue. Cinnamon was tasked with creating a new visual 
                identity for Corrily and incorporating a fresh, and stunning website redesign.
                `}
                bg={`bg-mockup-1`}
            >
                Corrily:  Optimize prices <br></br> to maximize revenue
            </MockUp>

            <MockUp 
                img={"Fiona_Thumbnail.webp"} 
                titles={["PRODUCT DESIGN", "WEB DEVELOPMENT"]} 
                description={`
                    Fiona is a fintech consumer-facing website that enables users to
                    search for financial products, discover them, and receive personalized recommendations.
                `}
                bg={`bg-mockup-2`}
            >
                Fiona: Engage & <br></br> Decide
            </MockUp>

            <MockUp 
                img={"thumbnail_.webp"} 
                titles={["PRODUCT DESIGN", "WEB DEVELOPMENT","QUALITY ASSURANCE"]} 
                description={`
                    Ukulele is the number one ukulele community, where players of any level can find
                    the most complete tabs and chords. Cinnamon offered a complete platform redesign including 
                    expansions and new features, focusing on keeping the user longer on the website.
                `}
                bg={`bg-mockup-3`}
            >
                Ukulele: <br></br> The largest ukule
            </MockUp>          
        </>
    )
}