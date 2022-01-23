import { createID } from "./helpers";

export const leftSidebarLinks = [
  {
    id: 1,
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png",
    title: "Events",
  },
  {
    id: 2,
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png",
    title: "Find Friends",
  },
  {
    id: 3,
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png",
    title: "Groups",
  },
  {
    id: 4,
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/DOal__ng_AH.png",
    title: "News Feed",
  },
  {
    id: 5,
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png",
    title: "Watch",
  },
  {
    id: 6,
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png",
    title: "Marketplace",
  },
  {
    id: 7,
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png",
    title: "Pages",
  },
  {
    id: 8,
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png",
    title: "Watch",
  },
  {
    id: 9,
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png",
    title: "Marketplace",
  },
  {
    id: 10,
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png",
    title: "Pages",
  },
];

export const leftSidebarGroupLinks = [
  {
    id: 1,
    img: "/react-facebook-clone/imgs/react.jpg",
    title: "Facebook React Group",
    group: true,
  },
  {
    id: 2,
    img: "/react-facebook-clone/imgs/react.jpg",
    title: "Facebook React Group",
    group: true,
  },
  {
    id: 3,
    img: "/react-facebook-clone/imgs/react.jpg",
    title: "Facebook React Group",
    group: true,
  },
  {
    id: 4,
    img: "/react-facebook-clone/imgs/react.jpg",
    title: "Facebook React Group",
    group: true,
  },
  {
    id: 5,
    img: "/react-facebook-clone/imgs/react.jpg",
    title: "Facebook React Group",
    group: true,
  },
  {
    id: 6,
    img: "/react-facebook-clone/imgs/react.jpg",
    title: "Facebook React Group",
    group: true,
  },
  {
    id: 7,
    img: "/react-facebook-clone/imgs/react.jpg",
    title: "Facebook React Group",
    group: true,
  },
  {
    id: 8,
    img: "/react-facebook-clone/imgs/react.jpg",
    title: "Facebook React Group",
    group: true,
  },
];

export const postsData = [
  {
    post_id: 1,
    post_time: "7 jan 2022",
    post_user: "Amr Mohamed",
    post_privacy: "public",
    post_body:
      "My Name is amr mohamed and this is first app by react framework",
    post_imgs: ["imgs/cover.jpg"],
    post_likes: 2,
    post_comments: [
      {
        comment_id: 1,
        comment_time: "8 jan 2022",
        comment_user: "another",
        comment_body: "awsome post!",
        comment_likes: 3,
        comment_post_id: 1,
        comment_replys: [
          {
            reply_id: createID(),
            reply_time: "9 jan 2022",
            reply_user: "parent name",
            reply_body: "thanks man!",
            reply_likes: 2,
            reply_comment_id: 1,
          },
        ],
      },
    ],
  },
];
