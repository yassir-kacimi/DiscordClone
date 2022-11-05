import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon  from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel"
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import CallIcon from "@material-ui/icons/Call";
import InfoIcon from "@material-ui/icons/Info";
import {Avatar} from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

import { selectUser} from "./features/userSlice"; 
import {useSelector} from "react-redux";
import db, { auth } from "./firebase";



function Sidebar(){
  const user = useSelector(selectUser);
  const [channels, setChannels]=useState([]);
  
  useEffect(()=>{
    db.collection("channels").onSnapshot((snapshot)=>
      setChannels(
        snapshot.docs.map((doc)=>({
          id:doc.id,
          channel:doc.data(),
        }))
      )
      );
      
  },[]);
  
  const handleAddChannel= () =>{
    const channelName = prompt("Enter a channel Name");
    if(channelName){
      db.collection("channels").add({
        channelName: channelName,
      })
    }
  }

  return(
    <div className="sidebar">

      <div className="sidebarTop">
        <h3>Yassir Kacimi</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebarChannels">
        <div className="sidebarChannelsHeader">
          <div className="sidebarHeader">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className="sidebarAddChannel" />
        </div>

        <div className="sidebarChannelsList">
          {channels.map(({id, channel}) =>( 
            <SidebarChannel   
            key={id}
            id={id}
            channelName={channel.channelName}
            />
          ))}
        </div>
      </div>

      <div className="sidebarVoice">
        <SignalCellularAltIcon className="sidebarVoiceIcon" fontSize="large"/>
        <div className="sidebarVoiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebarVoiceIcons">
          <InfoIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebarProfile">    
        <Avatar onClick={()=>{auth.signOut()}} src={user.photo}/> 
        <div className="sidebarProfileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebarProfileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div> 
  );
}

export default Sidebar;
