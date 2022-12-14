import { useForm } from "../hooks/useForm"
import "../styles/ContactForm.css"

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
}
function validationsForm(form) {
  let errors = {}

  if (!form.name.trim()) {
    errors.name = "Name is required"
  }

  return errors
}

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
      <h2>CONTACT FORM</h2>
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
        {errors.name && <p>{errors.name}</p>}
        <input
          type="text"
          name="email"
          placeholder="Insert your email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        ></input>
        {errors.email && <p>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject to discuss"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        ></input>
        {errors.subject && <p>{errors.subject}</p>}
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
        {errors.comments && <p>{errors.comments}</p>}
        <input type="submit" value="Send"></input>
      </form>
    </div>
  )
}

export default ContactForm
