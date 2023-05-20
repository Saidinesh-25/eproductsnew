import Layout from "../../../components/layout";
import { useState } from "react";
import Table from "../../../components/table";
import { useRouter } from "next/router";
import styles from "styles/table.module.css";

type products = {
  id: number;
  title: string;
  images: string;
};

const ProductTable = ({ value }: any) => {
  const [products, setProducts] = useState<products[]>(value);

  console.log(products, "fromjson");

  const handleDelete = async (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    try {
      await fetch(`https://pdata.onrender.com/products/${id}`, {
        method: "DELETE",
      });
      console.log("Product deleted successfully");
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  return (
    <Layout>
      <Table products={products} handleDelete={handleDelete} />
    </Layout>
  );
};
export async function getServerSideProps() {
  const res = await fetch(`https://pdata.onrender.com/products`);
  console.log(res, "afterawait");
  const value = await res.json();

  console.log(value, "lolololololollo");
  return {
    props: {
      value: value,
    },
  };
}
export default ProductTable;
