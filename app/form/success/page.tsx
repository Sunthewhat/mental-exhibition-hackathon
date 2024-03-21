"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Success from '@/components/Success'


const SubmitDataSuccessPage = () => {
  const router = useRouter();
  useEffect(() => {
    const formType = localStorage.getItem("form-type");
    const members = localStorage.getItem("members");
    const teamName = localStorage.getItem("team-name");
    const formData = localStorage.getItem("formData");
    if (!formType && !teamName || !members || !formData) {
      localStorage.clear();
      router.replace("/form/detail");
    }
  }, []);
  return (
    <Success />
  )
}

export default SubmitDataSuccessPage