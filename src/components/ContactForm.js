import { useForm } from "../hooks/useForm"

const initialForm = {}

function validationsForm(form) {}

function ContactForm() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm)

  return (
    <div>
      <h2>Fomulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Insert your name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Insert your email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        ></input>
        <input
          type="text"
          name="subject"
          placeholder="subject to discuss"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        ></input>
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Write your comments here"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        <input type="submit" value="Send"></input>
      </form>
    </div>
  )
}

export default ContactForm
