"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  customStyle?: string;
};

function Container({ children, customStyle }: Props) {
  return (
    <div className={`${customStyle} w-full mx-auto xl:px-20 md:px-10  px-4 `}>
      {children}
    </div>
  );
}

export default Container;
