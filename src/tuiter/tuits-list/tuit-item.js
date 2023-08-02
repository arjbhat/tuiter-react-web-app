import React from "react";
import { useDispatch } from 'react-redux'
import { FaCheckCircle, FaComment, FaRetweet, FaHeart, FaInbox } from "react-icons/fa";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { likeTuit, deleteTuit } from "../reducers/tuits-reducer";
import { AiOutlineClose } from "react-icons/ai";

const TuitItem = (
  { tuit = {} }
) => {
  const dispatch = useDispatch();
  const tuitLikeHandler = (id) => {
    dispatch(likeTuit(id));
  }
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  const heartColor = tuit.liked ? "text-danger" : "";
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img width={50} className="float-start rounded-circle" src={`/images/${tuit.image}`} />
        </div>
        <div className="col-10">
          <AiOutlineClose className="float-end"
            onClick={() => deleteTuitHandler(tuit._id)} />
          <div><b>{tuit.userName}</b> <FaCheckCircle className="text-primary" /> {tuit.handle} &middot; {tuit.time}</div>
          <div>{tuit.tuit}</div>
          <div className="pt-2 row">
            <div className="p-0 col-3"><FaComment /> {tuit.replies}</div>
            <div className="p-0 col-3"><FaRetweet /> {tuit.retuits}</div>
            <div className="p-0 col-3" onClick={() => tuitLikeHandler(tuit._id)}> <FaHeart className={`${heartColor}`} /> {tuit.likes}</div>
            <div className="p-0 col-3"><FaArrowUpFromBracket /></div>
            <div></div>
          </div>
        </div>
      </div>
    </li >
  );
};
export default TuitItem;