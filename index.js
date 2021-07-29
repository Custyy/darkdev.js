function NumberToEmoji(number,zero,one,two,three,four,five,six,seven,eight,nine,blank) {
const Emotes = {
  ' ': blank ? blank : '   ',
  '0': zero ? zero : ':zero:',
  '1': one ? one: ':one:',
  '2': two ? two : ':two:',
  '3': three ? three : ':three:',
  '4': four ? four : ':four:',
  '5': five ? five : ':five:',
  '6': six ? six : ':six:',
  '7': seven ? seven : ':seven:',
  '8': eight ? eight : ':eight:',
  '9': nine ? nine : ':nine:',
}
return number.toString().split('').map(Aventadoria => Emotes[Aventadoria] || Aventadoria).join('')
}

module.exports.NumberToEmoji = NumberToEmoji