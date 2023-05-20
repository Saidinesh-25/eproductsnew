import styles from "styles/form.module.css";

type Props = {
  title: string;
  images: string;
  handleTitle: (e: any) => void;
  handleImageUpload: (e: any) => void;
  handleSubmit: (e: any) => void;
  buttonText: string;
};
const ProductForm = (props: Props) => {
  const {
    title,
    images,
    handleTitle,
    handleImageUpload,
    handleSubmit,
    buttonText,
  } = props;
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
        <button className={styles.btn1} type="submit">
          {buttonText}
        </button>
      </div>
    </form>
  );
};
export default ProductForm;
