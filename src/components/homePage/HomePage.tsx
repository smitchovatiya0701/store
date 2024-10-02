"use client";
import { useState } from "react";
import Container from "../Container";
import AddData from "../addDataForm/AddData";
import Button from "../commoncomponent/button/Button";
import ShownAllUserData from "../tableForAllCategory/ShownAllUserData";

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Add User Data"); // Track which tab is selected

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab); // Update the selected tab state
  };

  return (
    <Container customStyle="max-w-[1440px] pt-10">
      <div className="my-5 flex flex-col gap-5">
        <div className="flex gap-5 items-center border-b border-b-ghostWhite pb-5">
          <Button
            type="button"
            buttonName="Add User Data"
            classname={`${
              selectedTab === "Add User Data" ? "bg-blue-600 text-white" : ""
            }`} // Apply active styles based on the selected tab
            handleClick={() => handleTabChange("Add User Data")}
          />
          <Button
            type="button"
            buttonName="Show All Data"
            classname={`${
              selectedTab === "Show All Data" ? "bg-blue-600 text-white" : ""
            }`} // Apply active styles based on the selected tab
            handleClick={() => handleTabChange("Show All Data")}
          />
        </div>
        <div>
          {selectedTab === "Add User Data" ? <AddData /> : <ShownAllUserData />}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
