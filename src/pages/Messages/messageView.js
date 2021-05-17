import React, { useContext, useEffect, useState , useRef } from "react"
import { connect } from "react-redux"
import searchIcon from "../../assets/images/search-ic.svg"
import callIcon from "../../assets/images/call-ic.svg"
import messageIcon from "../../assets/images/Message-illus.svg"
import attachIcon from "../../assets/images/attach-ic.svg"
import userImg from "../../assets/images/users/user-3.jpg"
//Import Action to copy breadcrumb items from local state to redux state
import socketIOClient from "socket.io-client";
import axios from "axios";
import { setBreadcrumbItems } from "../../store/actions";

 
import {
  _getUsers,
} from "../../services/chatRequests";

const USER_JOIN_CHAT_EVENT = "USER_JOIN_CHAT_EVENT";
const USER_LEAVE_CHAT_EVENT = "USER_LEAVE_CHAT_EVENT";
const NEW_CHAT_MESSAGE_EVENT = "NEW_CHAT_MESSAGE_EVENT";
const START_TYPING_MESSAGE_EVENT = "START_TYPING_MESSAGE_EVENT";
const STOP_TYPING_MESSAGE_EVENT = "STOP_TYPING_MESSAGE_EVENT";
const SOCKET_SERVER_URL = "http://165.227.107.124:5000";

const Messages = (props) => {

  const [users, setUsers] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const socketRef = useRef();
  const user = JSON.parse(
    localStorage.getItem("user") || "[]"
  );
  const provider = JSON.parse(
    localStorage.getItem("serviceProviderData") || "[]"
  );
  // useEffect(() => {
  

   


  //   _getUsers().then(
  //     (res) => {
  //       if (res.success) {
          
  //         setUsers(res.result);
  //         //  (st)
  //       }
  //     }
  //   );

  // }, []);
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(
        `http://localhost:5000/rooms/271/messages`
      );
      const result = response.data.messages;
       
      setMessages(result);
    };
  
    fetchMessages();
  }, [271]);

  useEffect(() => {
    if (!user) {
      return;
    }
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId: 271, name: user.name, picture: user.picture },
    });

    socketRef.current.on("connect", () => {
      console.log (socketRef.current.id);
    });

    socketRef.current.on(USER_JOIN_CHAT_EVENT, (user) => {
      if (user.id === socketRef.current.id) return;
      setUsers((users) => [...users, user]);
    });

    // socketRef.current.on(USER_LEAVE_CHAT_EVENT, (user) => {
    //   setUsers((users) => users.filter((u) => u.id !== user.id));
    // });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    socketRef.current.on(START_TYPING_MESSAGE_EVENT, (typingInfo) => {
      if (typingInfo.senderId !== socketRef.current.id) {
        const user = typingInfo.user;
        setTypingUsers((users) => [...users, user]);
      }
    });

    socketRef.current.on(STOP_TYPING_MESSAGE_EVENT, (typingInfo) => {
      if (typingInfo.senderId !== socketRef.current.id) {
        const user = typingInfo.user;
        setTypingUsers((users) => users.filter((u) => u.name !== user.name));
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [user.id, user]);
   console.log(users)
  return (
   
    <React.Fragment>
        <section id="messages">
          <div className="mt-3">
            <h3 className="text-left">Messages</h3>
          </div>
          <div className="d-flex w-100 mx-0">

            <div className="pl-0">
              <div className="card-msg">
                <div className="d-flex align-items-center search">
                  <img src={searchIcon} alt="search" />
                  <input placeholder="Search" className="form-control" />
                </div>
                <ul className="mt-4 users list-unstyled">
                {users.length > 0 &&
                  users.map((user, i) => (
                  <li className="d-flex align-items-start justify-content-between">
                    <div className="user-data d-flex align-items-center">

                      <img src={user.picture} alt="user" className="mr-3" />
                      <div className="d-flex flex-column align-items-start">
                        
                        <h6>{user.name}</h6>
                        <span>{user.name}</span>
                      </div>
                    </div>
                    <span className="time">04:32 PM</span>
                  </li>
                    ))} 
                </ul>
              </div>
            </div>
           
           
            <div className="w-100 pl-3">
              <div className="msg-container">
                <header className="d-flex align-items-center justify-content-between">
                  <div className="user-data d-flex align-items-center">
                    
                    <img src={provider.PROVIDER_LOGO_PATH} alt="user" className="mr-3" />
                    <div className="d-flex flex-column align-items-start">
                      <h6>{user.firstname} {user.lastname}</h6>
                      <span>My Messages</span>
                    </div>
                  </div>
                  <button className="phoneCall d-flex align-items-center">
                    <img src={callIcon} alt="phone" />
                    <span className="ml-2">{user.phonenumber}</span>
                  </button>
                </header>
                <div className="msg-body d-flex align-items-center flex-column">
                  <div className="m-auto">
                    {messages.length > 0 &&
                  messages.map((message, i) => (
                    <p >{message.body}</p>
                    ))}
                    
                  </div>
                  <div className="actions w-100 d-flex align-items-center justify-content-between">
                    {/* <input
                      placeholder="Type your message"
                      className="form-control"
                    /> */}
                    {/* <div className="attach-file">
                      <img src={attachIcon} alt="attach" />
                      <input type="file" className="form-file" />
                    </div> */}
                    {/* <button className="send-msg-btn">Send message</button> */}
                  </div>
                </div>
              </div>
            </div>
          
          </div>

        </section>
      </React.Fragment>
  );

  

}

export default connect(null, { setBreadcrumbItems })(Messages)
 