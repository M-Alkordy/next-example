interface footerProps {
    items : Array<string>,
    copy : {content : string , companyName : string}
}
const Footer = ({items , copy} : footerProps) => {
  return (
    <footer className="h-[100px] bg-myblack flex flex-col justify-center items-center gap-8 ">
        <ul className="flex text-white gap-12">
            {items.map((element , index) =>{
                return (
                    <li key={index}>{element}</li>
                )
            })}
        </ul>
        <p className="text-white">{copy.content} <span className="text-myprimary">{copy.companyName}</span></p>
    </footer>
  )
}

export default Footer