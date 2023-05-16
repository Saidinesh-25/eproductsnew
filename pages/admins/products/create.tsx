import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import styles from "styles/create.module.css";
import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import ProductForm from "../../../components/form";
interface Product {
  id: number;
  title: string;
  images: string;
}

const CreateProduct = () => {
  const reRoute = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState("");
  const [images, setImages] = useState("");

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productObject = {
      title: title,
      images: images,
    };

    try {
      const response = await fetch(
        "http://eproductsnew-saidinesh-25.vercel.app/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productObject),
        }
      );
      const newProduct = await response.json();
      setProducts([...products, newProduct]);
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
        />
      </div>
    </Layout>
  );
};
export default CreateProduct;
