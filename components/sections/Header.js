import Layout from "./layouts/Layout";
import Nav from "../ui/Nav";
import Main from "./layouts/Main"

export default function Header() {
    return(
        <div className="bg-ci-dark-500 bg-header mb-160 min-h-min lg:mb-96p">
            <Nav/>
            <Main>
                <Layout>
                    <div className="pt-118 pb-160 lg:pt-0 lg:pb-96">
                        <h1 className="font-mont-heavy text-80 md:!text-40 sm:!leading-58  lg:text-46  lg:leading-54 mb-24 leading-105 text-secondary-200 my-auto">
                            Results focused design &
                            <br className=" hidden sm:!hidden lg:block"></br> {" "}
                            development agency.
                        </h1>
                        <div className="max-w-640 md:!mb-8 text-secondary-300 text-20 leading-32 sm:!leading-30 sm:!text-17.9  font-mont-semibold lg:text-18">
                            Extend your team with our high performing specialists
                            or hire us to shape your product from scratch. Either way, 
                            we{"'"}ll get your product off the ground and build a momentum 
                            for your success.
                        </div>
                    </div>
                </Layout>
            </Main>
        </div>
    )
}