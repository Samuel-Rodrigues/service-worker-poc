type NotificationType = {
  notification: {
    title: string;
    body: string;
  };
};

/**
 * Registra o service worker para notificações push.
 */
export const register = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Error registering service worker:", error);
      });
  }
};

/**
 * Registra um ouvinte de evento para mensagens recebidas do Service Worker.
 * @param setNotification - Função dispatch quando houver novo notificação.
 */
export const serviceWorkerEventListener = (
  setNotification: React.Dispatch<React.SetStateAction<NotificationType>>
) => {
  navigator.serviceWorker.addEventListener(
    "message",
    ({ data }: MessageEvent<NotificationType>) => {
      if (!data) return;
      setNotification(data);
      console.log("Menssagem recebida do SW:", data);
    }
  );
};
