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
// Customize background notification handling here
messaging.onBackgroundMessage((payload) => {
  console.log("Background Message:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
