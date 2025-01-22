"use client"

const PostCard = ({id , title , body}) => {
  return (
    <>
      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
