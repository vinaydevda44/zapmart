import { Send } from 'lucide-react'
import mongoose from 'mongoose'
import React from 'react'

type props={
    orderId:mongoose.Types.ObjectId
    deliveryBoyId:mongoose.Types.ObjectId
}

const DeliveryChat = ({orderId,deliveryBoyId}:props) => {
  return (
    <div className='bg-white rounded-3xl shadow-lg border p-4 h-[430px] flex flex-col'>
        <div className='flex gap-2 mt-3 border-t pt-3'>
            <input type='text' placeholder='Tpye a Message...'
            className='flex-1 bg-gray-100 px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-green-500'/>
            <button className='bg-green-600 hover:bg-green-700 p-3 rounded-xl text-white'><Send size={18}/></button>
        </div>
      
    </div>
  )
}

export default DeliveryChat
