import Image from "next/image"
import Link from "next/link"
import logo from '@/assets/images/logo.png'

const NavBar = () => {
    return (
        <nav className="flex items-center py-7 px-20 justify-between bg-white">
            <div className="flex items-center gap-8">
                <Image src={logo} alt="focalx logo" className="w-29 h-8" />
                <ul className="flex items-center gap-8 font-light text-mygray">
                    <li><Link href={"/"} > من نحن</Link></li>
                    <li><Link href={"/pricing"} > خطط الاشتراك</Link></li>
                </ul>
            </div>
            <div className="btns flex gap-8 font-bold">
                <button className="bg-myprimary py-2 px-6 rounded border-2 border-myprimary text-white">أنشأ مدونتك الآن</button>
                <button className="border-2 border-myprimary rounded py-2 px-6 text-myprimary">تسجيل دخول</button>
            </div>
        </nav>
    )
}

export default NavBar