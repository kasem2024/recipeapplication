import React from 'react'

const HeadineCards = () => {
return (
<div className='max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card  */}
        <div className='rounded-xl relative'>
            {/* Overlay  */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out , GOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-3 absolute bottom-2 right-2'>
                Order Now
                </button>
            </div>
            <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
            <div className='rounded-xl relative'>
            {/* Overlay  */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-3 absolute bottom-2 right-2'>
                Order Now
                </button>
            </div>
            <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
            <div className='rounded-xl relative'>
            {/* Overlay  */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black mx-3 absolute bottom-2 right-2'>
                    Order Now
                </button>
            </div>
            <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
</div>
)
}

export default HeadineCards
