export default function MenuItem(props) {
  if (props.create) {
    return (
      <li className="bg-hover hover:bg-gray-100 rounded p-2">
        <div className="flex">
          <div className="flex-shrink-0 mr-2">
            <div className="normal-avatar bg-gray-200 w-11 h-11">
              <props.Icon className="text-xl h-8 w-5" />
            </div>
          </div>
          <div className="flex-grow self-center">
            <h3 className="font-semibold text-[17px]">{props.title}</h3>
          </div>
        </div>
      </li>
    );
  } else {
    return (
      <li className="bg-hover hover:bg-gray-100 rounded p-2">
        <div className="flex">
          <div className="flex-shrink-0 mr-2">
            <img src={props.img} className="w-11 h-11" alt="event" />
          </div>
          <div className="flex-grow self-center">
            <h3 className="font-semibold text-[17px]">{props.title}</h3>
            <p className="text-gray-500 leading-4 text-sm">{props.note}</p>
          </div>
        </div>
      </li>
    );
  }
}
