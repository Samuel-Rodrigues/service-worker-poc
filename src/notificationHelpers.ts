export const toastNotification = ({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: "info" | "warning" | "error";
}) => {
  console.log(`Toast Notification: ${title} - ${description} - ${status}`);
};

export const sendNativeNotification = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => {
  console.log(`Native Notification: ${title} - ${body}`);
};
