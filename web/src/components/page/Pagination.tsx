import { Pagination } from "antd";
import { useRef } from "react";
import "./Paginations.scss";

/**
 * 分页 [新]
 * @param {*} props
 * - dataSource 数据源
 * - pageCallback 分页回调函数
 * @returns
 */
const Paginations = (props) => {
    const { dataSource, pageCallback } = props;

    const pageSize = useRef(dataSource?.size || 10);

    const onChangeInfo = (current, size) => {
        const pageSizeCompare = size === pageSize.current;
        pageCallback(pageSizeCompare ? current : 1, size);
        if (!pageSizeCompare) {
            pageSize.current = size;
        }
    };

    return (
        <div className="paginations">
            <Pagination
                showQuickJumper
                pageSize={dataSource?.size}
                showTotal={() => `total:${dataSource.totalElements || 0}`}
                current={Number(dataSource?.number)}
                total={dataSource.totalElements ? Number(dataSource.totalElements) : 0}
                onChange={onChangeInfo}
                showSizeChanger
                pageSizeOptions={["10", "50", "200", "1000"]}
            />
        </div>
    );
};

export default Paginations;
