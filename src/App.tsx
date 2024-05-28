import React, { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import "./global.css";
import { ProgressBar } from "./components/ProgressBar";
import { ChartConnect } from "./components/ChartConnect";
import {
  sendNativeNotification,
  toastNotification,
} from "./notificationHelpers";
import { setupNotifications } from "./firebase";
import useVisibilityChange from "./useVisibilityChange";
import { serviceWorkerEventListener } from "./serviceWorker";

type NotificationType = {
  notification: {
    title: string;
    body: string;
  };
};

export function App() {
  const [notification, setNotification] = useState<NotificationType>(
    {} as NotificationType
  );

  const clearNotification = () => setNotification({} as NotificationType);

  serviceWorkerEventListener(setNotification);

  // const isForeground = useVisibilityChange();

  useEffect(() => {
    setupNotifications();
    // if (isForeground) {
    //   // App is in the foreground, show toast notification
    //   toastNotification({
    //     title: "title",
    //     description: "Description",
    //     status: "info",
    //   });
    // } else {
    //   // App is in the background, show native notification
    //   sendNativeNotification({
    //     title: "title",
    //     body: "Description",
    //   });
    // }
  }, []);

  return (
    <>
      <ChartConnect />
      <div className="flex justify-center items-center h-screen flex-col border-r-amber-700">
        {notification?.notification ? (
          <>
            <h1 className="mb-4 font-medium">
              {notification?.notification?.title}
            </h1>
            <p>{notification?.notification?.body}</p>
            <Button
              className="mt-8 bg-cyan-500 p-2"
              onClick={clearNotification}
            >
              Limpar
            </Button>
          </>
        ) : (
          <>
            {/* <ProgressBar orientation="VERTICAL" percentage={100} /> */}
            <h1>Sem notificações no momento.</h1>
          </>
        )}
      </div>
    </>
  );
}
