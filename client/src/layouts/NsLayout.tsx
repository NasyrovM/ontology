import React from "react";
import 'antd/dist/antd.css';
import { Layout, Menu} from "antd";
import Props from "./Props";

const { Header, Content, Footer } = Layout;

const NsLayout : React.FC<Props> = ({children}) => (
    <Layout>
        <Header>
            <div className='logo'/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"></Menu.Item>
                <Menu.Item key="2">Unit</Menu.Item>
                <Menu.Item key="3">Function</Menu.Item>
            </Menu>
        </Header>
        <Content>
            <div className="site-layout-content">
                {children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center'}}>
            Ontology ©2020
        </Footer>
    </Layout>
)

export default NsLayout