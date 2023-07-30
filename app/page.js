import Image from 'next/image'
import qr from '../public/qr.png'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white  sm:w-[400px] sm:h-[600px] w-[320px] h-[500px] rounded-2xl'>
        <div className='bg-white mx-5 my-5 sm:h-[350px] flex flex-col gap-5 text-center'>
          <Image src={qr} alt='QR Code' className=' rounded-2xl' />
          <h1 className='text-[25px] font-bold '>
            Improve your front-end
            <br />skills by building projects
          </h1>
          <span className='text-gray-400'>
            Scan the QR code to visit Frontend
            <br />Mentor and take your coding skills to
            <br />the next level
          </span>
        </div>
      </div>
    </div>
  )
}
