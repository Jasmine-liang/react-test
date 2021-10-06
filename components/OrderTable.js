import React from "react";
import { Table, Button, Popconfirm, message } from "antd";
import orders from "../sample-data.json";

class OrderTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [...orders],
    };
    this.columns = [
      {
        title: "OrderNumber",
        dataIndex: "orderNumber",
        key: "orderNumber",
      },
      {
        title: "OrderDate",
        dataIndex: "orderDate",
        key: "orderDate",
      },
      {
        title: "OrderTotal",
        dataIndex: "orderTotal",
        key: "orderTotal",
      },
      {
        title: "Customer",
        dataIndex: "customer",
        key: "customer",
      },
      {
        title: "Action",
        key: "action",
        render: (record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Are you sure to delete?"
              onCancel={this.handleCancel}
              onConfirm={() => this.handleDelete(record.id)}
            >
              <Button>Delete</Button>
            </Popconfirm>
          ) : null,
      },
    ];
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.id !== key),
    });
    message.success(`Order-ID: ${key} is deleted!`);
    console.log(`ID: ${key} is deleted!`);
  };

  handleCancel(e) {
    console.log(e);
    message.error("Cancle!");
  }

  render() {
    return (
      <Table
        rowKey="id"
        dataSource={this.state.dataSource}
        columns={this.columns}
      />
    );
  }
}

export default OrderTable;
