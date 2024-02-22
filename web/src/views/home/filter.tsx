/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState, useRef } from 'react';

import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input } from "antd";

const Filter: React.FC<{ filterCallback: (data: any) => void }> = (props) => {
    const { filterCallback } = props;
    const [form] = Form.useForm();

    const onFinish = () => {
        form.validateFields().then((values) => {
            filterCallback(values);
        });
    };

    return (
        <div className="filter">
            <Form className="filter-Form" name="nest-messages" form={form} layout="inline" onFinish={onFinish}>
                <Col xl={7} lg={18} md={18} sm={24}>
                    <Form.Item label="search food" name="name">
                        <Input placeholder="what food do you want to eat" maxLength={20} autoComplete={"off"} />
                    </Form.Item>
                </Col>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        <SearchOutlined />
                        search
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                        type="primary"
                        htmlType="reset"
                        onClick={() => {
                            form.setFieldsValue({ name: "" });
                            filterCallback({ name: "" });
                        }}
                    >
                        <ReloadOutlined />
                        reset
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Filter;
