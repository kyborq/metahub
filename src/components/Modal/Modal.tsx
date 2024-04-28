import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { ModalState } from "../../hooks/useModal";
import styles from "./Modal.module.css";

type Props = {
  state: ModalState;
  title?: string;
  width?: number;
  children?: React.ReactNode;
  onClose?: () => void;
};

export const Modal = ({ state, width, title, children, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => {
    state.close();
    onClose && onClose();
  });

  return (
    <AnimatePresence>
      {state.visible && (
        <motion.div
          className={styles.Overlay}
          initial={{
            background: "rgba(0, 0, 0, 0)",
          }}
          animate={{
            background: "rgba(0, 0, 0, .2)",
          }}
          exit={{
            background: "rgba(0, 0, 0, 0)",
          }}
        >
          <motion.div
            ref={modalRef}
            className={styles.Modal}
            style={{ width }}
            initial={{
              translateY: 1000,
            }}
            animate={{
              translateY: 0,
            }}
            exit={{
              translateY: 1000,
            }}
            transition={{
              y: { type: "spring", duration: 0 },
              opacity: { duration: 0.2 },
            }}
          >
            <div className={styles.Content}>
              {!!title && <span className={styles.Title}>{title}</span>}
              <div className={styles.ModalContent}>{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
