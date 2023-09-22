import Link from "next/link"


export default function Footer() {
  return (
    <>
      <footer className="w-full h-52 bg-teal-900 flex justify-between items-center pl-20 pr-20 ">
          <div className="f-logo">
              <Link href="/">
                  <img src="image/logo.png" alt="푸터 로고" className="w-48 h-48 object-cover"/>
              </Link>
          </div>
          <div className="flex-col justify-center items-center text-white">
              <p>상호명 : 네스트 호텔 | 대표자 유성민 | 사업자 번호 123-45-551006</p>
              <p>통신판매업 제 2023-서울-1234 호</p>
              <p>고객센터 : 010-0000-0000, project@gmail.com</p>
              <p>주소 : 강원도 어느숲속안 어느 숲속</p>   
              <p>제휴문의 : 070-0707-0707</p>
          </div>
      </footer>
    </>
  )
}
