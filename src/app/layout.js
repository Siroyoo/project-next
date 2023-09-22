import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

export const metadata = {
  lang : 'kor',
  charset : 'utf-8',
  keywords : ['호텔', '둥지', '새', '휴식', '스트레스', '아이와'],
  title: 'Next Hotel',
  description: 'Next Hotel 안내 및 예약 사이트',
  
}

export default function RootLayout({ children }) {
  
  return (
    <>
      <html lang="kor">
        <body className="bg-lime-50">
          <div className='box-border'>
            <Header/>
            {children}
            <Footer/>
          </div>
        </body>
      </html>
    </>
  )
}

