import React from "react";
import { twMerge } from "tailwind-merge";

const TopicMainBox = ({ title, valueDescription, value, icon, color }) => {
  const colorsMap = {
    'green': "text-green-600",
    'red': "text-red-600",
    'cyan': "text-cyan-600",
  }

  return (
    <div className="border-2 shadow-sm border-gray-400/30 rounded-lg p-7 flex flex-col gap-3 duration-500 hover:scale-[99%]">
      <div className="flex justify-start items-center gap-1">
        {React.cloneElement(icon, { className: "text-5xl text-gray-400" })}
        <h2 className="text-3xl font-semibold text-gray-600">{title}</h2>
      </div>
      <div className="flex justify-start items-center gap-5 pl-4">
        <h4 className="text-xl font-semibold text-gray-600">
          {valueDescription || "asd"}:
        </h4>
        <h3 className={twMerge("text-2xl font-bold hover:underline", colorsMap[color])}>R$ {value}</h3>
      </div>
    </div>
  );
};

export default TopicMainBox;