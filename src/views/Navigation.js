import React, { useState } from "react";
import {
  HomeOutlined,
  NotificationOutlined,
  RocketOutlined,
  ReadOutlined,
  ExperimentOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Home",
    key: "/",
    style: { marginLeft: "8px" },
    icon: <HomeOutlined />,
  },
  {
    label: "News",
    key: "/news",
    style: { marginLeft: "8px" },
    icon: <NotificationOutlined />,
  },
  {
    label: "Games",
    key: "/games",
    icon: <RocketOutlined />,
    style: { marginLeft: "8px" },
    children: [
      {
        label: "Fableverse",
        key: "/games/fableverse",
      },
      {
        label: "Fableverse 2",
        key: "/games/fableverse-2",
        disabled: true,
      },
    ],
  },
  {
    label: "Guides",
    key: "/guides",
    icon: <ReadOutlined />,
    style: { marginLeft: "8px" },
    children: [
      {
        label: "Fableverse",
        key: "/guides/fableverse",
      },
    ],
  },
  {
    label: "Building a Game",
    key: "/building-a-game",
    icon: <ExperimentOutlined />,
    style: { marginLeft: "8px" },
    disabled: true,
    children: [
      {
        label: "Getting Starter",
        key: "/building-a-game/getting-started",
      },
    ],
  },
  {
    label: "Discord",
    key: "/discord",
    style: { marginLeft: "8px" },
    icon: <MessageOutlined />,
  },
];

const App = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    if (e.key === "/discord") {
      window.location.href = "https://discord.gg/eeCB57sVNF";
    } else {
      navigate(e.key);
    }
  };

  return (
    <div style={{ backgroundColor: "none" }}>
      <h1
        style={{
          display: "inline-block",
          fontSize: "20px",
          fontWeight: "600",
          marginTop: "11px",
          marginLeft: "12px",
        }}
      >
        King Otter Games
      </h1>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ float: "right", border: "none", backgroundColor: "inherit" }}
      />
      <br />
    </div>
  );
};
export default App;
