import React, { FC } from "react";

import "./button.css";

type ButtonProps = {
  theme?: "dark" | "light";
  height?: number;
  width?: number;
  Logo: FC;
  storeName: string;
  title: string;
  url: string;
  className?: string;
  border?: number;
};

const Button: FC<ButtonProps> = ({
  theme = "dark",
  height = 60,
  width = 150,
  border,
  Logo,
  storeName,
  title,
  url,
  className,
}) => {
  return (
    <div
      onClick={() => url && window.open(url, "_blank")}
      style={{
        height: "fit-content",
        width: width,
        borderRadius: border,
      }}
      className={`button-container button-container-${theme} ${className}`}
    >
      <Logo/>
      <div className="button-text-container">
        <span className="button-title">{title}</span>
        <span className="button-store-name">{storeName}</span>
      </div>
    </div>
  );
};

export default Button;