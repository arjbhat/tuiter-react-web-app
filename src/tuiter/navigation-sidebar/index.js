import React from "react";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUserAlt, FaEllipsisH } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    [<FaHome />, "home"],
    [<FaHashtag />, "explore"],
    [<FaBell />, "notifications"],
    [<FaEnvelope />, "messages"],
    [<FaBookmark />, "bookmarks"],
    [<FaListAlt />, "lists"],
    [<FaUserAlt />, "profile"],
    [<FaEllipsisH />, "more"]];
  return (
    <div className="list-group">
      {links.map((link) =>
        <Link to={`/tuiter/${link[1]}`} className={`list-group-item text-capitalize ${active === link[1] ? "active" : ""}`}>
          {link[0]}
          <span className="d-none d-xl-inline-block">&nbsp;{link[1]}</span>
        </Link>
      )}
    </div>
  );
};
export default NavigationSidebar;