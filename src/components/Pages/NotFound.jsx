import errorImg from "../../imgs/Error-page.png";
function NotFound() {
  return (
    <div className="mt-32 text-center">
      <img
        src={errorImg}
        className="mx-auto mb-2"
        alt="not found"
        width="150"
      />
      <h1 className="text-lg font-semibold text-gray-400">
        It's Still Developing
      </h1>
    </div>
  );
}

export default NotFound;
