import { useRouter } from "next/router";
import Layout from "../../../../components/layout";
import { useState } from "react";
import ProductForm from "../../../../components/form";
// type Product = {
//   id: number;
//   title: string;
//   images: string;
// };

const EditProduct = (props: any) => {
  const { pid, productData } = props;
  console.log(pid, productData, "serversideprops");

  const reRoute = useRouter();

  const [title, setTitle] = useState(productData.title);
  const [images, setImages] = useState(productData.images);

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleImageUpload = (e: any) => {
    setImages(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const productObject = {
      title: title,
      images: images,
    };

    try {
      const response = await fetch(`http://localhost:3001/products/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productObject),
      });
      const newProduct = await response.json();
      console.log(newProduct, "whatisthenewproduct");
      //   setProducts([newProduct]);
      setTitle("");
      setImages("");
    } catch (error) {
      console.error("Error creating product:", error);
    }
    reRoute.push("/admins/products");
  };
  return (
    <Layout>
      <div>
        <ProductForm
          title={title}
          images={images}
          handleTitle={handleTitle}
          handleImageUpload={handleImageUpload}
          handleSubmit={handleSubmit}
        />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const { pid } = context.query;
  console.log(context.query, "whatisthisquery");
  const res = await fetch(`http://localhost:3001/products/${pid}`);
  const productData = await res.json();
  console.log(productData, "abx===");
  return { props: { pid: pid, productData: productData } };
}
export default EditProduct;
