import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import axios from "axios";
import http from "http";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Stocks: React.FC = () => {
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState(null);
  async function stockSearch() {
    const res = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${stock}/prev?adjusted=true&apiKey=N0xYH0QttgysqIJbFSkIt6xAn1OqefEt`);
    if (res.data != null) {
      setPrice(res.data.results[0].c);
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stock Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Stock Name?"
          onIonChange={(e: any) => setStock(e.target.value)}
        />
        <IonButton onClick={stockSearch}>Search</IonButton>
        { price != null && 
         <IonCard>
          <IonText>{stock}: {price}</IonText>
         </IonCard>
        }
      </IonContent>
    </IonPage>
  );
};

export default Stocks;
