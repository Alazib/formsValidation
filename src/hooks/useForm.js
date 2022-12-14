import { useState } from "react"

export function useForm(initialForm, validateForm) {
  const [form, useForm] = useState(initialForm)

  const [errors, setErrors] = useState({})

  const [loading, setLoading] = useState(false)

  const [response, setResponse] = useState(null)

  function handleChange(e) {}

  function handleBlur(e) {}

  function handleSubmit(e) {}

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}
