import React from "react";
import "./SidebarChannel.css";
import {setChannelInfo} from "./features/appSlice";
import { useDispatch } from "react-redux";


function SidebarChannel({id, channelName}){
  const dispatch = useDispatch();

  return(
    <div className="SidebarChannel" 
      onClick={() => 
        dispatch(
          setChannelInfo({
            channelId:id,
            channelName:channelName
          })
        )
      }    
    >
      <h4><span className="sidebarChannelHash">#</span>{channelName}</h4 >
    </div>
  );
}

export default SidebarChannel;
