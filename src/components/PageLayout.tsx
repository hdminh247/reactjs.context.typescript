import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";

import PageWrapper from "./PageWrapper";

const { Header, Footer, Content, Sider } = Layout;

// Components
import { default as HeaderComponent } from "../components/Header";

import { getAdminNavigations } from "../constants/menu";

import { useAuth } from "../context";

import { isAdmin } from "../utils/auth";

export default function PageLayout({ children }: Props) {
  const { pathname } = useLocation();
  const { user } = useAuth();

  return (
    <Layout>
      <Header>
        <HeaderComponent />
      </Header>
      <Content>
        <Layout>
          {user && isAdmin(user?.role) && (
            <Sider width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[pathname]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
                items={getAdminNavigations(user?.roleId || 4)}
              />
            </Sider>
          )}
          <Content>
            <PageWrapper>{children}</PageWrapper>
          </Content>
        </Layout>
      </Content>
      <Footer>
        <div className="footer">
          <div className="container">
            <a href="">
              <img src="/images/logo.png" className="footer_logo" />
            </a>
            <p className="footer-text">
              Copyright © 2023 Sample Web <br className="forMob" />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

interface Props {
  children: JSX.Element;
}
