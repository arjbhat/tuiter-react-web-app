import React from "react";
import { useDispatch } from 'react-redux'
import { FaCheckCircle, FaComment, FaRetweet, FaInbox } from "react-icons/fa";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { likeTuit, deleteTuit } from "../reducers/tuits-reducer";
import { AiOutlineClose, AiOutlineDislike, AiFillDislike, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { deleteTuitThunk, updateTuitThunk } from "../services/tuits-thunks";

const TuitItem = (
  { tuit = {} }
) => {
  const dispatch = useDispatch();
  const tuitLikeHandler = () => {
    dispatch(updateTuitThunk({
      ...tuit,
      liked: !tuit.liked,
      likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1
    }));
  }
  const tuitDislikeHandler = () => {
    dispatch(updateTuitThunk({
      ...tuit,
      disliked: !tuit.disliked,
      dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1
    }));
  }
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
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
            <div className="p-0 col-2"><FaComment /> {tuit.replies}</div>
            <div className="p-0 col-2"><FaRetweet /> {tuit.retuits}</div>
            <div className="p-0 col-2" onClick={() => tuitLikeHandler(tuit._id)}>
              {
                tuit.liked ? <AiFillHeart className="text-danger" /> : <AiOutlineHeart />
              }
              {tuit.likes}</div>
            <div className="p-0 col-2" onClick={() => tuitDislikeHandler(tuit._id)}>
              {
                tuit.disliked ? <AiFillDislike /> : <AiOutlineDislike />
              }
              {tuit.dislikes}</div>
            <div className="p-0 col-2"><FaArrowUpFromBracket /></div>
          </div>
        </div>
      </div>
    </li >
  );
};
export default TuitItem;