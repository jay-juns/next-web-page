import Navbar from "components/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                {children}
            </div>
        </>
    )
}

export default Layout;