import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import styles from "styles/create.module.css";
import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import ProductForm from "../../../components/form";

const CreateProduct = () => {
  const reRoute = useRouter();

  const [title, setTitle] = useState("");
  const [images, setImages] = useState("");

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
      const response = await fetch(`https://pdata.onrender.com/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productObject),
      });
      console.log(response);
      setTitle("");
      setImages("");
    } catch (error) {
      console.error("Error creating product:", error);
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
          buttonText="Add Product"
        />
      </div>
    </Layout>
  );
};
export default CreateProduct;
