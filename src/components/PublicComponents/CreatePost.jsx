import { RiLiveFill } from "react-icons/ri";
import { IoMdImages } from "react-icons/io";
import { CgSmileMouthOpen } from "react-icons/cg";
import { useContext, useRef, useState } from "react";
import { createID, truncate } from "../../helpers";
import { PostContext } from "../../context/Postcontext";
export default function CreatePost() {
  const { addPost } = useContext(PostContext);
  const imgInput = useRef();
  const postBodyInput = useRef();
  const [postimg, setPostImg] = useState([]);
  const [postText, setPostText] = useState("");

  const handleBlurPostBody = (e) =>
    !postText.trim() && e.target.setAttribute("rows", "1");

  const handleImgInput = (e) => {
    // Check if there is files in choose or not
    if (e.target.files) {
      // Select files array
      let { files } = e.target;
      // Check if user choose already images
      if (files.length) {
        let fileReader;
        // Loop on these images
        [...files].forEach((file) => {
          fileReader = new FileReader();
          fileReader.onload = (readerEvent) => {
            // Check if these images uploaded already or choiced or not
            if (!postimg.includes(readerEvent.target.result)) {
              setPostImg((prev) => {
                // Update The State
                return [
                  ...prev,
                  {
                    id: file.name + createID() + file.lastModified,
                    src: readerEvent.target.result,
                  },
                ];
              });
            }
          };
          // Read Image as URL
          fileReader.readAsDataURL(file);
        });
      }
    }
  };
  const handleRemoveReviewImg = (imgID) => {
    setPostImg((prev) => {
      prev = prev.filter((prevImg) => prevImg.id !== imgID);
      return [...prev];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let submitedData = {
      post_id: createID(),
      post_time: new Date(),
      post_user: "Amr Mohamed",
      post_privacy: e.target.private.checked ? "private" : "public",
      post_body: postText.trim(),
      post_imgs: postimg.map((img) => img.src),
      post_likes: 0,
      post_comments: [],
    };

    addPost(submitedData);

    setPostText("");
    setPostImg([]);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex flex-col items-center sm:items-start sm:flex-row">
        <img
          src="imgs/avatar.jpg"
          className="img-avatar w-12 h-12 mr-2 maxsm:mb-2"
          alt="img profile user"
        />

        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <textarea
              ref={postBodyInput}
              className="bg-gray-100 rounded-[25px] focus:rounded border-0 w-full resize-y  focus:ring-0  focus:outline-none p-2 min-h-[48px] hide-scroll-style"
              placeholder={`What's on your mind, ${truncate(
                "Amr mohamed",
                0
              )} ?`}
              rows="1"
              name="post_body"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              onFocus={(e) => e.target.setAttribute("rows", "5")}
              onBlur={handleBlurPostBody}
            />

            <input
              type="file"
              name="postimg[]"
              multiple
              ref={imgInput}
              hidden
              onChange={handleImgInput}
              accept="image/*"
            />

            {postimg.length > 0 && (
              <>
                <hr className="mb-2 border-gray-200" />
                <ul className="grid xs:grid-cols-3 grid-cols-2 gap-2">
                  {postimg.map((img) => (
                    <ImgWithRemove
                      img={img}
                      key={createID()}
                      handleRemoveReviewImg={handleRemoveReviewImg}
                    />
                  ))}
                </ul>
                <hr className="mt-2 border-gray-200" />
              </>
            )}

            <label className="private-radio my-1 flex items-center float-right">
              <span className="mr-1 text-gray-400">Only Me</span>
              <input
                type="checkbox"
                name="private"
                className="appearance-none"
              />
              <span className="w-8 h-4 rounded-full overflow-hidden bg-gray-100 inline-block cursor-pointer before:bg-primary after:rounded-circle before:rounded-r-full  after:bg-gray-300  relative radio-customed"></span>
            </label>

            {(postimg.length > 0 || postText.trim()) && (
              <button
                type="submit"
                className="block w-full py-1 bg-primary mt-2 text-white rounded"
              >
                Post
              </button>
            )}
          </form>
        </div>
      </div>

      <hr className="mt-2 mb-4 border-gray-300" />

      <ul className="flex">
        <AttachItem
          Icon={{ icon: RiLiveFill, color: "text-red-500" }}
          title={"Live Video"}
        />
        <AttachItem
          handleClick={() => imgInput.current.click()}
          Icon={{ icon: IoMdImages, color: "text-green-500" }}
          title={"Photo/Video"}
        />
        <AttachItem
          Icon={{ icon: CgSmileMouthOpen, color: "text-yellow-300" }}
          title={"Feeling/Activity"}
        />
      </ul>
    </div>
  );
}

export function AttachItem(props) {
  return (
    <li
      onClick={props.handleClick && props.handleClick}
      className="flex justify-center items-center flex-auto bg-hover group hover:bg-gray-100 rounded py-2 px-4 overflow-hidden select-none"
    >
      <props.Icon.icon
        className={
          "text-2xl flex-shrink-0 group-active:scale-110 duration-100 " +
          props.Icon.color
        }
      />
      <span className="ml-2 text-md font-medium text-gray-500 maxsm:hidden truncate">
        {props.title}
      </span>
    </li>
  );
}

export function ImgWithRemove(props) {
  return (
    <li
      className="relative h-24 w-full cursor-pointer group shadow"
      onClick={() => props.handleRemoveReviewImg(props.img.id)}
    >
      <img
        src={props.img.src}
        alt="post"
        className="object-cover h-full w-full group-hover:opacity-25"
        title="click to remove"
      />
      <span className="bg-red-500 w-5 h-5 text-sm text-center rounded-circle text-white absolute top-2 left-2 scale-0 group-hover:scale-100 duration-200">
        X
      </span>
    </li>
  );
}
