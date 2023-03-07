import React from 'react';
import Button from '../components/Button';

const collections = [
  ['Collections', 'Volume', 'Floor Price', 'Items'],
  [
    {
      id: 1,
      avatar: '/avt-1.svg',
      name: 'Bored Ape Yacht Club',
      volume: '230.38 ETH',
      subVolume: '+50.20%',
      floor: '12.38 ETH',
      subFloor: '+50.20%',
      items: 138,
    },
    {
      id: 2,
      avatar: '/avt-2.svg',
      name: 'Mutant Ape Yacht Club',
      volume: '138.38 ETH',
      subVolume: '+28.20%',
      floor: '76.38 ETH',
      subFloor: '+70.10%',
      items: 122,
    },
    {
      id: 3,
      avatar: '/avt-3.svg',
      name: 'Otherdeed for Otherside',
      volume: '80.18 ETH',
      subVolume: '+50.20%',
      floor: '91.38 ETH',
      subFloor: '-32.20%',
      items: 192,
    },
    {
      id: 4,
      avatar: '/avt-4.svg',
      name: 'Pudgy Penguins',
      volume: '291.38 ETH',
      subVolume: '-49.20%',
      floor: '61.38 ETH',
      subFloor: '+60.20%',
      items: 22.011,
    },
    {
      id: 5,
      avatar: '/avt-5.svg',
      name: 'Quirkies Originals',
      volume: '81.38 ETH',
      subVolume: '-15.20%',
      floor: '23.12 ETH',
      subFloor: '+50.20%',
      items: 2.321,
    },
    {
      id: 6,
      avatar: '/avt-6.svg',
      name: 'Doodle',
      volume: '340.21 ETH',
      subVolume: '+50.20%',
      floor: '12.38 ETH',
      subFloor: '-21.10%',
      items: 2.721,
    },
    {
      id: 7,
      avatar: '/avt-7.svg',
      name: 'Quirkies Originals',
      volume: '263.82 ETH',
      subVolume: '+42.20%',
      floor: '45.35 ETH',
      subFloor: '-13.13%',
      items: 712,
    },
  ],
];

// collections[1].map((item) => console.log(item.subVolume.charAt(0) == '+' ? 'greenColor' : 'redColor'));

// console.log(collections);

const Collections = () => {
  return (
    <section className="collections mt-[277px] mb-[150px] relative">
      <div className="wrapper ct-after after:left-[-70px] isolate after:top-[-160px]">
        <div class="flex justify-center items-center gap-x-[35px]">
          <div class="h-[2px] w-[146px] bg-lineGradient rotate-[-179.8deg] rounded-sm"></div>
          <div class="text-[50px] font-font1 font-bold leading-61px">Top Collections</div>
          <div class="h-[2px] w-[146px] bg-lineGradient rounded-sm"></div>
        </div>

        <div className="flex gap-x-[52px] mt-[50px]">
          <Button className="bg-secondaryColor h-[60px] min-w-[150px] rounded-3xl">24H</Button>
          <Button className="bg-primaryColor h-[60px] min-w-[150px] rounded-3xl">7D</Button>
          <Button className="bg-primaryColor h-[60px] min-w-[150px] rounded-3xl">All Time</Button>
        </div>

        <div className="collections mt-[65px] text-3xl">
          <div className="flex gap-x-[100px]">
            {collections[0].map((item) => (
              <div key={item} className="heading-collections first:min-w-[566px]  min-w-[180px] first:text-left first:m-0 text-right last:min-w-[100px]">
                {item}
              </div>
            ))}
          </div>
          <div className="border-[1px] mt-[15px] mb-[30px] border-[#505050]"></div>
          {collections[1].map((item) => (
            <div key={item.id} className="mt-[50px] flex items-center">
              <div className="content-collections flex min-w-[500px] mr-[120px] items-center">
                <div className="number font-font3 text-secondaryColor">{item.id}</div>
                <img className="mr-[25px] ml-[30px]" src={`/Collections/${item.avatar}`} alt="avatar" />
                <div className="name min-w-[400px]">{item.name}</div>
                <img src="/Collections/eth.svg" alt="eth-icon" />
              </div>
              <div className="grid grid-cols-3 gap-x-[100px] max-h-[50px]">
                <div className="min-w-[180px] text-right">
                  <div className="volume w-full">{item.volume}</div>
                  <div className={`text-xl pt-3 ${item.subVolume.charAt(0) == '+' ? 'text-greenColor' : 'text-redColor'}`}>{item.subVolume}</div>
                </div>
                <div className="min-w-[100px] text-right">
                  <div className="floor w-full">{item.floor}</div>
                  <div className={`text-xl pt-3 text-${item.subFloor.charAt(0) == '+' ? 'greenColor' : 'redColor'}`}>{item.subFloor}</div>
                </div>
                <div className="item max-w-[100px] text-right">{item.items}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
