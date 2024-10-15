import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import PricingHero from "@/components/PricingHero/PricingHero"

const Pricing = () => {
  const items : Array<string> = [
    "الشروط والأحكام" , "الخصوصية" , "المدونة" , "عنا" , "مركز المساعدة والدعم"
  ]
  return (
    <>
      <NavBar />
      <PricingHero />
      <Footer items={items} copy={{ content: "جميع الحقوق محفوظة لِ", companyName: "Focal X agency" }} />
    </>
  )
}

export default Pricing