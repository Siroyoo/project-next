import Link from "next/link";


export default function TopNav() {
  return (
      <>
        <div className="top-nav grid grid-cols-4 w-auto h-28 pt-2 col-start-4 col-end-5 text-center text-gray-400" id="top-nav">
        <Link href='/login'>로그인</Link>
        <Link href='/join'>회원가입</Link>
        <Link href='/mypage'>마이페이지</Link>
        <Link href='/info'>공지사항</Link>
        </div>
      </>
  )
}
