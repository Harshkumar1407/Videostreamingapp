import React from "react";

const commentData = [
  {
    name: "harsh kumar",
    Text: "Lorean ipsun mdnbsdvhv hdsgsdh",
    replies: [
      {
        name: "harsh kumar",
        Text: "Lorean ipsun mdnbsdvhv hdsgsdh",
        replies: [
            {
              name: "harsh kumar",
              Text: "Lorean ipsun mdnbsdvhv hdsgsdh",
              replies: [
                {
                  name: "harsh kumar",
                  Text: "Lorean ipsun mdnbsdvhv hdsgsdh",
                  replies: [
                    {
                      name: "harsh kumar",
                      Text: "Lorean ipsun mdnbsdvhv hdsgsdh",
                      replies:[],
                    }
                     
                  ],
                },
              ],
            },
          ],
      },
    ],
  },
  {
    name: "harsh kumar",
    Text: "Lorean ipsun mdnbsdvhv hdsgsdh",
    replies: [
      {
        name: "harsh kumar",
        Text: "Lorean ipsun mdnbsdvhv hdsgsdh",
        replies:[],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, Text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-sm my-2">
      <img
        className="w-8  h-8"
        alt="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&usqp=CAU"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{Text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black m-5 ">
      <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
