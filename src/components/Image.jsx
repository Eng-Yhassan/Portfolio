 
import image from "../../public/yaa.jpg"
 
 export default function Image() {
   return (
     <div className="pt-4">
        <img className="w-[220px] h-[220px] rounded-[50%] md:mx-0 sm:mx-0 mx-auto" src={image} alt="" />
     </div>
   )
 }
 