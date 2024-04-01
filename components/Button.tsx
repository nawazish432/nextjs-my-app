import Image from "next/image"
type Buttonprops={
    type:"button"| "submit";
    title:string;
    icon?:string;
    variant: "btn_dark_green"
    full?:"boolean"
  }
const Button = ({type,title,icon,variant,full}:Buttonprops) => {
  return (
    <button className={"flexCentre gap-3 rounded-full border ${variant} ${full && 'w-full'}"} type={type}
    >
     {icon&&<Image src={icon} alt={title} width={30} height={30}/>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
    
  )
}

export default Button
 