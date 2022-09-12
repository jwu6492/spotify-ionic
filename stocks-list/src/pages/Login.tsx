import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Tab1.css";
import { loginUser } from "../firebaseConfig";
import { toast } from "../toast";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await loginUser(username, password);
    if (!res) {
      toast("Error logging with your credentials");
    } else {
      window.history.replaceState({}, "", "/stocks");
      toast("You have successfully logged in!");
      window.location.reload();
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Username?"
          onIonChange={(e: any) => setUsername(e.target.value)}
        />
        <IonInput
          type="password"
          placeholder="Password?"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonButton onClick={login}>Login</IonButton>
        <p>
          New here? <Link to="/Register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
