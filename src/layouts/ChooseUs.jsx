import React from 'react';

const ChooseUs = () => {
  return (
    <div className="mt-[154px]">
      <div className="relative flex items-center bg-[url('/ChooseUs/ChooseUsBg.png')] h-[528px] w-full bg-cover">
        <img className="absolute h-[536px] left-0 top-0 bottom-0" srcSet="/ChooseUs/chooseUsWoman.png 2x" alt="" />
        <div className="absolute right-[217px] max-w-[541px] font-font1">
          <h3 className="font-normal text-[50px]">Why choose us?</h3>
          <p className="mt-[30px] text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim ultrices isque et quis ctumst. Feugiat amet velit faucibus amet
            <span className="block mt-12">Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
