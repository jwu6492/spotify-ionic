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
import { toast } from "../toast";
import { registerUser } from "../firebaseConfig";
import "./Tab1.css";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  async function register() {
    if (password !== cpassword) {
      return toast("Passwords do not match");
    }
    if (username.trim() === "" || password.trim() === "") {
      return toast("Username and password are required");
    }
    const res = await registerUser(username, password);
    if (res) {
      toast("You have successfully registered!");
      window.history.replaceState({}, "", "/Login");
      window.location.reload();
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
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
        <IonInput
          type="password"
          placeholder="Confirm Password?"
          onIonChange={(e: any) => setCPassword(e.target.value)}
        />
        <IonButton onClick={register}>Register</IonButton>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
