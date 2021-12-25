import React, {useState} from "react";
import {Menu, Grid, Button, Modal, Input, Checkbox} from "antd";
import {Link} from "react-router-dom";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

const {useBreakpoint} = Grid;

export default function LeftMenu() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModalLogin = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const {md} = useBreakpoint();
    return (
        <>

            <Menu mode={md ? "horizontal" : "inline"}>
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/blog">Blog</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/contact">Contact Us</Link>
                </Menu.Item>
                <Menu.Item>
                    <Button type="link" onClick={showModalLogin}>
                        <Link to="">Login</Link>
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button type="link">
                        <Link to="">Sign up</Link>
                    </Button>
                </Menu.Item>

            </Menu>
            <Modal title="Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                   footer={[
                       <Button key="submit" onClick={handleCancel}>
                           Cancel
                       </Button>,
                       <Button key="submit" type="primary" onClick={handleOk}>
                           Login
                       </Button>,
                       <Button key="submit" type="primary" onClick={handleOk}>
                           Sign up
                       </Button>
                   ]}>
                <Input placeholder="User Name"/>
                <Input.Password
                    placeholder="Password"
                    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                />
                <Checkbox>Remember me</Checkbox>
            </Modal>


        </>
    );
}
