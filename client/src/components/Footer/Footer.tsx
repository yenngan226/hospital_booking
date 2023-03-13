import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-200 py-16'>
      <div className='container'>
        <div className='grid grid-cols-4'>
          <div className='col-span-2'>
            <h3 className='font-semibold'>Công ty Cổ phần Công nghệ BookingCare </h3>
            <p className='mt-3'>Trung Kính, Cầu Giấy, Hà Nội </p>
            <p className='mt-3'>ĐKKD số: 123456789. Sở KHĐT Hà Nội cấp ngày 16/11/2015 </p>
          </div>
          <div className='col-span-1'>
            <ul>
              <li>
                <p className='hover:text- cursor-pointer text-blue-400 hover:underline'>
                  Liên hệ hợp tác
                </p>
              </li>
              <li>
                <p className='mt-3 cursor-pointer text-blue-400 hover:underline'>Tuyển dụng</p>
              </li>
              <li>
                <p className='mt-3 cursor-pointer text-blue-400 hover:underline'>
                  Câu hỏi thường gặp
                </p>
              </li>
              <li>
                <p className='mt-3 cursor-pointer text-blue-400 hover:underline'>
                  Quy chế hoạt động
                </p>
              </li>
            </ul>
          </div>
          <div className='col-span-1'>
            <div>
              <p className='font-semibold'>Trụ sở tại Hà Nội</p>
              <p>Trung Kính, Cầu Giấy, Hà Nội</p>
            </div>
            <div className='mt-5'>
              <p className='font-semibold'>Trụ sở tại TP Hồ Chí Minh</p>
              <p>Đường Hai Bà Trưng, Quận 3, TPHCM</p>
            </div>
            <div className='mt-5'>
              <p className='font-semibold'>Hỗ trợ khách hàng</p>
              <p>cskh@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
