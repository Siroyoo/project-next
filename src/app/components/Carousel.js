"use client"

import React from 'react';

export default function Carousel()  {
    const roominfo = [
        {
            title : "room.html"
        }
    ]
    
    const roomdata = [
        {
            image : "image/room/room3.jpg", text : "2인 스텐다드 룸"
        },
        {
            image : "image/room/room2.jpg", text : "4인 스텐다드 룸"
        },
        {
            image : "image/room/room5.jpg", text : "싱글 룸"
        },
        {
            image : "image/room/room4.jpg", text : "더블 룸"
        },
        {
            image : "image/room/room9.jpg", text : "슈페리어 룸"
        },
        {
            image : "image/room/room8.jpg", text : "스위트 룸"
        }
    ]
    

    return (
        <div className="item item-3 p-52 pt-14 pb-14">
            <h2 className="text-5xl border-b-4 border-solid border-teal-900 w-64 pb-1 font-bold text-black">
                객실
            </h2>
            <div className="room-wrap-con flex justify-evenly items-center">
                <div id="prevBtn">
                    <button>
                        이전
                    </button>
                </div>
                <div className=" relative w-[100%] h-[550px] overflow-hidden mt-2 ">
                    <div id="rooms" className=" w-[100%] h-[100%] flex justify-around items-center absolute border border-solid">
                    
                    이미지 텍스트 구역                
                        
                    </div>
                </div>
                <div id="nextBtn">
                    <button>
                        다음
                    </button>
                </div>
            </div>
                

                
        </div>
   

    )
}


