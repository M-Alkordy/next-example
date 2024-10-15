
import Card from "../Card/Card"

const PricingHero = () => {
    const cardInfo = [
        {
            title: "حساب مجاني",
            subtitle: "للاستخدام الشخصي والمستقلين",
            items: ["تدقيق على المحتوى", "بريد للعروض الخاصة", "إتاحة فرص عمل", "خدمة الدعم السريع للعملاء", "الدعم عبر منصات focal X"],
        },
        {
            title: "حساب مدفوع",
            subtitle: "للشركات الصغيرة والناشئة",
            items: ["نشر بدون تدقيق", "اكتساب مبالغ مالية مقابل النشر", "حسم على البوابات الإعلانية بمعدّل اعلانين شهريّاً", "حسومات على تدريبات X academy بنسبة %20 والدعم عبر منصات focal X", "الحصول على نشرة بريدية سريّة و خاصة"],
            price: " 20.0$ شهريّاً"
        }
    ]
    return (
        <div>
            <h1 className="pt-4 font-bold text-[40px] text-center">الخطة المناسبة لاحتياجاتك</h1>
            <div className="container flex flex-wrap mx-auto justify-center gap-14 my-10">
                {cardInfo.map((element, index) => {
                    return (
                        <Card key={index} title={element.title} subtitle={element.subtitle} items={element.items} price={element?.price} />
                    )
                })}
            </div>
        </div>
    )
}

export default PricingHero