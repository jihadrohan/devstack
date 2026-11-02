
import { MdClose } from "react-icons/md";
import type { Type } from "../type/type";

interface YourStackProps {
    selectedIcons: string[];
    icons: Type[];
    setSelectedIcons: React.Dispatch<React.SetStateAction<string[]>>;
}

const YourStack = ({
    selectedIcons,
    icons,
    setSelectedIcons
}: YourStackProps) => {
    const removeIcon = (name: string) => {
        setSelectedIcons((prev) =>
            prev.filter((item) => item !== name)
        );
    };
    const removeAll = () => {
        setSelectedIcons([]);
    };
    return (
        <div className="card bg-base-100 w-125 shadow-sm rounded-2xl">
            <div className="card-body">
                <h2 className="text-xl font-bold">
                    Your Stack
                </h2>

                <p className="text-sm text-gray-400">
                    {selectedIcons.length} Technology Selected
                </p>
                <div className="mt-4 space-y-3">

                    {selectedIcons.length === 0 ? (
                        <div className="border border-dashed border-gray-300 rounded-xl p-6">
                            <p className="text-center text-sm text-gray-400">
                                Your stack is empty.
                            </p>
                        </div>
                    ) : (
                        selectedIcons.map((name) => {

                            const technology = icons.find(
                                (icon) => icon.name === name
                            );

                            if (!technology) return null;

                            return (
                                <div
                                    key={name}
                                    className="flex items-center justify-between border border-gray-200 rounded-xl p-4"
                                >
                                    <div className="flex items-center gap-4">

                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="w-10 h-10 object-contain"
                                        />

                                        <div>
                                            <h3 className="font-bold text-lg">
                                                {technology.name}
                                            </h3>

                                            <p className="text-sm text-gray-400">
                                                {technology.category}
                                            </p>
                                        </div>

                                    </div>
                                    <button
                                        onClick={() => removeIcon(name)}
                                        className="btn btn-ghost btn-sm text-gray-400"
                                    >
                                        <MdClose size={24} />
                                    </button>

                                </div>
                            );
                        })
                    )}

                </div>
                {selectedIcons.length > 0 && (
                    <button
                        onClick={removeAll}
                        className="btn btn-outline btn-block mt-6 rounded-xl text-red-500 border-red-200"
                    >
                        Remove All
                    </button>
                )}

            </div>
        </div>
    );
};

export default YourStack;
