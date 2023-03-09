import React from 'react';

const footerElements = [
  {
    id: 1,
    heading: 'Marketplace',
    subHeading: ['Explore', 'NFTs', 'Collectibles', 'Virtuallyreally'],
  },
  {
    id: 2,
    heading: 'Company',
    subHeading: ['About Us', 'Support', 'Careers', 'Contact us'],
  },
  {
    id: 3,
    heading: 'Resourses',
    subHeading: ['Partners', 'Blogs', 'Help Center', 'Live Action'],
  },
];

const Footer = () => {
  return (
    <div className="footer relative">
      <div className="pt-[140px] bg-cover w-full bg-no-repeat bg-[url('/footerBg.png')] h-[952px]">
        <div className="footer-heading text-[100px] font-font1 font-normal text-center">NFT Marketplace</div>

        <div className="footer-content grid grid-cols-[436px_187px_187px_187px] text-center px-[150px] pt-[105px] gap-x-[202px]">
          <div>
            <img src="/logo.png" alt="" />
          </div>
          {footerElements.map((item) => (
            <div key={item.id}>
              <h2 className="heading font-font1 text-[30px] mb-[50px]">{item.heading}</h2>
              {item.subHeading.map((sub) => (
                <div key={sub} className="mb-[27px]">
                  <a href="#" className="font-font1 text-xl">
                    {sub}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="text-left flex flex-col absolute right-[216px] bottom-[100px]">
          <h2 className="heading font-font1 text-right text-[30px] mb-[28px] font-bold">Follow Us</h2>
          <div className="flex gap-x-[20px]">
            <div className="w-[50px] h-[50px] rounded-full bg-stepGradient"></div>
            <div className="w-[50px] h-[50px] rounded-full bg-stepColor"></div>
            <div className="w-[50px] h-[50px] rounded-full bg-stepColor"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
