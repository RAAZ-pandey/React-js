import React, {useState} from "react";

function Bmi(){
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    classifyBMI(bmiValue);
  };

  const classifyBMI = (bmiValue) => {
    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 24.9) setCategory("Normal weight");
    else if (bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return(
    <div className="bmi-cal">
      <h2 >BMI Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
       
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        
      />
      <button
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>
      {bmi && (
        <div >
          <p >BMI: {bmi}</p>
          <p >Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default Bmi;