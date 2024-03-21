"use client"
import React, {useEffect, useState} from 'react'
import FormProposal from '@/components/FormProposal';

const FormProposalPage = () => {
  const [formType, setFormType] = useState<string | null>(null);
  useEffect(() => {
    const getFormType = localStorage.getItem("form-type") as string;
    setFormType(getFormType || '');     
  }, []);

  return (
    <>
    {formType === "exhibition" ? <FormProposal /> : "Error"}
    </>
  )
}

export default FormProposalPage