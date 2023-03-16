import styles from "./Erros.module.css";
const ErrorsMsg = ({ backgroundColor = "red", color = "white", message }) => {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
  };
  return (
    <>
      <div style={{ ...style }} className={styles.errors}>
        {message}
      </div>
    </>
  );
};

export default ErrorsMsg;
