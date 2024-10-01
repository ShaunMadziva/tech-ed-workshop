export default function CommentPage({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Post: {params.id}, comment: {params.commentId}</h1>
    </div>
  );
}
