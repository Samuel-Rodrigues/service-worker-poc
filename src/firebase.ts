import { initializeApp } from "@firebase/app";
import { getMessaging, getToken, onMessage } from "@firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyANZM_I432AU3wQ--7QMjZ58J6rDyHgoYw",
  authDomain: "dpsp-poc-1a7fd.firebaseapp.com",
  projectId: "dpsp-poc-1a7fd",
  storageBucket: "dpsp-poc-1a7fd.appspot.com",
  messagingSenderId: "116818835890",
  appId: "1:116818835890:web:1a04ea29e719354883ccab",
  measurementId: "G-HJWGQ8B5XV",
};

const fireBaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(fireBaseApp);

const setupNotifications = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const token = await getToken(messaging);
      console.log("FCM Token:", token);
    } else {
      console.log("Notification permission denied.");
    }
    onMessage(messaging, (payload) => {
      console.log("Foreground Message:", payload);
    });
  } catch (error) {
    console.error("Error setting up notifications:", error);
  }

  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
  });
};

export { messaging, setupNotifications };
