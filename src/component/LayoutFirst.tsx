import { ShoppingCartOutlined } from "@ant-design/icons";
import { Dropdown, Input, MenuProps, Space, Typography, message } from "antd";
import React from "react";
import { Link } from "react-router-dom"

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <ShoppingCartOutlined />,
  },
];

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const LayoutFirst: React.FC = () => {
  return (
    <>
      <div className="AppHeader">
        <Typography.Title style={{ margin: 0 }}>
          <Link to="/"> 
           Shopping Cart
          </Link>
          </Typography.Title>
        <Input
          size="small"
          placeholder="search"
          style={{ width: "40%", height: "80%" }}
        />

        <Space>
          <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
          <ShoppingCartOutlined />
          </Dropdown.Button>
        </Space>
      </div>
    </>
  );
};

export default LayoutFirst;
