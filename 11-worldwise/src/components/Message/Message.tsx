import styles from "./Message.module.css";

type MessageProp = {
    message: string
}

function Message({ message }: MessageProp) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;