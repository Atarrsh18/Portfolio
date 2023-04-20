
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


const Project = () => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('male');
  const [eGFR, setEGFR] = useState(null);
  const [serumCreatinine, setSerumCreatinine] = useState(0);
  const [hasCKD, setHasCKD] = useState();

  const calculateEGFR = () => {
    let k = 1;
    let eGFRValue = 175 * (serumCreatinine ** -1.154) * (age ** -0.203) * k * (gender === 'female' ? 0.742 : 1);
    setEGFR(eGFRValue);
    if (eGFRValue < 90) {
      setHasCKD(true);
    }
    else {
      setHasCKD(false);
    }
  };

  return (
    <div style={{backgroundColor:"green", borderStyle:"solid", padding:"5%", marginTop:"10%", marginLeft:"15%", marginRight:"15%", color:"aliceblue"}}>
      <center>
      <h2>CKD Calculator</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Age</Form.Label>
        <Form.Control placeholder="Enter Age" type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail"  id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
      <Form.Label>Gender</Form.Label>
        <Form.Select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail"  id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
      <Form.Label>Serum Creatinine</Form.Label>
        <Form.Control placeholder="0" type="number" id="serumCreatinine" value={serumCreatinine} onChange={(e) => setSerumCreatinine(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={calculateEGFR}>
        Submit
      </Button>
      {eGFR && <p>eGFR: {eGFR}</p>}
      {hasCKD && <p>You have CKD</p>}
    
      </center>
    </div>
  );
};

export default Project;
