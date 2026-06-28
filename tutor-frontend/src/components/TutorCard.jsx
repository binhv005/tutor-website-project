import { useState } from "react";
function TutorCard({ name, address, subject, grade }) {
  const [isApply, setIsApply] = useState(false);
  const handleClick = () => {
    setIsApply(!isApply);
  };
  return (
    <div>
      <h2>Danh sach lop can gia su</h2>
      <p>Name: {name}</p>
      <p>
        Subject: {subject} - {grade}
      </p>
      <p>Address: {address}</p>
      <button onClick={handleClick}>
        {isApply === true ? "Applied" : "Apply"}
      </button>
      <br />
    </div>
  );
}

export default TutorCard;
