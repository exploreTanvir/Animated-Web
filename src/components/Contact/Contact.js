import React, { useState } from 'react'

const Contact = () => {
  const [data,setData]=useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  })
  const submitForm=(e)=>{
    e.preventDefault()
    alert(`My name is ${data.fullName}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.message} and the form is submitted.`)
  }
  const InputEvent=(e)=>{
    const {name,value}=e.target;
    setData((prevData)=>{
      return{
        ...prevData,
        [name]:value,
      }
    })}
  return (
    <>
  <div className='my-5'>
    <h1 className='text-center'>Contact Us</h1>
  </div>
  <div className='container contact'>
    <div className='row'>
      <div className='col-md-10 mol-10 mx-auto'>
     <form onSubmit={submitForm}>
     <div class="mb-3">
  <label for="fullName" class="form-label">Full Name :</label>
  <input type="text" class="form-control" name="fullName" value={data.fullName} onChange={InputEvent}  placeholder="Enter your name....."/>
  <label for="mobile" class="form-label">Mobile :</label>
  <input type="number" class="form-control" id="number" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your number....."/>
  <label for="email" class="form-label">Email address :</label>
  <input type="email" class="form-control" id="email" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your email....."/> 
</div>
<div class="mb-3">
  <label for="message" class="form-label">Message : </label>
  <textarea class="form-control" id="message" rows="3" name="message" value={data.message} onChange={InputEvent} placeholder='Write your message....'></textarea>
</div>
     
<div className='col-12'>
  <button className='btn btn-outline-primary' type='submit'>Submit</button>
</div>
</form>
      </div>
    </div></div></>)}
export default Contact