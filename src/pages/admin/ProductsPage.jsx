import { Button, Flex, Form, Image, Input, Modal, Space, Table } from "antd";
import useProducts from "../../store/prodcuts";
import { useCallback, useEffect, useState } from "react";
import request from "../../server";

const ProductsPage = () => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const [ctgrId, setCtgrId] = useState(null);
  const [loading, setLoading] = useState(null);
  const [btnId, setBtnID] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);

  const { showModal, isModalLoading, isModalOpen, closeModal, getData, data } =
    useProducts();

  useEffect(() => {
    getData();
  }, [getData]);

  const getCategory = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await request.get("product-categories/get-all");
      setCategories(data.data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const handleOk = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("Name", e.target.Name.value);
      formData.append("Price", e.target.Price.value);
      formData.append("CategoryId", ctgrId);
      formData.append("Description", e.target.Description.value);
      formData.append("Asset", e.target.Asset.files[0]);
      await request.post("products/create", formData);
      getData();
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    setBtnID(id);
    try {
      setBtnLoading(true);
      await request.delete(`products/delete/${id}`);
    } finally {
      setBtnLoading(false);
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "asset",
      key: "asset",
      render: (photo, row) => (
        <Image width={50} height={50} src={photo?.filePath} alt={row.name} />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (ctgr) => <p>{ctgr.name}</p>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (desc) => <p>{desc.slice(0, 30)}...</p>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => <p>${price}</p>,
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Space size="middle">
          <Button
            loading={id == btnId && btnLoading}
            type="primary"
            danger
            onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <section>
      <Table
        scroll={{
          x: 1000,
        }}
        title={() => (
          <Flex justify="space-between" gap={36} align="center">
            <h1>Products ({data?.data?.length})</h1>
            <Input
              style={{ width: "auto", flexGrow: 1 }}
              placeholder="Searching..."
            />
            <Button
              className="bg-blue-700"
              onClick={() => showModal(form)}
              type="primary"
            >
              Add products
            </Button>
          </Flex>
        )}
        pagination={false}
        loading={loading}
        dataSource={data?.data}
        columns={columns}
      />

      <Modal
        title="Products data"
        maskClosable={false}
        confirmLoading={isModalLoading}
        open={isModalOpen}
        onCancel={closeModal}
      >
        <form onSubmit={handleOk}>
          <div className="mt-3">
            <label>Name</label>
            <input
              className="border border-black outline-none px-2 py-1 w-full"
              type="text"
              name="Name"
            />
          </div>
          <div className="mt-3">
            <label>Price</label>
            <input
              className="border border-black outline-none px-2 py-1 w-full"
              type="text"
              name="Price"
            />
          </div>
          <div className="mt-3">
            <label>Description</label>
            <input
              className="border border-black outline-none px-2 py-1 w-full"
              type="text"
              name="Description"
            />
          </div>
          <div className="mt-3">
            <select
              value={ctgrId}
              onChange={(e) => setCtgrId(e.target.value)}
              className="border border-black outline-none px-2 py-1 w-full"
            >
              {categories.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3">
            <label>Asset</label>
            <input className="ml-2" type="file" name="Asset" />
          </div>
          <button type="submit" className="bg-yellow-400 mt-5">
            Add Products
          </button>
        </form>
      </Modal>
    </section>
  );
};

export default ProductsPage;
