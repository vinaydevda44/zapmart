import { auth } from '@/auth'
import AdminDashboard from '@/components/AdminDashboard'
import AutoScroll from '@/components/AutoScroll'
import DeliveryBoy from '@/components/DeliveryBoy'
import EditRoleMobile from '@/components/EditRoleMobile'
import Footer from '@/components/Footer'
import GeoUpdater from '@/components/GeoUpdater'
import Nav from '@/components/Nav'
import ResetSearch from '@/components/ResetSearch'
import UserDashboard from '@/components/UserDashboard'
import connectDb from '@/lib/db'
import Grocery, { IGrocery } from '@/models/grocery.model'
import User from '@/models/user.model'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Home(props: {searchParams: Promise<{q?: string;category?: string;}>;}){
  const searchParams=await props.searchParams
  const { q, category } = searchParams;
  
   await connectDb()
      const session=await auth()
      const user=await User.findById(session?.user?.id)
      if(!user){
          redirect("/login")
      }
  
      const inComplete=!user.mobile || !user.role || (!user.mobile && user.role=="user")
      if(inComplete){
          return <EditRoleMobile/>
      }
      const plainUser=JSON.parse(JSON.stringify(user))

     let groceryList: IGrocery[] = [];

if (user.role === "user") {
  if (q && category) {
    groceryList = await Grocery.find({
      category,
      name: { $regex: q, $options: "i" },
    });
  } 
  else if (category) {
    groceryList = await Grocery.find({ category });
  } 
  else if (q) {
    
    groceryList = await Grocery.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
      ],
    });
  } 
  else {
    groceryList = await Grocery.find({});
  }
} 
else {
  groceryList = await Grocery.find({});
}



  return (
    <div>
      <AutoScroll/>
      <ResetSearch/>
      <Nav user={plainUser}/>
      <GeoUpdater userId={plainUser._id}/>
      {user.role=="user"?(
        <UserDashboard groceryList={groceryList}/>
      ):user.role=="admin"?(
        <AdminDashboard/>
      ):<DeliveryBoy/>}
      <Footer/>
    </div>
  );
}
