import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "icon";
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  children,
}) => {
  let buttonClasses = "";

  switch (variant) {
    case "primary":
      buttonClasses =
        "flex h-6 w-max items-center rounded-full bg-green-600 px-2 py-1 text-sm font-medium text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-400";
      break;
    case "secondary":
      buttonClasses =
        "flex h-6 w-max items-center rounded-full border border-green-600 px-2 py-1 text-sm font-medium text-green-600 bg-white hover:bg-custom-green-hover active:bg-custom-green-pressed disabled:border-gray-400 disabled:bg-inherit disabled:text-gray-400";
      break;
    case "icon":
      buttonClasses =
        "flex h-6 items-center justify-center gap-2 rounded-full bg-green-600 px-2 py-1 text-center text-sm font-medium text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-400";
      break;
    default:
      buttonClasses =
        "flex h-6 w-max items-center rounded-full bg-green-600 px-2 py-1 text-sm font-medium text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-400";
  }

  return (
    <button type="button" className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};
