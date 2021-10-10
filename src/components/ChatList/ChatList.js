import React, { Component } from "react";
import "./ChatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://3.bp.blogspot.com/-vO7C5BPCaCQ/WigyjG6Q8lI/AAAAAAAAfyQ/1tobZMMwZ2YEI0zx5De7kD31znbUAth0gCLcBGAs/s200/TOMI_avatar_full.png",
      id: 1,
      name: "ChatBot",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://img2.pngio.com/download-setting-user-avatar-in-specific-size-without-breaking-user-avatars-png-480_526.png",
      id: 2,
      name: "John Doe",
      active: false,
      isOnline: false,
    },
    {
      image:
        "data:image/jpeg;base64,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",
      id: 3,
      name: "Harris",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://www.pngarts.com/files/5/Avatar-Face-PNG-Image-Background.png",
      id: 4,
      name: "Eleni",
      active: false,
      isOnline: true,
    },
    {
      image: "https://icon-library.com/images/4_avatar-512.png",
      id: 5,
      name: "Elsa",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVwuRNoxx7EmdZYZzaDkE-_-AnxEnbhWnid7xMcSofCf5aDTbMfM-reKGWd7Z8jWFXKA&usqp=CAU",
      id: 6,
      name: "Jack",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_s3sN6YZOLYk7LshGlKroND9aNZru6osBgP8A0XMg2QvDDKxpfV67GucVcqSzc5NwGQ&usqp=CAU",
      id: 7,
      name: "Baron",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-km6iq3XJexHyKwaOBbtKnvamGuhqLEXjoUsegMIKv56jU9ZZkfaluGi9mPA6IJBTac&usqp=CAU",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image: "https://miro.medium.com/max/435/1*-E5Cf6oh-5CKAlZyM8Qc5g.png",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://assets.website-files.com/5e7683d5e64659cb15f164d2/5ecabef7518a6e5046dbb834_leftbrain-manager-final.png",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }

  render() {
    return (
      <div className="chatList">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
