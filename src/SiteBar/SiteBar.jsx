import './SiteBar.css'
import Category from "./Category/Category"
import Colors from "./Colors/Colors"
import Price from "./Price/Price"

function SiteBar() {
  return (
    <>
        <section className="site-bar">
            <Category/>
            <Price/>
            <Colors/>
        </section>

    </>
  )
}

export default SiteBar