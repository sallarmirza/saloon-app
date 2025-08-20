import React, { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";

function Booking(){
  const [form,setForm]=useState({name:'',service:'',date:''})
  const [ok,setOk]=useState(false);

  const onChange=e=>setForm({...form,[e.target.name]:e.target.value});
  const onSubmit=e=>{e.preventDefault(); setOk(true)};
return(
  <>
  <Container>
    <h2>Book Your Appointment</h2>{ok && (<Alert></Alert>)}
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={form.name} onChange={onChange} required></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Service</Form.Label>
        <Form.Select name="service" value={form.service} onChange={onChange} required>
          <option value="">Select</option>
          <option>Haircut</option>
          <option>Beard</option>
          <option>Shave</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" name="date" value={form.date} onChange={onChange} required></Form.Control>
      </Form.Group>
      <button type="submit" variant="success">Book Now</button>
    </Form>
  </Container>
  </>
)
}
export default Booking;