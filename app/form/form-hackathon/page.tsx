"use client"
import React, {useEffect, useState} from 'react'
import FormExhibition from '@/components/FormExhibition'
import FormHackathon from '@/components/FormHackathon'

const FormExhibitionPage = () => {
  const [formType, setFormType] = useState<string | null>(null);
  useEffect(() => {
    const getFormType = localStorage.getItem("form-type") as string;
    setFormType(getFormType || '');     
  }, []);
  return (
    <>
    {formType !== "exhibition" ? <FormHackathon /> : <FormExhibition />}
    </>
  )
}

export default FormExhibitionPage