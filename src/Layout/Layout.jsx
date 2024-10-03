import Footer from "./Footer"
import Header from "./Header"

const Layout = (props) => {
  return (
    <div className="wrapper">
    <Header />
    {props.children}
    <Footer />
    </div>
  )
}

export default Layout