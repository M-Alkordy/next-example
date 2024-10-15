import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";


export default function Home() {
  const items : Array<string> = [
    "الشروط والأحكام" , "الخصوصية" , "المدونة" , "عنا" , "مركز المساعدة والدعم"
  ]
  return (
    <>
    <NavBar />
    <Hero />
    <Footer items={items} copy={{content : "جميع الحقوق محفوظة لِ" , companyName : "Focal X agency"}} />
    </>
  );
}
