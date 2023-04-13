import { HTMLProps } from "react";
import styles from "./styles.module.css";

export default function TextArea({ ...rest }: HTMLProps<HTMLTextAreaElement>) {
  return <textarea className={styles.textarea} {...rest}></textarea>;
}
