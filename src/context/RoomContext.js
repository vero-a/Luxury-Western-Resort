import React, {createContext, useEffect, useState} from 'react';
import { roomData } from '../data';

export const RoomContext = createContext();


function RoomProvider({children}) {

  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('Number of Adults');
  const [kids, setKids] = useState('Number of Children');
  const [total, setTotal] =useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setTotal(Number(adults[0])+ Number(kids[0]));
  },[adults, kids]);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);

    const newRooms = roomData.filter(room=>{
      return total <= room.maxPerson
    });
    setTimeout(()=> {
      setRooms(newRooms);
      setLoading(false);
    },1000);
  };

  return (
    <RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids, handleClick, loading}}>
      {children}
    </RoomContext.Provider>
  )
}

export default RoomProvider