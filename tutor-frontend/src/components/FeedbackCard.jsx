import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function FeedbackCard({ data }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-5 bg-white p-5 rounded-xl border-2 border-secondary "
        >
          <div className="flex justify-between">
            <FontAwesomeIcon icon={faHeart} className="text-primary text-xl" />
            <FontAwesomeIcon icon={faQuoteRight} className=" text-xl" />
          </div>
          <p className="italic">{item.desc}</p>
          <div>
            <p className="font-bold">{item.name}</p>
            <p className="text-headline">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedbackCard;
