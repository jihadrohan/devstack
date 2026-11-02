import { use, useState } from "react";
import type { Type } from "../type/type";
import Availableicon from "./availableicon";
import YourStack from "./YourStackProps";

interface IconsProps{
    iconsPromise : Promise<Type[]>;
}

const Icon = ({ iconsPromise }:IconsProps) => {
    const icons = use(iconsPromise);
    const [selectedIcons, setSelectedIcons] = useState<string[]>([]);
    return (
        <div className="container mx-auto mb-20">
            <div className="mb-6">
                <h1 className="text-[30px] font-bold">Explore the <span className="text-pink-500">Technologies </span></h1>
                <h6>Pick one technology per category to build your ideal stack.</h6>
            </div>
            <div className="flex justify-between">
        <Availableicon icons={icons} selectedIcons={selectedIcons}
                    setSelectedIcons={setSelectedIcons} ></Availableicon>
                    <div className="col-span-1">
                <YourStack
    selectedIcons={selectedIcons}
    icons={icons}
    setSelectedIcons={setSelectedIcons}
/>
            </div>
            </div>
            
        </div>
    );
};

export default Icon;