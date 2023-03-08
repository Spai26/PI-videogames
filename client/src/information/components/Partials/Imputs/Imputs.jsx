import { useState } from "react";
import styles from "./Inputs.module.css";

const Imputs = ({
  value,
  label,
  onBlur,
  onChange,
  id,
  pattern,
  error,
  classError,
  ...inputs
}) => {
  return (
    console.log(value),
    (
      <div className={styles.items}>
        <label htmlFor={inputs.htmlFor}>{label}</label>
        <input {...inputs} pattern={pattern} onChange={onChange} />
      </div>
    )
  );
};

export default Imputs;
