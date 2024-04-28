import { EditIcon } from "@/assets/icons";
import { Avatar, Button, Card } from "@/components";

export const ProfilePage = () => {
  return (
    <>
      <Card
        icon={<Avatar name="Иванов Алексей" />}
        action={
          <Button
            icon={<EditIcon fill="#ffffff" />}
            label="Редактировать"
            compact
          />
        }
        title="Иванов Алексей"
        text="Ваш профиль"
      >
        <div
          style={{
            height: 120,
            background: "#e9ecef",
            borderRadius: 16,
          }}
        ></div>
      </Card>
    </>
  );
};
