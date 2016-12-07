const DashButton = require("dash-button"); 
const request = require('superagent');

// フィジカルアドレス指定
const PHY_ADDR = "アドレス"; 

let button = new DashButton(PHY_ADDR); 

console.log("ボタンおして");

/*
  以下が発火するイベント
*/
button.addListener(() => {
  console.log(new Date() + "動いたー＼(^o^)／");
//   request
//     .post('https://notify-api.line.me/api/notify')
//     .field('message', 'ぴかてう')
//     .attach('imageFile', './img/pika.jpg')
//     .set('Authorization', 'Bearer とーくん')
//     .end(function(err, res){
//         if (res.ok) {
//             console.log(res);
//             console.log('success');
//         } else {
//             console.log(err);
//         }
//         console.log('完了');
//   });
  request
    .post('https://notify-api.line.me/api/notify')
    .type('form')
    .send({ message: 'おやすみなさい' })
    .set('Authorization', 'Bearer とーくん')
    .end(function(err, res){
        if (res.ok) {
            console.log(res);
            console.log('success');
        } else {
            console.log(err);
        }
        console.log('完了');
  });

});