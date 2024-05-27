import React, { useEffect } from "react";
import { Button } from "./components/ui/button";
import "./global.css";
import {
  sendNativeNotification,
  toastNotification,
} from "./notificationHelpers";
import { setupNotifications } from "./firebase";
import useVisibilityChange from "./useVisibilityChange";

export function App() {
  const isForeground = useVisibilityChange();
  useEffect(() => {
    setupNotifications(() => {
      if (isForeground) {
        // App is in the foreground, show toast notification
        toastNotification({
          title: "title",
          description: "Description",
          status: "info",
        });
      } else {
        // App is in the background, show native notification
        sendNativeNotification({
          title: "title",
          body: "Description",
        });
      }
    });
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <Button>Enviar agora!</Button>
    </div>
  );
}
