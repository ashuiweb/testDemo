import { Layout } from "antd";

import { Suspense, memo } from "react";
import { renderRoutes } from "react-router-config";
import { useUserInfo } from "./hooks/userInfo";

import { GlobalRoutes } from "./route";

const { Content, Footer } = Layout;
const routes = [...GlobalRoutes];

const UniteRouter = memo(() => {
    const userInfo = useUserInfo();

    return (
        <>
            <Layout className={"layout-container"}>
                <Layout>
                    <Layout.Header className="header">
                        <span>&nbsp;&nbsp;welcome {userInfo.username}!</span>
                    </Layout.Header>
                    <div className="layout-main">
                        <Content className={"content"}>
                            <Suspense fallback={<div>loading</div>}>{renderRoutes(routes)}</Suspense>
                        </Content>
                    </div>
                    <Footer style={{ textAlign: "center", color: "#AEAFAF" }}>Copyright © {new Date().getFullYear()}ashuiweb.ALL Rights Reserved</Footer>
                </Layout>
            </Layout>
        </>
    );
});

export default UniteRouter;
