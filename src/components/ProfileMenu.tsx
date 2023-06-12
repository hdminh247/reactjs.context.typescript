import React, { useState } from "react";
import { Dropdown, Menu } from "antd";

import { useAuth } from "context/auth";

import { profileMenus } from "constants/menu";

export default function ProfileMenu() {
  const { user, role } = useAuth();
  const { logOut } = useAuth();

  const [visible, setVisible] = useState(false);

  const onMenuClick = (key: string) => {
    switch (key) {
      case "profile": {
        break;
      }
      case "dashboard": {
        break;
      }
      case "log-out": {
        logOut();
        break;
      }
      default: {
        break;
      }
    }
  };

  const onSelect = ({ key }: any) => {
    setVisible(false);
    onMenuClick(key);
  };

  const getDisplayName = () => {
    if (user.role?.id !== role.User) {
      return `${user?.firstName} ${user?.lastName}`;
    } else {
      return "UserName";
    }
  };

  return (
    <Dropdown
      overlay={<Menu className="profile-dropdown-menu" items={profileMenus()} onClick={onSelect}></Menu>}
      trigger={["click"]}
      className="profile-dropdown"
      onOpenChange={(f) => setVisible(f)}
      open={visible}
      placement="bottomRight"
    >
      <div className="user_col">
        <div className="user_name">
          <span className={"text-center"}>
            <img src="/images/user.png" alt={"user"} />
          </span>
          <p>
            {getDisplayName()} <img src="/images/d-arw.png" alt={"avatar"} />
          </p>
        </div>
      </div>
      {/*<div className="profile-dropdown-item" onClick={(e) => e.preventDefault()}>*/}
      {/*  {!less && (*/}
      {/*    <>*/}
      {/*      <span>{getDisplayName()}</span>*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*  <Avatar*/}
      {/*    className={"profile-dropdown-item__avatar ml-16"}*/}
      {/*    size={"large"}*/}
      {/*    icon={user?.avatar ? <img src={user?.avatar} /> : <UserOutlined />}*/}
      {/*    alt={"dropdown"}*/}
      {/*  />*/}
      {/*</div>*/}
    </Dropdown>
  );
}
