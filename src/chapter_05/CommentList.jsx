import Comment from "./Comment";

const comments = [
  {
    name: "서진",
    comment: "안녕하세요.",
  },
  {
    name: "서진2",
    comment: "안녕하세요.2",
  },
  {
    name: "서진3",
    comment: "안녕하세요.3",
  },
];

function CommentList(props) {
  return(
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;