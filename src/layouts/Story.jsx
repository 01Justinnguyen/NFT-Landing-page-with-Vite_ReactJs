import React from 'react';
import Button from '../components/Button';

const Story = () => {
  return (
    <section className="mt-[150px]">
      <div className="wrapper flex items-center gap-x-[167px] relative">
        <div>
          <img srcSet="/Story/storyImage.png 2x" alt="" />
        </div>
        <div className="ct-after-story">
          <h1 className="text-[50px] leading-snug font-bold mb-[30px]">NFT’s Story</h1>
          <p className="text-[30px] font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="text-[30px] font-normal mt-[30px] mb-[50px] relative">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <Button className="bg-primaryGradient text-3xl h-[60px] min-w-[250px] font-font1">Learn more</Button>
          <img className="absolute top-[44%] right-[-50px]" src="/star_large.svg" alt="star_large" />
          <img className="absolute top-20 right-[15%]" src="/star_small.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Story;
