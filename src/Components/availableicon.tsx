
import { MdOutlineStar } from "react-icons/md";
import type { Type } from "../type/type";
import { toast } from "react-toastify";

interface AvailableiconProps {
    icons: Type[];
    selectedIcons: string[];
    setSelectedIcons: React.Dispatch<React.SetStateAction<string[]>>;
}


const Availableicon = ({ icons, selectedIcons,
    setSelectedIcons}: AvailableiconProps) => {
    
    
    return (
        <div className="grid grid-cols-3 gap-y-3 gap-x-3 ">
            {icons.map((icon: Type) => (
                
                <div className="card w-80 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className="flex justify-between">
        
        <div className="w-7 h-7"><img src={icon.icon} alt="" /></div>
        <div className="badge badge-soft badge-info">{icon.badge}</div>
    </div>
    <div className="flex justify-between">
      <h2 className="text-[20px] font-bold">{icon.name}</h2>
      
    </div>
    <div><h1 className="mb-4">{icon.description}</h1></div>
    <div className="flex justify-between">
        <div className="badge badge-soft bg-gray-100">{icon.category}</div>
        <h1>{icon.difficulty}</h1>
        <div className="flex justify-between items-center font-bold"><MdOutlineStar/>{icon.rating}</div>
    </div>
    <div className="mt-6">
      <button 
      onClick={() => {
    setSelectedIcons((prev) => [...prev, icon.name]);
    toast.success(`${icon.name} added to Stack!`);
}}
      className={`btn btn-block rounded-xl ${
    selectedIcons.includes(icon.name)
      ? "bg-gray-200 text-gray-500"
      : "bg-black text-white"
  }`}
      disabled={selectedIcons.includes(icon.name)}
      >
        {selectedIcons.includes(icon.name) ? "Selected" : "Add to Stack"}
        </button>
    </div>
  </div>
</div>
            ))}
        </div>
    );
};

export default Availableicon;

