import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const ProjectWorking = () => {
  const [creatinine] = useState(0);
  const [eGFR, setEGFR] = useState(0);
  const [stage, setStage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const ckdStage = calculateCKDStage(creatinine, eGFR);
    setStage(ckdStage);
  };

  const calculateCKDStage = (creatinine, eGFR) => {
    let stage = '';
    if (eGFR >= 90) {
      stage = 'Non-CKD';
      setTreatmentMeasures("Eat healthily, exercise regularly and control your weight These healthy practices are not new and definitely not specific to kidney health. Healthy kidneys like a healthy body");
    } else if (eGFR >= 60 && eGFR < 90) {
      stage = 'Stage 1 CKD';
      setTreatmentMeasures( 'Control blood pressure Control blood glucose levels Quit smoking Exercise regularly Maintain a healthy weight Reduce salt intake Limit alcohol intake');
    } else if (eGFR >= 45 && eGFR < 60) {
      stage = 'Stage 2 CKD';
      setTreatmentMeasures( 'All measures for Stage 1 CKD Manage anemia (low red blood cell count) Control high cholesterol levels');
    } else if (eGFR >= 40 && eGFR < 45) {
      stage = 'Stage 3A CKD';
      setTreatmentMeasures( 'All measures for Stage 2 CKD Control high blood pressure with medication Maintain healthy fluid balance Limit phosphorus intake Limit potassium intake');
    } else if (eGFR >= 30 && eGFR < 40) {
      stage = 'Stage 3B CKD';
      setTreatmentMeasures('All measures for Stage 3A CKD Consider medications to reduce proteinuria (excessive protein in urine) Consult with a kidney specialist (nephrologist)');
    } else if (eGFR >= 15 && eGFR < 30) {
      stage = 'Stage 4 CKD';
      setTreatmentMeasures( 'All measures for Stage 3B CKD Prepare for kidney failure treatment options (dialysis or transplant) Consider referral to a transplant center Discuss advance care planning');
    } else if (eGFR < 15) {
      stage = 'Stage 5 CKD';
      setTreatmentMeasures('All measures for Stage 4 CKD Initiate dialysis or prepare for kidney transplant Consider end-of-life care planning');
    }
    return stage;
  };

  const [treatmentMeasures, setTreatmentMeasures] = useState('');

  return (
    <div style={{backgroundColor:"green", borderStyle:"solid", padding:"5%", marginTop:"10%", marginLeft:"15%", marginRight:"15%",  color:"aliceblue"}}>
      <form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>eGFR:</Form.Label>
        <Form.Control type="number" value={eGFR} onChange={(e) => setEGFR(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </form>
      <p>{stage}</p>
      <p>Treatment Measures: {treatmentMeasures}</p>
    </div>
  );
};

export default ProjectWorking;
