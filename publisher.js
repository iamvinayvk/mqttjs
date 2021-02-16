var mqtt=require('mqtt');
var client=mqtt.connect('https://test.mosquitto.org/');
var topic1='LIGHT';
var topic2='AC';
var message1="Light is On";
var message2="AC is On";
client.on('connect',()=>{
    setInterval(()=>{
        client.publish(topic1,message1);
        client.publish(topic2,message2);
        console.log("mesaage1:"+message1);
        console.log("mesaage2:"+message2);
    },3000)
})
// client.on('connect',()=>{
//     client.subscribe(topic);
// })