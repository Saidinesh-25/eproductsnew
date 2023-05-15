import { useRouter } from "next/router";
import styles from "styles/table.module.css";
type Product = {
  id: number;
  title: string;
  images: string;
};

type Props = {
  products: Product[];
  handleDelete: (id: number) => void;
};

const Table = (props: Props) => {
  const reRoute = useRouter();
  const handleEditRoute = (id: number) => {
    reRoute.push(`/admins/products/${id}/edit`);
  };
  const { products, handleDelete } = props;
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th1}>ID</th>
          <th className={styles.th2}>Title</th>
          <th className={styles.th3}>Image</th>
          <th className={styles.th4}>Actions</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {products?.map((item: any) => (
          <tr key={item.id}>
            <td className={styles.td1}>{item.id}</td>
            <td className={styles.td1}>{item.title}</td>
            <td className={styles.td3}>
              <img
                width={100}
                height={100}
                src={item.images}
                alt={item.title}
              />
            </td>
            <td className={styles.td4}>
              <button
                className={styles.btn1}
                onClick={() => handleEditRoute(item.id)}
              >
                Edit
              </button>
              <button
                className={styles.btn}
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
