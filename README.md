# darkdev.js ne işe yarıyor? | darkdev.js what does it do?

🇹🇷 darkdev.js yardımcı olma amaçlı *basit* bir modüldür.
🇺🇸 darkdev.js is a *simple* module to help.

# Kurulum

`npm i darkdev.js`

# Sonra... | Then...

# Test Start
```js
const DarkDev = require('darkdev.js')
DarkDev(client)

DarkDev('your-magic-token') // Çıktısı | Output;

// Dark Partner#0816 başarıyla başlatıldı ve kapatılıyor. | Dark Partner#0816 succesfully started and now shuting down. 
```

# NumberToEmoji
```js
const { NumberToEmoji } = require('darkdev.js')

NumberToEmoji(message.guild.memberCount) // Varsayılan | Default: 3️⃣1️⃣

// "Eğer isterseniz | If you want"

const { NumberToEmoji } = require('darkdev.js')

NumberToEmoji(message.guild.memberCount,
'<a:zero:675593025468235806>',
'<a:one:675593025468235806>',
'<a:two:675593025468235806>',
'<a:three:675593025468235806>',
'<a:four:675593025468235806>',
'<a:five:675593025468235806>',
'<a:six:675593025468235806>',
'<a:seven:675593025468235806>',
'<a:eight:675593025468235806>',
'<a:nine:675593025468235806>',
'<a:blank:675593025468235806>') // Girilen emoji şeklinde
```

# DarkERR
```js
const { DarkERR } = require('darkdev.js')

client.login('token').catch(DarkERR) // Çıktısı | Output;

// ══════════════════════════════════════════════════════════════════════════════
// │
// │ Uh, olamaz. Bir hata ile karşılaştık. | Uh, it can't be. We encountered an error.
// │
// │ Hata saati | Error time: 31 Temmuz 2021 Cumartesi 13:37
// │
// │ Hata kodu | Error code: x[10000 - 12500]
// │
// │ Hata: Error [TOKEN_INVALID]: An invalid token was provided.
// │
// └────────────────────────────────────

// "Eğer isterseniz | If you want"

const { DarkERR } = require('darkdev.js')

client.login('token').catch(error => DarkERR(error,`Bir hata var. | There is a problem.

{error}`)) // Çıktısı;

// Bir hata var. | There is a problem.
//
// Error [TOKEN_INVALID]: An invalid token was provided.
```

# DarkMS
```js
const { DarkMS } = require('darkdev.js')

console.log(DarkMS(<your-date>)) // Çıktısı | Output;

// {
//		gün: 1,
//		saat: 23,
//		dakika: 59,
//		saniye: 59,
//		milisaniye: 59,
//		mikrosaniye: 59,
//		nanosaniye: 59
//	}

})

```
## İçindekiler

darkdev.js 4 seçenek destekliyor. | darkdev.js supporting 4 option. Bunlar;

* *_DarkDev_* - Botunuzu test olarak çalıştırın. | Start your bot for test.
* *_NumberToEmoji_* - Sayıları emojiye çevirir. | Convert numbers to emoji.
* *_DarkERR_* - Hata mesajınızı özelleştirin. | Customize your error message.
* *_DarkMS_* - "parse-ms" modülünün türkçe basit hali. | "parse-ms" module simple version.
