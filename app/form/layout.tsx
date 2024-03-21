/* eslint-disable react-hooks/rules-of-hooks */

"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

type FormLayout  = { 
    children: React.ReactNode;
}
const layout = ({ children }: FormLayout) => {
  const router = useRouter();
  useEffect(() => {
    const formType = localStorage.getItem("form-type");
    const members = localStorage.getItem("members");
    const teamName = localStorage.getItem("team-name");
    if (!formType || !teamName || !members) {
      localStorage.clear();
      router.replace("/form/detail");
    }
  }, []);
  return (
    <div>
    {children}
    </div>
  )
}

export default layout