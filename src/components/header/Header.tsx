import React from "react";
import Container from "../Container";

const Header = () => {
  return (
    <div className=" bg-mistGray ">
      <Container customStyle="max-w-[1440px] ">
        <div className="py-12 w-full text-center font-figtree text-[30px] sm:text-5xl text-Grayish font-medium leading-8  ">
          General Ranking Chart
        </div>
      </Container>
    </div>
  );
};

export default Header;
