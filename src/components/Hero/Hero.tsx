import bg from '@/assets/images/hero-bg.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="h-[calc(100vh-200px)] bg-[#F9DCA2] px-20 justify-center gap-14 text-xl flex items-center">
            <div className='flex flex-col'>
                <p className="max-w-[506px] font-medium">في  مدونتنا  نسعى لنشر قصص وتجارب رواد الأعمال ومقدمي الخدمات الاحترافية.
                    حيث نلقي الضوء على رحلاتهم وتحدياتهم ونجاحاتهم و نهدف إلى توفير مصدر إلهام وتشجيع للقراء من خلال مشاركة قصص ناجحة. ابدأ رحلتك معنا وساهم في توسيع مجتمعنا </p>
                <div className="btns flex gap-8 mt-14">
                    <button className="bg-myprimary py-2 px-6 rounded border-2 border-myprimary text-white">زيارة الموقع</button>
                    <button className="border-2 border-myprimary rounded py-2 px-6 text-myprimary">تحميل التطبيق</button>
                </div>
            </div>
            <Image src={bg} alt='focalx blog header' className='h-full max-w-[629px] object-contain' />
        </div>
    )
}

export default Hero