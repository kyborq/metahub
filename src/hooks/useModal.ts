import { useEffect, useState } from "react";

export type ModalState = {
  visible: boolean;
  close: () => void;
  open: () => void;
  toggle: () => void;
};

export const useModal = (initialValue?: boolean): ModalState => {
  const [visible, setVisible] = useState(initialValue || false);

  const close = () => setVisible(false);
  const open = () => setVisible(true);
  const toggle = () => setVisible((v) => !v);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  return {
    visible,
    close,
    open,
    toggle,
  };
};
