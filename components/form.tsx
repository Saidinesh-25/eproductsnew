import { ChangeEvent, FormEvent } from "react";
import styles from "styles/form.module.css";

type Props = {
  title: string;
  images: string;
  handleTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
const ProductForm = ({
  title,
  images,
  handleTitle,
  handleImageUpload,
  handleSubmit,
}: Props) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formgroup}>
        <label>Title</label>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={handleTitle}
        />
      </div>

      <div>
        <label>Image</label>
        <input
          type="text"
          className={styles.input}
          value={images}
          onChange={handleImageUpload}
        />
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};
export default ProductForm;
