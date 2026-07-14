import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function PayQCard({ data }) {
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className="grid grid-cols-1 gap-3 ">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-headline rounded-lg p-4"
        >
          <button
            onClick={() => handleToggle(item.id)}
            className="font-bold cursor-pointer flex items-center justify-between w-full"
          >
            <span>{item.question}</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>

          {openId === item.id && (
            <div>
              <hr className="my-2" />
              <p className="text-headline "> {item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PayQCard;
