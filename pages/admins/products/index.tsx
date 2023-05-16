import Layout from "../../../components/layout";
import { useEffect, useState } from "react";
import Table from "../../../components/table";
import { log } from "console";
import { useRouter } from "next/router";

type products = {
  id: number;
  title: string;
  images: string;
};

const ProductTable = ({ value }: any) => {
  const reDirect = useRouter();
  const handleRoute = () => {
    reDirect.push("/admins/products/create");
  };
  const [products, setProducts] = useState<products[]>(value);

  console.log(products, "fromjson");

  const handleDelete = async (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    try {
      await fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE",
      });
      console.log("Product deleted successfully");
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  return (
    <Layout>
      <button onClick={handleRoute}>Add products</button>
      <Table products={products} handleDelete={handleDelete} />
    </Layout>
  );
};
export async function getServerSideProps() {
  //   const value = await fetch(`http://localhost:3001/products`).then(
  //     (response) => {
  //       return response.json();
  //     }
  //   ); we can use both the methods
  const a = await fetch(`http://localhost:3001/products`);
  log(a, "afterawait");
  const value = await a.json();

  console.log(value, "lolololololollo");
  return {
    props: {
      value: value,
    },
  };
}
export default ProductTable;
