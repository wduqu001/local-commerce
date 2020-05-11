import React, { useState } from 'react';
import { Layout, Menu, Pagination, Alert } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

import logo from './logo.svg';
import './App.css';
import CardsList from './CardsList';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [search,] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [data, setData] = useState<Array<any> | null>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);
  const [sort, setSort] = useState('name');
  const [error, setError] = useState("");

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="App">
      <Layout>
        <Sider
          className="app-sider"
          breakpoint="sm"
        >
          <div className="logo" />
          <div className="sider-settings-header">Preferences: </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["11"]}
          >
            <SubMenu
              key="businessType"
              title={
                <span>
                  {/* <Icon type="product" />
                  <Icon type="service" /> */}
                  <span>Business Type: </span>
                </span>
              }
            >
              <Menu.Item key="1" onClick={() => setBusinessType("PRODUCTS")}>
                Products
              </Menu.Item>
              <Menu.Item key="2" onClick={() => setBusinessType("SERVICE")}>
                Services
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header className="App-header align-text-center">
            Local commerce Search
          </Header>
          {
            error ?
              <Alert message={error} type="error" closable showIcon />
              : ""
          }
          <Content className="app-content">
            <CardsList data={data} />
          </Content>
          <Content
            style={{ margin: "12px 16px 0" }}
            className="pagination"
          >
            <Pagination
              defaultCurrent={1}
              defaultPageSize={5}
              onChange={(pageNumber: number) => setCurrentPage(pageNumber)}
              total={count}
            />
          </Content>
          <Footer className="align-text-center">Local commerce Search 0.1 ©2020 Created by Willian Duque</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
