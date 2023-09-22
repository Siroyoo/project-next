import Link from "next/link";


export default function ReservationBar() {
  return (
    <>
        <div className="p-52 pt-12 pb-12">
            <h2 className="text-5xl border-b-4 border-solid border-teal-900 w-64 pb-1 font-bold text-black">
                예약하기
            </h2>
            <form className="reserve-bar mt-5 p-3 h-36 grid grid-cols-7 gap-6 justify-center items-center border-4 border-solid border-teal-900 rounded-2xl">
                <div className="reserve-con inday col-start-1 col-end-3 h-3/4 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-2">체크 인</h3>
                    <input type="date" defaultValue="2023-09-07" className="w-full h-20 text-end text-2xl"/>
                </div>
                <div className="reserve-con outday col-start-3 col-end-5 h-3/4 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-2">체크 아웃</h3>
                    <input type="date" defaultValue="2023-09-10" className="w-full h-20 text-end text-2xl"/>
                </div>
                <div className="reserve-con adult h-3/4 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-2">성인</h3>
                    <input type="number" min="0" max="10" defaultValue="0" className="w-full h-20 text-center text-2xl"/>
                </div>
                <div className="reserve-con child h-3/4 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-2">아이</h3>
                    <input type="number" min="0" max="10" defaultValue="0" className="w-full h-20 text-center text-2xl"/>
                </div>
                <div className="reserve-con reserve-bt h-3/4 flex flex-col justify-end">
                    <Link href="/reserbation" className="flex justify-center items-center bg-teal-900 text-white h-2/4">
                        <button type="submit" className="text-3xl font-bold mb-2 text-center">
                            예약하기
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    </>
  )
}
