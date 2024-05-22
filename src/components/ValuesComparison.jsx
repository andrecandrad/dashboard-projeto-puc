import React from "react";
import { twMerge } from "tailwind-merge";

// const test = "bg-green-600/60 w-11/12"

const ValuesComparison = ({ values, color }) => {
  const colorsRef = ["text-green-800", "text-red-800", "text-cyan-800"];

  function getBarWidth(valId) {
    switch (valId) {
      case "maxValue":
        return "w-11/12";

      case "avgValue":
        return "w-8/12";

      case "minValue":
        return "w-6/12";

      case "default":
        return "";
    }
  }

  function getBarBg() {
    switch (color) {
      case "green":
        return "bg-green-600/60";

      case "red":
        return "bg-red-600/60";

      case "cyan":
        return "bg-cyan-600/60";

      case "default":
        return "";
    }
  }

  function getTextColor() {
    switch (color) {
      case "green":
        return "text-green-800";

      case "red":
        return "text-red-800";

      case "cyan":
        return "text-cyan-800";

      case "default":
        return "";
    }
  }

  function getComponentLabel(valueId) {
    switch (valueId) {
      case "maxValue":
        return "Valor máximo";

      case "avgValue":
        return "Valor médio";

      case "minValue":
        return "Valor mínimo";

      case "default":
        return "";
    }
  }

  return (
    <div className="flex flex-col text-lg gap-2 mt-7">
      {values.map((val) => {
        if (!val.value) return;
        const name = getComponentLabel(val.id);
        return (
          <div
            className={twMerge(
              "flex justify-between px-4 py-1 rounded-lg min-2",
              getBarBg(),
              getBarWidth(val.id)
            )}
            key={val.id}
          >
            <p className={twMerge("font-semibold", getTextColor())}>{name}</p>
            <p
              className={twMerge("font-semibold", getTextColor())}
            >{`R$ ${val.value}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ValuesComparison;
