var mqtt=require('mqtt');
var client=mqtt.connect('https://test.mosquitto.org/');
var topic='LIGHT';
client.on('message',(topic,message)=>{
    message=message.toString();
    console.log("Subscriber1:"+message);
})
client.on('connect',()=>{
    client.subscribe(topic);
})