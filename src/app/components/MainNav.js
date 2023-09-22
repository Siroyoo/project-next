import Link from 'next/link'


export default function MainNav() {
  return (
    <>
        <div className="main-nav grid grid-cols-5 col-start-1 col-end-5 h-24 gap-1 ">
            <div className="nav pl-3 flex justify-center items-center text-xl text-white">
                <Link href='/about'>호텔소개</Link>     
            </div>
            <div className="nav pl-3 flex justify-center items-center text-xl text-white">
                <Link href='/room'>객실</Link> 
            </div>
            <div className="nav pl-3 flex justify-center items-center text-xl text-white">
                <Link href='/activity'>시설 및 체험</Link> 
            </div>
            <div className="nav pl-3 flex justify-center items-center text-xl text-white">
                <Link href='/reservation'>예약하기</Link> 
            </div>
            <div className="nav pl-3 flex justify-center items-center text-xl text-white">
                <Link href='/checkReservation'>예약확인</Link> 
            </div>
        </div>
    </>
  )
}

