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
import "./Tab1.css";
import { toast } from "../toast";

const Stocks: React.FC = () => {
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState(null);
  function reset() {
    setStock("");
    setPrice(null);
  }
  async function stockSearch() {
    const res = await axios.get(
      `https://api.polygon.io/v2/aggs/ticker/${stock}/prev?adjusted=true&apiKey=N0xYH0QttgysqIJbFSkIt6xAn1OqefEt`
    );
    if (res.status != 200) {
      toast(
        "Could not retreive stock data, please make sure you entered in the symbol correctly"
      );
    }
    if (res.data != null) {
      setPrice(res.data.results[0].c);
      toast("Successfully search for the stock");
    } else {
      toast("Unsuccess search for the stock");
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
          onIonChange={(e: any) => {
            setStock(e.target.value);
            if (e.target.value === "") {
              setPrice(null);
            }
          }}
        />
        <IonButton onClick={stockSearch}>Search</IonButton>
        <IonButton onClick={reset}>Clear Search</IonButton>
        {price != null && (
          <IonCard>
            <IonText>
              {stock}: {price}
            </IonText>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Stocks;
