# DarkDev.js ne işe yarıyor? | Darkdev.js what does it do?

🇹🇷 DarkDev.js yardımcı olma amaçlı *basit* bir modüldür.
🇺🇸 DarkDev.js is a *simple* module to help.

# Kurulum

`npm i DarkDev.js`

# Sonra... | Then...

# NumberToEmoji
```
const { NumberToEmoji } = require('DarkDev.js')

NumberToEmoji(message.guild.memberCount) // Varsayılan | Default: 3️⃣1️⃣

// "Eğer isterseniz | If you want"

const { NumberToEmoji } = require('DarkDev.js')

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

## İçindekiler

DarkDev.js 1 seçenek destekliyor. | DarkDev.js supporting 1 option. Bunlar;

* *_NumberToEmoji_* - Sayıları emojiye çevirir. | Convert numbers to emoji.
