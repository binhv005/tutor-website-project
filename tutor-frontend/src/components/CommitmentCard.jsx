import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CommitmentCard(props) {
  return (
    <div
      className={`p-8 rounded-xl border border-headline/10 bg-white hover:shadow-lg hover:-translate-y-1 transition-all border-t-4 ${props.borderTopColor}`}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 ${props.iconBg}`}
      >
        <FontAwesomeIcon
          icon={props.icon}
          className={`${props.iconColor}`}
        ></FontAwesomeIcon>
      </div>
      <h3 className="text-xl font-bold text-headline mb-3">{props.title}</h3>
      <p className="text-sm text-headline/80">{props.description}</p>
    </div>
  );
}
