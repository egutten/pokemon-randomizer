const pokemonList = [
  'Eeevee',
  'Sandshrew',
  'Squirtle',
  'Hoppip',
  'Sellder',
  'Psyduck',
  'Flareon',
  'Polywag',
  'Dratini',
  'Vulpix',
  'Oddish',
  'Hoothoot',
  'Nidorina',
  'Onyx',
  'Quilava',
  'Alakazam',
  'Houndoom',
  'Cyndaquil',
  'Skiploom',
  'Jumpluff',
  'Polywhirl',
  'Vaporeon',
  'Shuckle',
  'Raikou',
  'Chinchou',
  'Phanpy',
  'Pikachu (inquisitive)',
  'Girafarig',
  'Bellossom',
  'Vileplume',
  'Snorlax',
  'Articuno',
  'Gloom',
  'Mew',
  'Squirtle',
  'Starme',
  'Staryu',
  'Ampharos',
  'Furret',
  'Pikachu (sneeze)',
  'Jolteon',
  'Jigglypuff',
  'Seel',
  'Swinub',
  'Mareep',
  'Charmander',
  'Pikachu (peace)',
  'Pikachu (normal derp)',
  'Sandslash',
  'Umbreon',
  'Flaffy',
  'Zapdos',
  'Togepi',
  'Mewtwo',
  'Jigglypuff (light-up)'
]

const button = document.getElementById('pick-pokemon').onclick = function(){
  const random = Math.floor(Math.random() * pokemonList.length)
  const result = document.getElementById('result')
  result.innerHTML = pokemonList[random]
}