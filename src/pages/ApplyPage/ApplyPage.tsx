import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { useCreateApplication } from "../../api/hooks/useCreateApplication";
import { useEventInfo } from "../../api/hooks/useEventInfo";
import { useGetApplications } from "../../api/hooks/useGetApplications";
import { CreateApplication } from "../../api/models/application-model";
import { LoaderIcon } from "../../assets/icons";
import { Form } from "../../components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { usePageTitle } from "../../hooks/usePageTitle";
import { Applications, EventInfo, MemberForm } from "./components";
import { MessageBox } from "./components/MessageBox/MessageBox";

export const ApplyPage = () => {
  const { id } = useParams();
  const { event, isLoading } = useEventInfo(id);
  const methods = useForm<CreateApplication>({
    values: {
      event: id || "",
      team: "",
      members: [],
    },
  });

  const applications = useGetApplications(id);
  const { application, createApplication, isSuccess, isApplicationCreating } =
    useCreateApplication();

  useFieldArray({ control: methods.control, name: "members" });
  usePageTitle(event?.title);

  if (isLoading) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoaderIcon width={32} fill="#6c757d" />
      </div>
    );
  }

  if (!event) {
    return null;
  }

  const handleCreateApplication = (data: CreateApplication) => {
    createApplication(data);
  };

  const teamMembers = new Array(event.team_size).fill(0).map((_, i) => i);

  return (
    <>
      <EventInfo event={event} />

      {application && isSuccess && (
        <MessageBox
          title="Ваша заявка принята, спасибо!"
          text="Следите за объявлениями по мероприятиям в группах и чатах организатора. Также можете посмотреть все поданные заявки здесь"
        />
      )}

      {!application &&
        applications.length < event.max_applications &&
        event.accept_applications && (
          <FormProvider {...methods}>
            <Form
              title="Заявка участника"
              description="Придумайте название команды и заполните необходимые поля для участия в мероприятии "
              onSubmit={methods.handleSubmit(handleCreateApplication)}
            >
              {event.team_size !== 1 && (
                <Input
                  placeholder="Название команды"
                  {...methods.register("team", {
                    required: event.team_size !== 1,
                  })}
                />
              )}
              {teamMembers.map((index) => (
                <MemberForm key={index} index={index} />
              ))}
              {!methods.formState.isValid && (
                <div className="error">Все поля должны быть заполнены</div>
              )}
              <Button
                label="Отправить заявку"
                disabled={!methods.formState.isValid}
                loading={isApplicationCreating}
              />
            </Form>
          </FormProvider>
        )}

      <Applications
        applications={applications}
        current={application?.id}
        count={event.max_applications}
      />

      <div style={{ fontSize: 10, color: "#adb5bd", padding: 24 }}>
        Используя сайт, вы автоматически соглашаетесь на обработку и хранение
        персональных данных (а именно Фамилия, Имя, Класс участника (-ов))
      </div>
    </>
  );
};
