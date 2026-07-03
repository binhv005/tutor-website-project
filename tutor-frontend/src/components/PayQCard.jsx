import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function PayQCard({ data }) {
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };
  return (
    <div>
      {data.map((item, id) => (
        <div
          key={item.id}
          className=" bg-white border-1 border-headline rounded-lg p-4"
        >
          <h1 className="flex items-center justify-between ">
            <button
              onClick={() => handleToggle(item.id)}
              className="font-bold "
            >
              {item.question}
            </button>
            <FontAwesomeIcon icon={faAngleDown} />
          </h1>
          {openId && (
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
