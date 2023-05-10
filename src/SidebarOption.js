import React, { useContext } from "react";
import "./SidebarOption.css";
import { useStateValue } from "./StateProvider";

function SidebarOption({ option = "test", Icon }) {
  // const [dispatch] = useStateValue;
  const [{ dispatch, playlists }] = useStateValue();

  // const someAction = (id) => {
  //   console.log("cuuuu");
  //   dispatch({
  //     type: "SET_CURR_PLAYLIST",
  //     curr_playlist: id,
  //   });
  // };
  // dispatch({
  //   type: "SET_ITEM",
  //   item: r.item,
  // });
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option.name}</h4> : <p>{option.name}</p>}
    </div>
  );
}

export default SidebarOption;
