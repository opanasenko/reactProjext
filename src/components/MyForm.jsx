import React, { useState } from "react";
import SocialLink from "./SocialLinks";


const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    setFormData({
      name: "",
      email: "",
      textarea: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__item">
        <input
          placeholder="Youame"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="form__item">
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label className="form__item">
        <textarea
          placeholder="How can i help you?*"
          name="textarea"
          value={formData.textarea}
          onChange={handleChange}
        />
      </label>
      <SocialLink>
        <button
          className="button-text-large btn"
          style={{ display: "inline-block" }}
          type="submit"
        >
          Get in touch
        </button>
      </SocialLink>
    </form>
  );
};

export default MyForm;
