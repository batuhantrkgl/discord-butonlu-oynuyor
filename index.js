var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Basic Developer For Discord.",
assets : {
large_image : "3",
large_text : "Batuhan Türkoğlu#2882",
small_image : "github",
small_text : "Github Logo"
},
buttons : [{label : "Github" , url : "https://github.com/batuhantrkgl"}, {label : "Twitch" , url : "https://www.twitch.tv/batuhantrkgl"}]
}
})
})
console.log("Giriş Yapıldı!")
client.login({ clientId : "123456789012345678" }).catch(console.error);
