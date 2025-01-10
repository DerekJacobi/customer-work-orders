import React, { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import WorkOrderView from "./work-order-view.tsx";

interface DataType {
  key: string;
  name: string;
  boatName: string;
  address: string;
  tags: string[];
}

const WorkOrders: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <div>
          <Button type="primary" onClick={showModal}>
            {name}
          </Button>
        </div>
      ),
    },
    {
      title: "Boat Name",
      dataIndex: "boatName",
      key: "boatName",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Call {record.name}</a>
          <a>Email {record.name}</a>
          <a>Mark as Done</a>
          <a>Clone</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      boatName: "Jacobros",
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      boatName: "Bassmen",
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      boatName: "Frightening Seamen",
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <>
      <Table<DataType> columns={columns} dataSource={data} />
      <WorkOrderView open={open} setOpen={setOpen} />
    </>
  );
};

export default WorkOrders;
