import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DetailServiceCard({ data }) {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {data.map((item) => (
        <div className="p-5 " key={item.id}>
          <div
            className={`flex flex-col gap-3 border-l-4 rounded ${item.border_style} shadow-lg transition duration-300 hover:scale-105 px-5 py-10`}
          >
            <div className="flex items-center justify-between ">
              <FontAwesomeIcon
                icon={item.icon}
                className={`${item.icon_style} ${item.icon_bg_style} p-2 rounded-lg`}
              />
              <p className="font-bold">{item.tutor}</p>
            </div>
            <h1 className="text-2xl font-bold">{item.level}</h1>
            <p className="text-headline">{item.desc}</p>
            <h2 className="font-bold">{item.aim}</h2>

            {item.training.map((desc) => (
              <div key={desc.text} className="flex gap-4 items-center">
                <FontAwesomeIcon icon={faCheck} className="text-tertiary" />
                <p>{desc.text}</p>
              </div>
            ))}

            <h2 className="font-bold">{item.detail}</h2>
            <p className="text-headline">{item.detail_desc}</p>
            <Link
              to="/parents"
              className="text-white font-bold text-center bg-primary rounded-lg p-2"
            >
              Đăng Ký Tìm Gia Sư Ngay
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailServiceCard;
