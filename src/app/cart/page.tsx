import { Navbar} from "@/components/Navbar"
import Cart from "@/components/cart"
import Comment from "@/components/comments"
import NewsletterSection from "@/components/newsletter-section"
import ShippingRatesPage from "@/components/Shipping"
export default function Checkout() {
    return (
        <>
        <Navbar/>
        <Cart/>
        <NewsletterSection/>
       <Comment/>
       <ShippingRatesPage/>

        </>
    )
}