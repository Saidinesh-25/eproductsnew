import { useRouter } from "next/router";
import { useState } from "react";
import ProductForm from "../../../../components/form";
import styles from "styles/create.module.css";
import Layout from "../../../../components/layout";

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
      const response = await fetch(
        `https://pdata.onrender.com/products/${pid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productObject),
        }
      );
      const newProduct = await response.json();
      console.log(newProduct, "whatisthenewproduct");

      setTitle("");
      setImages("");
    } catch (error) {
      console.log("Error creating product:", error);
    }
    reRoute.push("/admins/products");
  };
  return (
    <Layout>
      <div className={styles.body}>
        <ProductForm
          title={title}
          images={images}
          handleTitle={handleTitle}
          handleImageUpload={handleImageUpload}
          handleSubmit={handleSubmit}
          buttonText="save"
        />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const { pid } = context.query;
  console.log(context.query, "whatisthisquery");
  const res = await fetch(`https://pdata.onrender.com/products/${pid}`);
  const productData = await res.json();
  console.log(productData, "abx===");
  return { props: { pid: pid, productData: productData } };
}
export default EditProduct;
