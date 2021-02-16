var mqtt=require('mqtt');
var client=mqtt.connect('https://test.mosquitto.org/');
var topic='AC';
client.on('message',(topic,message)=>{
    message=message.toString();
    console.log("Subscriber2:"+message);
})
client.on('connect',()=>{
    client.subscribe(topic);
})