import React from "react";
import { MailOutlined, SettingOutlined, HomeFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1a",
    icon: <HomeFilled />,
    label: (
      <NavLink to="/" end>
        Home
      </NavLink>
    ),
  },
  {
    key: "sub1",
    label: "My Shipyards",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: "North Shore",
        type: "group",
        children: [
          {
            key: "1",
            label: (
              <NavLink to="boatyard/bridge-marina" end>
                Bridge Marina
              </NavLink>
            ),
          },
          {
            key: "2",
            label: (
              <NavLink to="boatyard/csh-yc" end>
                CSH YC
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "g2",
        label: "South Shore",
        type: "group",
        children: [
          {
            key: "3",
            label: (
              <NavLink to="boatyard/bellmore-docks-yc" end>
                Bellmore Docks
              </NavLink>
            ),
          },
          {
            key: "4",
            label: (
              <NavLink to="boatyard/merrick-yc" end>
                Merrick YC
              </NavLink>
            ),
          },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "10",
    icon: <SettingOutlined />,
    label: (
      <NavLink to="/work-orders" end>
        Work Orders
      </NavLink>
    ),
  },
  {
    key: "sub2",
    label: "Settings",
    children: [
      {
        key: "13",
        label: (
          <NavLink to="settings/user" end>
            User
          </NavLink>
        ),
      },
      {
        key: "14",
        label: (
          <NavLink to="settings/work-orders" end>
            Work Orders
          </NavLink>
        ),
      },
    ],
  },
];

const SideNavMenu: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ height: "100vh" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default SideNavMenu;
