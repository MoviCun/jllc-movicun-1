import React, { useState } from 'react';

const Ayuda = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <div className='notices'>
      
    </div>
  );
}

export default Ayuda;
