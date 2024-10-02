"use client";
import React, { useState } from "react";
import Button from "../commoncomponent/button/Button";
import CustomerFriend from "./CustomerFriend";
import Friends from "./Friends";
import Relative from "./Relative";
import Sagmate from "./Sagmate";
import Kandoya from "./Kandoya";
import TradersCustomers from "./TradersCustomers";
import Purchers from "./Purchers";
import Salesman from "./Salesman";
import VehicalLabour from "./VehicalLabour";
import ReligiousInstructions from "./ReligiousInstructions";
import General from "./General";
import Other from "./Other";
import { ButtonData } from "../buttonData/buttonData";
import { formatButtonName } from "@/helper/formatButtonName";

const ShownAllUserData = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleClickButton = (buttonName: string) => {
    setClickedButton(buttonName);
  };
  const renderComponent = () => {
    switch (clickedButton) {
      case "CustomerFriend":
        return <CustomerFriend />;
      case "Friends":
        return <Friends />;
      case "Relative":
        return <Relative />;
      case "Sagmate":
        return <Sagmate />;
      case "Kandoya":
        return <Kandoya />;
      case "TradersCustomers":
        return <TradersCustomers />;
      case "Purchers":
        return <Purchers />;
      case "Salesman":
        return <Salesman />;
      case "VehicalLabour":
        return <VehicalLabour />;
      case "ReligiousInstructions":
        return <ReligiousInstructions />;
      case "General":
        return <General />;
      case "Other":
        return <Other />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col gap-6">
      {" "}
      <div className=" flex gap-3 flex-wrap">
        {ButtonData &&
          ButtonData.map((item) => (
            <Button
              key={item?.id}
              type="submit"
              buttonName={item?.ButtonName}
              handleClick={() =>
                handleClickButton(formatButtonName(item?.ButtonName))
              }
            />
          ))}
      </div>
      {clickedButton && (
        <div className="mt-4">
          <div className="mt-4">{renderComponent()}</div>
        </div>
      )}
    </div>
  );
};

export default ShownAllUserData;
