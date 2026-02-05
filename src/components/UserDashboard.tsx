import React from 'react'
import HeroSection from './HeroSection'
import CategorySlider from './CategorySlider'
import connectDb from '@/lib/db'
import  { IGrocery } from '@/models/grocery.model'
import GroceryItemCard from './GroceryItemCard'
import { X } from 'lucide-react'
import ClearFilterButton from './ClearFilterButton'


const UserDashboard = async ({groceryList}:{groceryList:IGrocery[]}) => {
      await connectDb()
      const plainGrocery=JSON.parse(JSON.stringify(groceryList))

  return (
    <div>
      <HeroSection/>
      <CategorySlider/>
      <div className='w-[90%] md:w-[80%] mx-auto mt-10'>
        <div className="mb-6 flex items-center justify-between">
  <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center w-full">
    Popular Grocery Items
  </h2>
  <ClearFilterButton />
</div>


        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6' id="products">
          {plainGrocery.map((item:any,index:number)=>(
        <GroceryItemCard key={index} item={item}/>
      ))}
        </div>
      </div>
      
    </div>
  )
}

export default UserDashboard
