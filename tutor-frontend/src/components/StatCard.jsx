import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StatCard({ data }) {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-4 gap-3">
      {data.map((item, index) => (
        <li
          key={index}
          className="flex flex-col gap-2 border border-headline rounded-lg mb-3 p-5 transition duration-300 hover:scale-105 hover:shadow-lg hover:border-primary"
        >
          <FontAwesomeIcon icon={item.icon} className="text-primary text-3xl" />
          <p className="font-bold">{item.title}</p>
          <p className="text-headline">{item.desc}</p>
        </li>
      ))}
    </ul>
  );
}

export default StatCard;
