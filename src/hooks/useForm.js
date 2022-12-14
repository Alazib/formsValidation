import { useState } from "react"

export function useForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm)

  const [errors, setErrors] = useState({})

  const [loading, setLoading] = useState(false)

  const [response, setResponse] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  function handleBlur(e) {
    handleChange(e)
    //¿Podría quitar este handleChange?
    setErrors(validateForm(form))
  }

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
