import React from 'react';
import {useTranslation} from "react-i18next";
import {MdOutlinePeopleAlt} from "react-icons/md";
import {TbBed, TbBuilding, TbResize} from "react-icons/tb";
import {FaBath} from "react-icons/fa";

function Rooms() {

    const rooms = [
        {
            id:1,
            image:"images/room-1.jpg",
            features:{
                name:"Room 1",
                capacity:"2 Adult 1 Kid",
                size:"30 m²",
                floor:"First Floor",
                bed:"2 single bed",
                extra:"Bathroom and toilet"
            }
        },
        {
            id:2,
            image:"images/room-1.jpg",
            features:{
                name:"Room 2",
                capacity:"2 Adult 2 Kid",
                size:"30 m²",
                floor:"Second Floor",
                bed:"2 single bed",
                extra:"Bathroom and toilet"
            }
        },
        {
            id:3,
            image:"images/room-2.png",
            features:{
                name:"Room 3",
                capacity:"3 Adult 2 Kid",
                size:"30 m²",
                floor:"Third Floor",
                bed:"1 double and 1 single bed",
                extra:"Bathroom and toilet"
            }
        },
        {
            id:3,
            image:"images/room-2.png",
            features:{
                name:"Room 4",
                capacity:"3 Adult 3 Kid",
                size:"60 m²",
                floor:"Fourth Floor",
                bed:"1 double and 1 single bed",
                extra:"Bathroom and toilet"
            }
        },
    ]

    const {t} = useTranslation();

    return (
        <div className="w-full h-[91vh] ">
            <div className="w-full text-center flex items-center flex-col text-3xl font-bold pt-[2vh]">
                {t("home.rooms.title")}
            </div>
            <div className="w-full h-[60vh] p-[2vw] grid grid-cols-4 gap-[2vw]">
                {rooms.map((room,index)=> (
                    <div className="room h-full flex flex-col  shadow-md" key={index}>
                        <div className="image h-[24.5vh]">
                            <img src={room.image} className="w-full h-full "/>
                        </div>
                        <div className="h-[34.5vh] w-full bg-white flex flex-col items-center p-[1vh]">
                                <div className="title text-2xl font-medium h-[4.5vh]">{room.features.name}</div>
                                <div className="flex flex-col h-[30vh] w-full">
                                    <div className="flex flex-row items-center justify-between w-full h-[4.5vh]">
                                        <div className="flex-1 flex justify-start">
                                            <MdOutlinePeopleAlt/>
                                        </div>
                                        <div className="flex-[6]">
                                            {room.features.capacity}
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full h-[4.5vh]">
                                        <div className="flex-1 flex justify-start">
                                            <TbResize />
                                        </div>
                                        <div className="flex-[6]">
                                            {room.features.size}
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full h-[4.5vh]">
                                        <div className="flex-1 flex justify-start">
                                            <TbBuilding />
                                        </div>
                                        <div className="flex-[6]">
                                            {room.features.floor}
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full h-[4.5vh]">
                                        <div className="flex-1 flex justify-start">
                                            <TbBed />
                                        </div>
                                        <div className="flex-[6]">
                                            {room.features.bed}
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full h-[4.5vh]">
                                        <div className="flex-1 flex justify-start">
                                            <FaBath />
                                        </div>
                                        <div className="flex-[6]">
                                            {room.features.extra}
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Rooms;