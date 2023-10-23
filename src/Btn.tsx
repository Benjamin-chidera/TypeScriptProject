import React, { useState } from "react";

type BtnProps = {
  hello: string;
  name: string;
  backgroundColor: string;
  textColor: string;
  padding: [number];
  border: string;
  radius: [number];
  children: React.ReactNode;
};



export const Btn = ({
  hello,
  name,
  backgroundColor,
  textColor,
  padding,
  border,
  radius,
  children,
}: BtnProps) => {
  

  return (
    <div>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          padding: `${padding[0]}px`,
          border: border,
          borderRadius: `${radius}px`,
        }}
      >
        {children}
      </button>
      <p>{hello}</p> <p>{name}</p>
    </div>
  );
};
