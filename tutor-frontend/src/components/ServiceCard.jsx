import { Link } from "react-router-dom";

function ServiceCard({ data }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl flex flex-col justify-end p-6 shadow-md 
                    transition duration-300 hover:scale-102 hover:shadow-xl group"
    >
      <img
        src={data.bgImg}
        className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
        alt={data.title}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-start text-white">
        <div className="flex gap-2 mb-3">
          {data.badges.map((badge, index) => (
            <span
              key={index}
              className="bg-yellow-400 text-black text-xs font-bold px-2.5 py-1 rounded"
            >
              {badge}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2">{data.title}</h3>
        <p className="text-sm text-gray-200 line-clamp-3 mb-5 leading-relaxed">
          {data.desc}
        </p>

        <p>
          <Link
            to={data.path}
            className={`w-40 p-2.5 transition-all duration-200 font-bold ${data.btnStyle}`}
          >
            {data.btnText}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
