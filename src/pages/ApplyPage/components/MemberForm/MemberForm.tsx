import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/Input";
import styles from "./MemberForm.module.css";

type Props = {
  index: number;
};

export const MemberForm = ({ index }: Props) => {
  const { register, unregister } = useFormContext();

  useEffect(() => {
    return () => {
      unregister(`members.${index}`);
    };
  }, []);

  return (
    <div className={styles.Form}>
      <div className={styles.Content}>
        <span className={styles.Label}>Участник №{index + 1}</span>
        <div className={styles.Fields}>
          <Input
            className={styles.Flex}
            placeholder="Круглов Ваня"
            {...register(`members.${index}.name`, {
              required: true,
            })}
          />
          <Input
            placeholder="Класс"
            {...register(`members.${index}.grade`, {
              required: true,
            })}
          />
        </div>
      </div>
    </div>
  );
};
