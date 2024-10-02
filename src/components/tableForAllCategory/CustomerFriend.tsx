import React from "react";

const CustomerFriend = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-figtree text-lg text-lightdarkBlack font-medium leading-5">
        Customer Friend
      </h3>
      <div className=" border border-lightSlatGray rounded-lg">
        <div className="grid grid-cols-3 rounded-lg font-figtree bg-lightWhite sm:grid-cols-6  py-2 md:py-0 bg-lightSlatGray">
          <div className="p-2.5 md:p-5">
            <h5 className="  font-figtree text-sm xl:text-[17px] text-darkBlack  font-semibold uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5  md:p-5">
            <h5 className="font-figtree text-sm xl:text-[17px] text-darkBlack  font-semibold uppercase xsm:text-base truncate">
              Address
            </h5>
          </div>
          <div className=" hidden sm:block p-2.5  md:p-5">
            <h5 className="font-figtree text-sm xl:text-[17px] text-darkBlack  font-semibold uppercase xsm:text-base truncate">
              Number
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFriend;
