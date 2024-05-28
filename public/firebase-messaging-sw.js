// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyANZM_I432AU3wQ--7QMjZ58J6rDyHgoYw",
  authDomain: "dpsp-poc-1a7fd.firebaseapp.com",
  projectId: "dpsp-poc-1a7fd",
  storageBucket: "dpsp-poc-1a7fd.appspot.com",
  messagingSenderId: "116818835890",
  appId: "1:116818835890:web:1a04ea29e719354883ccab",
  measurementId: "G-HJWGQ8B5XV",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log("Background Message:", payload);
  const notificationTitle = payload.notification.title;

  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);

  self.clients
    .matchAll({ includeUncontrolled: true, type: "window" })
    .then((clients) => {
      clients.forEach((client) => {
        // TODO: Enviar payload apenas para abas do domínio ou localhost
        if (client.url.startsWith("http://localhost:")) {
          console.log("payload", payload);
          console.log("client", client);
          client.postMessage(payload);
        }
      });
    });
});
