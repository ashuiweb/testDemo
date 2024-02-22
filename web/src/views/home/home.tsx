/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagination from "@/components/page/Pagination";
import http from "@/utils/http";
import { Table } from "antd";
import { ColumnType } from "antd/lib/table/interface";
import { useCallback, useEffect, useMemo, useState } from "react";
import Filter from "./filter";
const getList = (query: { page: number; size: number }) => http.post("/foods", query);

const columns: ColumnType<any>[] = [
    {
        title: "Locationid",
        dataIndex: "Applicant",
        align: "center",
        width: 200,
        render: (text) => text,
    },
    {
        title: "Applicant",
        dataIndex: "Applicant",
        align: "center",
        render: (text) => text,
    },
    {
        title: "FacilityType",
        dataIndex: "FacilityType",
        align: "center",
        render: (text) => text,
    },
    {
        title: "Address",
        dataIndex: "Address",
        render: (text) => text,
    },
    {
        title: "FoodItems",
        dataIndex: "FoodItems",
        render: (text) => text,
    },
];
const Home = () => {
    const [dataSource, setDataSource] = useState<IDataSource | TypeEmptyObject>({});
    const [pageInfo, setPageInfo] = useState({ page: 1, size: 10 });
    const [search, setSearch] = useState({ name: "" });
    const reg = new RegExp(`(${search.name})`, "gi");
    const FoodItems = useMemo(() => columns.find((it) => it.dataIndex === "FoodItems"), []);
    search.name
        ? (FoodItems.render = (text) => {
              const str = text ? text.replace(reg, `<b style="color:red">$1</b>`) : "";
              return <div dangerouslySetInnerHTML={{ __html: str }}></div>;
          })
        : (FoodItems.render = (text) => text);
    useEffect(() => {
        getDataSource();
    }, [pageInfo, search]);

    const getDataSource = () => {
        getList({ ...pageInfo, ...search }).then((res) => {
            setDataSource(res || {});
        });
    };

    const paging = {
        dataSource: dataSource,
        pageCallback: (page, size) => {
            setPageInfo({ page, size });
        },
    };
    const filterProps = {
        filterCallback: useCallback((values) => {
            setPageInfo({ ...pageInfo, page: 1 });
            setSearch(values);
        }, []),
    };
    return (
        <>
            <Filter {...filterProps} />
            <div className={"List"}>
                <Table bordered scroll={{ y: 560 }} rowKey={(record) => record._id} columns={columns} dataSource={(dataSource && dataSource.content) || []} pagination={false} />
            </div>
            {dataSource && Array.isArray(dataSource.content) && !!dataSource.content.length && <Pagination {...paging} />}
        </>
    );
};
export default Home;
