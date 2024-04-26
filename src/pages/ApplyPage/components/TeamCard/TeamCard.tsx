import { useForm } from "react-hook-form";

import { useUpdateApplication } from "../../../../api/hooks/useUpdateApplication";
import { Application } from "../../../../api/models/application-model";
import { CreateMember } from "../../../../api/models/member-model";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { useModal } from "../../../../hooks/useModal";
import styles from "./TeamCard.module.css";

type Props = {
  application: Application;
  max: number;
};

export const TeamCard = ({ application, max }: Props) => {
  const { register, handleSubmit } = useForm<CreateMember>();
  const joinModal = useModal();
  const { editApplication, isLoading } = useUpdateApplication(() => {
    console.log("успешный успех");
    joinModal.close();
  });

  const submitMember = (data: CreateMember) => {
    editApplication({ application, member: data });
  };

  return (
    <div className={styles.TeamCard}>
      <h4 className={styles.Title}>
        {application.team}{" "}
        {(application.no_other_members ||
          application.members.length >= max) && (
          <span style={{ fontSize: 13, color: "#c7c7c7", marginLeft: 12 }}>
            Мест нет
          </span>
        )}
        {!application.no_other_members && application.members.length < max && (
          <span style={{ fontSize: 13, color: "#c7c7c7", marginLeft: 12 }}>
            {application.members.length} из {max}
          </span>
        )}
      </h4>
      <div className={styles.Members}>
        {!!application.expand.members.length &&
          application.expand.members.map((member) => (
            <div className={styles.Member}>
              <div className={styles.Avatar}>
                {member.name
                  .split(" ")
                  .map((a) => a[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <span className={styles.Name}>
                {member.name} ({member.grade})
              </span>
            </div>
          ))}
        {!application.no_other_members && application.members.length < max && (
          <button className={styles.Join} onClick={joinModal.open}>
            Записаться
          </button>
        )}
      </div>

      <Modal
        state={joinModal}
        title={`Присоединиться к команде "${application.team}"`}
      >
        <Input
          placeholder="Ваше имя и фамилия"
          {...register("name", { required: true })}
        />
        <Input placeholder="Класс" {...register("grade", { required: true })} />
        <div style={{ flex: 1 }}></div>
        <div className={styles.Message}>
          Не забудьте спросить у участника{" "}
          <span style={{ fontWeight: "bold" }}>
            {application.expand.members[0].name}
          </span>{" "}
          разрешение на участие в команде!
        </div>
        <Button
          label="Присоединиться"
          onClick={handleSubmit(submitMember)}
          loading={isLoading}
        />
      </Modal>
    </div>
  );
};
