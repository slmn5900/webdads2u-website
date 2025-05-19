import React from 'react'
import { Metadata } from 'next';
import About from "./About"
export const metadata = {
    title: 'Web Design Company In Chennai | Best Website Designers In Chennai',
    description: "User page contains the details of the data",
    keywords: 'user profile, user data, personal information, account details'
  };
  
const page = () => {
  return (
    <>
    <About></About>
    </>
  )
}

export default page