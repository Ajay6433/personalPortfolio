import React from 'react'

const page = () => {
  return (
    <div className='w-full h-[450px] flex items-center justify-center p-4 md:p-8'>
        <div className='text-center'>
            <h2 className='font-bold text-[24px] md:text-[36px] text-[#1E0E62]'>For any questions/hiring please mail at:</h2>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
              <a
                href="mailto:Ajaykhan6433@gmail.com"
                className="hover:underline"
              >
                Ajaykhan6433@gmail.com
              </a>
            </p>
        </div>
    </div>
  )
}

export default page