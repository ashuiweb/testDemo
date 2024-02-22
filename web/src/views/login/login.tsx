import { store } from "@/store";
import { storeLogin } from "@/store/auth/action";
import http from "@/utils/http";
import { Button, Form, Input, message } from "antd";
import { useHistory } from "react-router-dom";
import loginPic from "./login.jpg";
const login = (query: { username: string; password: string }) => http.post("/api/login", query);

export default function Login() {
    const dispatch = store.dispatch;
    const history = useHistory();
    const onFinish = (values) => {
        login(values).then((res) => {
            if (res.error) {
                message.error(res.message[0].message);
            } else {
                dispatch(storeLogin(res));
                history.push("/", { from: "login" });
            }
        });
    };
    return (
        <div className="flex w-screen items-center justify-center h-screen bg-gray-700 px-5">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ username: "admin", password: "123123" }}
                onFinish={onFinish}
                autoComplete="off"
                className="flex-1 flex justify-center"
            >
                <div className="lg:w-[720px] md:grid md:grid-cols-2 rounded-md shadow-md overflow-hidden bg-gray-50">
                    <div className="p-5 flex flex-col justify-between box-border">
                        <div>
                            <h2 className="text-center text-gray-700 text-lg mt-3">login</h2>
                            <div className="mt-8">
                                <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="mt-8">
                                <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                                    <Input.Password />
                                </Form.Item>
                            </div>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>

                            <span>Demo account:admin & password:123123</span>
                        </div>
                    </div>

                    <div className="hidden md:block relative">
                        <img src={loginPic} className="absolute h-full w-full object-cover" />
                    </div>
                </div>
            </Form>
            <img />
        </div>
    );
}
