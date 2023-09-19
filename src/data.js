import React from 'react';
import Room1 from './assets/rooms/Room1.jpg';
import Room2 from './assets/rooms/Room2.jpg';
import Room3 from './assets/rooms/Room3.jpg';
import {FaParking,} from 'react-icons/fa';
import {LiaCocktailSolid} from 'react-icons/lia';
import {GiFruitBowl} from 'react-icons/gi';
import {RiSafeFill} from 'react-icons/ri';
import {BiSolidDish} from 'react-icons/bi'
import {PiBarbell, PiCoffeeFill, PiBathtub, PiSwimmingPool, PiWifiHigh, PiTelevisionSimple} from 'react-icons/pi';

  export const roomData = [
    {
      id: 1,
      name: 'Classic Room',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
      facilities: [
        { name: 'Wifi', icon: <PiWifiHigh /> },
        { name: 'Coffee & Tea', icon: <PiCoffeeFill /> },
        { name: 'Private Bathroom', icon: <PiBathtub /> },
        { name: 'Parking Space', icon: <FaParking /> },
        { name: 'Swimming Pool', icon: <PiSwimmingPool /> },
        { name: 'Breakfast', icon: <GiFruitBowl /> },
        { name: 'Gym', icon: <PiBarbell /> },
        { name: 'In-Room Safe', icon: <RiSafeFill/> },
        { name: 'Private Bar', icon: <LiaCocktailSolid /> },
        { name: 'Room Service', icon: <BiSolidDish/> },
        { name: 'Flat Screen TV', icon: <PiTelevisionSimple/> },
      ],
      size: 30,
      maxPerson: 2,
      price: 180,
      image: Room1,
    },
    {
        id: 2,
        name: 'Signature Room',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
        facilities: [
          { name: 'Wifi', icon: <PiWifiHigh /> },
          { name: 'Coffee & Tea', icon: <PiCoffeeFill /> },
          { name: 'Private Bathroom', icon: <PiBathtub /> },
          { name: 'Parking Space', icon: <FaParking /> },
          { name: 'Swimming Pool', icon: <PiSwimmingPool /> },
          { name: 'Breakfast', icon: <GiFruitBowl /> },
          { name: 'Gym', icon: <PiBarbell /> },
          { name: 'In-Room Safe', icon: <RiSafeFill/> },
          { name: 'Private Bar', icon: <LiaCocktailSolid /> },
          { name: 'Room Service', icon: <BiSolidDish/> },
          { name: 'Flat Screen TV', icon: <PiTelevisionSimple/> },
        ],
        size: 50,
        maxPerson: 2,
        price: 210,
        image: Room2,
      },
      {
        id: 3,
        name: 'Luxury Room',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
        facilities: [
          { name: 'Wifi', icon: <PiWifiHigh /> },
          { name: 'Coffee & Tea', icon: <PiCoffeeFill /> },
          { name: 'Private Bathroom', icon: <PiBathtub /> },
          { name: 'Parking Space', icon: <FaParking /> },
          { name: 'Swimming Pool', icon: <PiSwimmingPool /> },
          { name: 'Breakfast', icon: <GiFruitBowl /> },
          { name: 'Gym', icon: <PiBarbell /> },
          { name: 'In-Room Safe', icon: <RiSafeFill/> },
          { name: 'Private Bar', icon: <LiaCocktailSolid /> },
          { name: 'Room Service', icon: <BiSolidDish/> },
          { name: 'Flat Screen TV', icon: <PiTelevisionSimple/> },
        ],
        size: 70,
        maxPerson: 4,
        price: 240,
        image: Room1,
      },
      {
        id: 4,
        name: 'Deluxe Room',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
        facilities: [
          { name: 'Wifi', icon: <PiWifiHigh /> },
          { name: 'Coffee & Tea', icon: <PiCoffeeFill /> },
          { name: 'Private Bathroom', icon: <PiBathtub /> },
          { name: 'Parking Space', icon: <FaParking /> },
          { name: 'Swimming Pool', icon: <PiSwimmingPool /> },
          { name: 'Breakfast', icon: <GiFruitBowl /> },
          { name: 'Gym', icon: <PiBarbell /> },
          { name: 'In-Room Safe', icon: <RiSafeFill/> },
          { name: 'Private Bar', icon: <LiaCocktailSolid /> },
          { name: 'Room Service', icon: <BiSolidDish/> },
          { name: 'Flat Screen TV', icon: <PiTelevisionSimple/> },
        ],
        size: 70,
        maxPerson: 4,
        price: 260,
        image: Room3,
      },
      {
        id: 5,
        name: 'Luxury Suite',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
        facilities: [
          { name: 'Wifi', icon: <PiWifiHigh /> },
          { name: 'Coffee & Tea', icon: <PiCoffeeFill /> },
          { name: 'Private Bathroom', icon: <PiBathtub /> },
          { name: 'Parking Space', icon: <FaParking /> },
          { name: 'Swimming Pool', icon: <PiSwimmingPool /> },
          { name: 'Breakfast', icon: <GiFruitBowl /> },
          { name: 'Gym', icon: <PiBarbell /> },
          { name: 'In-Room Safe', icon: <RiSafeFill/> },
          { name: 'Private Bar', icon: <LiaCocktailSolid /> },
          { name: 'Room Service', icon: <BiSolidDish/> },
          { name: 'Flat Screen TV', icon: <PiTelevisionSimple/> },
        ],
        size: 90,
        maxPerson: 6,
        price: 320,
        image: Room1
      },
      {
        id: 6,
        name: 'Deluxe Suite',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
        facilities: [
          { name: 'Wifi', icon: <PiWifiHigh /> },
          { name: 'Coffee & Tea', icon: <PiCoffeeFill /> },
          { name: 'Private Bathroom', icon: <PiBathtub /> },
          { name: 'Parking Space', icon: <FaParking /> },
          { name: 'Swimming Pool', icon: <PiSwimmingPool /> },
          { name: 'Breakfast', icon: <GiFruitBowl /> },
          { name: 'Gym', icon: <PiBarbell /> },
          { name: 'In-Room Safe', icon: <RiSafeFill/> },
          { name: 'Private Bar', icon: <LiaCocktailSolid /> },
          { name: 'Room Service', icon: <BiSolidDish/> },
          { name: 'Flat Screen TV', icon: <PiTelevisionSimple/> },
        ],
        size: 90,
        maxPerson: 8,
        price: 380,
        image: Room2
      },
    ];