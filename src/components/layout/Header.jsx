import Headroom from "react-headroom";
import logo from "../../assets/icons/logo.svg";
import basket from "../../assets/icons/basket.svg";

import useAuth from "../../store/auth";
import { Fragment, useState } from "react";
import { Form, Input, Modal } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";

const NavLink = [
  {
    name: "Cafe Menu",
  },
  {
    name: "About Us",
  },
  {
    name: "Find Us",
  },
  {
    name: "Alowishus Catering",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [checkLogin, setCheckLogin] = useState(false);

  const [form] = Form.useForm();

  const check = () => {
    setCheckLogin(true);
    openModal(form);
  };

  const {
    handleLogin,
    isModalLoading,
    isModalOpen,
    openModal,
    closeModal,
    handleRegister,
  } = useAuth();

  return (
    <Fragment>
      <Headroom>
        <header className="shadow-xl">
          <nav className="bg-[#EEEFF1] py-3">
            <div className="container">
              <div className="flex justify-between items-center">
                <div>
                  <img src={logo} alt="logo" />
                </div>
                <ul className="flex items-center gap-10 text-[15px] font-[Medium] m-0">
                  {NavLink.map((el) => (
                    <li className="nav_link" key={el.name}>
                      {el.name}
                    </li>
                  ))}
                  <div className="flex items-center gap-5">
                    <button className="w-[56px] h-[56px] grid place-content-center rounded-full bg-white hover:bg-blue-500 transition-all duration-300">
                      <img
                        src={basket}
                        alt="basket"
                        className="hover:fill-white"
                      />
                    </button>
                    <button
                      onClick={() => openModal(form)}
                      className="bg-[#1B1B1D] px-[30px] py-[15px] rounded-[63px] text-white uppercase"
                    >
                      Log in
                    </button>
                    <button
                      onClick={check}
                      className="bg-[#1B1B1D] px-[30px] py-[15px] rounded-[63px] text-white uppercase"
                    >
                      Register
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Headroom>

      {checkLogin ? (
        <Modal
          title={checkLogin ? "Register" : "Login"}
          style={{ top: 10 }}
          maskClosable={false}
          confirmLoading={isModalLoading}
          okText={checkLogin ? "Register" : "Login"}
          okType="default"
          open={isModalOpen}
          onOk={() => handleRegister(form)}
          onCancel={closeModal}
          afterClose={() => setCheckLogin(false)}
        >
          <Form
            name={checkLogin ? "Register" : "Login"}
            wrapperCol={{
              span: 32,
            }}
            form={form}
          >
            <Form.Item
              label="FirstName"
              name="FirstName"
              rules={[
                {
                  required: true,
                  message: "Please input your FirstName!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="LastName"
              name="LastName"
              rules={[
                {
                  required: true,
                  message: "Please input your LastName!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
      ) : (
        <Modal
          title={checkLogin ? "Register" : "Login"}
          style={{ top: 10 }}
          maskClosable={false}
          confirmLoading={isModalLoading}
          okText={checkLogin ? "Register" : "Login"}
          okType="default"
          open={isModalOpen}
          onOk={() => handleLogin(form, navigate)}
          onCancel={closeModal}
          afterClose={() => setCheckLogin(false)}
        >
          <Form
            name={checkLogin ? "Register" : "Login"}
            wrapperCol={{
              span: 32,
            }}
            form={form}
          >
            <Form.Item
              label="Email"
              name="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </Fragment>
  );
};

export default Header;
