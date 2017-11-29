
const webpush = require('web-push')

main(); 

function main(){
    webpush.setVapidDetails(
        'mailto:john.gorter@gmail.com',
        'BKj_k9YvI3q03M3qUSs-Tq4BPfm8Wil1MAJqfMgRA56P8w2MjwSqvssR6j1XmOyTg8C-N4UkqrOW3DoooTS0MyY',
        'VpLcO6-15pgJucxXq-zMxdrSTA7k32YEuxvdOtnKjRA'
      );

      const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cgxietpCiAY:APA91bG-UXjnQnTchg0AboRQhBOTiu6KWjb7bHE-Cs96oeZDEV809K-OVVfN7eLXgP_R4ix5i1Z5KoJ66UbFRcs0Ose6rRmMPVf7PVMcYoNwGrT62uQKm8rIz7bUxMokgaOcQOihru2q","expirationTime":null,"keys":{"p256dh":"BLRDIUHN6dKvkjK83nvWsHythZkPJA_MYdVYuHm_hnuImH0dceADJSIjhDrADJ86bEPJ5dnpDJ7R7MCiKQQ_Tjg=","auth":"kSIHog4UOG909GiSOiDYCw=="}};
      
      setInterval(() => {
          console.log('pushing a notification');
          webpush.sendNotification(pushSubscription, 'Your Push Payload Text'); 
    }, 2000); 
}
