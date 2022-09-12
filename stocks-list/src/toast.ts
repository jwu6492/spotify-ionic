import { toastController } from "@ionic/core";


export async function toast(message: string) {
    const toast = await toastController.create({
        message: message,
        duration: 2000,
      });
  
      await toast.present();
}