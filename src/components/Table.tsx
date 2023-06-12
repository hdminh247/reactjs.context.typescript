import React from "react";
import { Table as AntTable } from "antd";

export default function Table({ columns, data, loading, onPageChange, page, total = -1, size = 10 }: Props) {
  function onChange(pagination: any) {
    if (onPageChange && page !== pagination.currentPage) {
      onPageChange(pagination.current, pagination.pageSize);
    }
  }

  return (
    <AntTable
      pagination={{ total: total === -1 ? undefined : total, current: page + 1, pageSize: size }}
      columns={columns}
      dataSource={data}
      scroll={{ y: 800, x: "100%" }}
      showHeader
      bordered={false}
      loading={loading}
      onChange={onChange}
      showSorterTooltip={false}
    />
  );
}

interface Props {
  columns: any;
  data: any;
  rowSelection: any;
  loading: any;
  onPageChange: any;
  page: any;
  total: any;
  size?: number;
}
