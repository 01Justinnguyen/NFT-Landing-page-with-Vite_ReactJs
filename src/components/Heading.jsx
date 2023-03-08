import React from 'react';

const Heading = ({ children, ...props }) => {
  return (
    <div className="mt-[150px] mb-[60px] text-center">
      <div className="main-heading text-[50px] font-medium font-font4 leading-9 mb-5">{props.mainHeading}</div>
      <div className="sub-heading mx-auto max-w-[391px] text-base font-normal font-font1 leading-6">{props.subHeading}</div>
    </div>
  );
};

export default Heading;
