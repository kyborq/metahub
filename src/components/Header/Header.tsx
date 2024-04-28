import { KeyIcon } from "@/assets/icons";
import { Button, IconButton, Input, Modal } from "@/components";
import { useModal } from "@/hooks/useModal";

import styles from "./Header.module.css";

export const Header = () => {
  const authModal = useModal();

  return (
    <header className={styles.Header}>
      <h1 className={styles.Title}>МетаХаб</h1>
      <IconButton icon={<KeyIcon fill="#4361ee" />} onClick={authModal.open} />

      <Modal state={authModal} title="Авторизация">
        <Input placeholder="Логин" />
        <Input placeholder="Пароль" />
        <div style={{ flex: 1 }} />
        <Button label="Войти" />
      </Modal>
    </header>
  );
};
