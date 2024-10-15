import Image from "next/image"
import bg from "@/assets/images/price-bg.png"

interface cardProps {
    title: string
    subtitle: string
    items: Array<string>
    price?: string
}
const Card = ({ title, subtitle , items, price }: cardProps) => {
    return (
        <div className="w-[400px] py-9 border-2 rounded-lg border-myprimary relative">
            <h1 className="text-2.5xl font-bold text-center text-myprimary">{title}</h1>
            <h2 className="text-xl font-bold text-center text-[#FFC588] mt-2 mb-6">{subtitle}</h2>
            <ul className="flex flex-col gap-6">
                {items.map((element, index) => {
                    return (
                        <li className="ms-12 text-[#282828] w-[330px]" key={index}>{element}</li>
                    )
                })}
            </ul>
            {(price) ?
                <div className="absolute -top-14 -end-10">
                    <Image src={bg} alt="" />
                    <p className="absolute top-24 end-[82px] -rotate-[30deg] text-white text-2xl font-bold">{price}</p>
                </div>
                :
                ""}
        </div>
    )
}

export default Card