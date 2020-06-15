/* Constructor Function for all Pokemon */

function Pokemon(ID,NAME,TYPE,ABILITY,HP,ATK,DEF,SPATK,SPDEF,SPE,MOVES) {
  this.ID = ID;
  this.NAME = NAME;
  this.TYPE = TYPE;
  this.ABILITY = ABILITY;
  this.stats = {
    HP:HP,
    ATK:ATK,
    DEF:DEF,
    SPATK:SPATK,
    SPDEF:SPDEF,
    SPE:SPE
  };
  this.MOVES = MOVES; // {Level:Move Name Key Value Pair
};




/* Master Dex */

var dex = [];


/* All Pokemon Additions */

// Chikorita
dex.push(new Pokemon('001','bud', ['grass'], ['overgrow', 'solar power'], 55, 45, 50, 65, 55, 65, []));
// Bayleef
dex.push(new Pokemon('002','blossomole', ['grass'], ['overgrow', 'solar power'], 65, 50, 60, 95, 85, 35, []));
// Meganium
dex.push(new Pokemon('003','blossomite', ['grass', 'dragon'], ['overgrow', 'solar power'], 90, 64, 70, 124, 100, 75, ['giga drain', 'leech seed', 'synthesis', 'leaf storm', 'solar beam', 'body slam', 'dragon pulse', 'draco meteor', 'glare', 'earth power', 'growth', 'sunny day']));
// Honooguma
dex.push(new Pokemon('004','flambear', ['fire', 'normal'], ['blaze', 'reckless'], 45, 55, 42, 50, 60, 45, []));
// Borubeaa
dex.push(new Pokemon('005','volbear', ['fire', 'normal'], ['blaze', 'reckless'], 65, 75, 52, 60, 70, 75, []));
// Dianabea
dex.push(new Pokemon('006','dynabear', ['fire', 'normal'], ['blaze', 'reckless'], 85, 105, 82, 70, 90, 95, ['flamethrower', 'fire blast', 'work up', 'flame charge', 'hyper voice', 'double edge', 'flare blitz', 'agility', 'swords dance', 'thunder fang', 'fire fang', 'superpower', 'extremespeed', 'u-turn']));
// Kurusu
dex.push(new Pokemon('007','cruuz', ['water'], ['torrent', 'swift swim'], 45, 40, 65, 75, 60, 25, []));
// Akua
dex.push(new Pokemon('008','aquadine', ['water'], ['torrent', 'swift swim'], 65, 55, 75, 105, 70, 45, []));
// Akueria
dex.push(new Pokemon('009','aquaria', ['water', 'dark'], ['torrent', 'swift swim'], 85, 60, 95, 130, 90, 65, ['hydro pump', 'scald', 'rain dance', 'dark pulse', 'ice beam', 'nasty plot', 'recover', 'water spout', 'foul play', 'icy wind', 'surf', 'perish song']));
// Sentret
dex.push(new Pokemon('010','meerdrop', ['normal', 'poison'], ['run away', 'adaptability'], 35, 35, 45, 46, 34, 20, []));
// Furret (Phys / Special stats swapped)
dex.push(new Pokemon('011','surigum', ['normal', 'poison'], ['run away', 'adaptability'], 85, 45, 55, 76, 64, 90, ['double edge', 'hyper voice', 'hyper beam', 'sludge bomb', 'sludge wave', 'dazzling gleam', 'nasty plot', 'agility', 'dark pulse', 'u-turn', 'shadow ball']));
// Unihoot
dex.push(new Pokemon('012','unihoot', ['normal', 'flying'], ['insomnia', 'aerilate'], 50, 46, 30, 16, 56, 70, []));
// Solehunt
dex.push(new Pokemon('013','solehunt', ['normal', 'flying'], ['insomnia', 'aerilate'], 75, 126, 55, 46, 86, 110, ['brave bird', 'swords dance', 'double edge', 'hypnosis', 'acrobatics', 'return', 'frustration', 'night slash', 'aerial ace']));
// Natu
dex.push(new Pokemon('014','natu', ['psychic'], ['magic bounce', 'keen eye'], 40, 50, 45, 70, 45, 70, []));
// Yatu
dex.push(new Pokemon('015','yatu', ['psychic'], ['magic bounce', 'keen eye'], 50, 60, 55, 80, 65, 85, []));
// Xatu
dex.push(new Pokemon('016','xatu', ['psychic'], ['magic bounce', 'keen eye'], 65, 75, 70, 95, 70, 95, []));
// Midoba
dex.push(new Pokemon('017','midoba', ['bug'], ['swarm', 'early bird'], 35, 50, 20, 30, 50, 85, []));
// Tripstar
dex.push(new Pokemon('018','tripstar', ['bug'], ['swarm', 'early bird'], 65, 75, 50, 45, 80, 115, []));
// Braizeng
dex.push(new Pokemon('019','braizeng', ['bug', 'fighting'], ['swarm', 'early bird'], 70, 115, 65, 50, 85, 140, []));
// Moziya
dex.push(new Pokemon('020','moziya', ['fire'], ['flash fire', 'run away'], 45, 65, 50, 45, 40, 70, []));
// Fynx
dex.push(new Pokemon('021','fynx', ['fire'], ['flash fire', 'run away'], 65, 80, 60, 55, 60, 90, []));
// Moziyon
dex.push(new Pokemon('022','moziyon', ['fire'], ['flash fire', 'moxie'], 85, 120, 70, 70, 85, 110, []));
// Quancelet
dex.push(new Pokemon('023','quancelet', ['water'], ['sap sipper', 'storm drain'], 55, 75, 60, 45, 50, 30, []));
// Qlancish
dex.push(new Pokemon('024','qlancish', ['water', 'ground'], ['sap sipper', 'storm drain'], 95, 105, 125, 65, 60, 40, ['recover', 'curse', 'muddy water', 'scald', 'earth power', 'earthquake', 'toxic']));
// Spidette
dex.push(new Pokemon('025','spidette', ['bug', 'ghost'], ['pressure', 'triage'], 35, 65, 85, 55, 60, 45, []));
// Tuhead
dex.push(new Pokemon('026','tuhead', ['bug', 'ghost'], ['pressure', 'triage'], 65, 80, 122, 65, 85, 55, ['strength sap', 'shadow sneak', 'bug bite', 'sticky web', 'shadow claw', 'u-turn', 'curse', 'toxic', 'swords dance']));
// Feniti
dex.push(new Pokemon('027','feniti', ['bug'], ['shield dust', 'fur coat'], 45, 65, 100, 35, 85, 20, []));
// Padefuerza
dex.push(new Pokemon('028','padefuerza', ['bug', 'flying'], ['sheild dust', 'tinted lens'], 65, 70, 50, 120, 90, 95, []));
// Bluncy
dex.push(new Pokemon('029','bluncy', ['normal'], ['magic guard', 'cute charm'], 70, 35, 5, 50, 15, 12, []));
// Bloonder
dex.push(new Pokemon('030','bloonder', ['normal'], ['magic guard', 'static'], 180, 50, 15, 120, 75, 92, []));
// Pibu
dex.push(new Pokemon('031','pibu', ['normal'], ['conductor', 'lightningrod'], 25, 35, 35, 45, 15, 60, []));
// Pibu-combined
dex.push(new Pokemon('032','pibu-combined', ['normal', 'electric'], ['conductor', 'lightningrod'], 30, 45, 40, 55, 25, 75, []));
// Krubble
dex.push(new Pokemon('033','krubble', ['water', 'rock'], ['sticky hold', 'water bubble'], 45, 50, 30, 50, 55, 40, []));
// Krigid
dex.push(new Pokemon('034','krigid', ['water', 'rock'], ['sticky hold', 'water bubble'], 65, 70, 40, 70, 75, 60, []));
// Krabyss
dex.push(new Pokemon('035','krabyss', ['water', 'rock'], ['sticky hold', 'water bubble'], 85, 105, 70, 105, 95, 80, ['hydro pump', 'scald', 'ancientpower', 'earth power', 'icy wind', 'blizzard', 'liquidation', 'waterfall', 'stone edge', 'toxic', 'shell smash', 'stealth rock', 'spikes']));
// Smola
dex.push(new Pokemon('036','smola', ['water'], ['serene grace', 'regenerator'], 50, 45, 50, 45, 55, 75, []));
// Manboo
dex.push(new Pokemon('037','manboo', ['water'], ['serene grace', 'regenerator'], 75, 55, 70, 65, 75, 85, []));
// Manbomola
dex.push(new Pokemon('038','manbomola', ['water', 'dark'], ['serene grace', 'regenerator'], 105, 65, 80, 75, 90, 89, ['scald', 'body slam', 'recover', 'toxic', 'heal bell', 'memento', 'light screen', 'reflect', 'wish']));
// Anchorage
dex.push(new Pokemon('039','anchorage', ['water', 'steel'], ['strong jaw', 'steelworker'], 55, 114, 100, 40, 60, 78, []));
// Mankora
dex.push(new Pokemon('040','mankora', ['water', 'steel'], ['strong jaw', 'steelworker'], 75, 144, 110, 60, 70, 81, ['iron head', 'waterfall', 'liquidation', 'crunch', 'ice fang', 'anchor shot', 'agility']));
// Mokuchow
dex.push(new Pokemon('041','mokuchow', ['water'], ['illuminate', 'hydration'], 46, 45, 60, 75, 70, 68, []));
// Lunchen
dex.push(new Pokemon('042','lunchen', ['water'], ['illuminate', 'hydration'], 76, 55, 90, 105, 80, 78, []));
// Grotesk
dex.push(new Pokemon('043','grotesk', ['dark', 'water'], ['adaptability', 'volt absorb'], 55, 50, 45, 75, 60, 72, []));
// Crevangler
dex.push(new Pokemon('044','crevangler', ['dark', 'water'], ['adaptability', 'volt absorb'], 70, 70, 60, 115, 80, 90, ['scald', 'sludge bomb', 'dark pulse', 'nasty plot', 'thunderbolt', 'glare', 'volt switch']));
// Turbann
dex.push(new Pokemon('045','turbann', ['water'], ['shell armor', 'stamina'], 80, 100, 110, 40, 80, 5, []));
// Maroma
dex.push(new Pokemon('046','maroma', ['fairy'], ['huge power', 'sap sipper'], 40, 50, 20, 50, 20, 70, []));
// Maraider
dex.push(new Pokemon('047','maraider', ['fairy', 'fighting'], ['huge power', 'sap sipper'], 60, 75, 60, 75, 60, 84, ['play rough', 'belly drum', 'knock off', 'superpower', 'drain punch', 'liquidation', 'ice punch', 'fire punch', 'thunder punch', 'low kick', 'low sweep', 'agility']));
// Koipin
dex.push(new Pokemon('048','koipin', ['water'], ['swift swim', 'water veil', 'lightning rod'], 25, 47, 40, 25, 30, 43, []));
// Glob
dex.push(new Pokemon('049','glob', ['poison', 'normal'], ['stench', 'poison touch'], 50, 50, 30, 20, 30, 15, []));
// Kangaskhid
dex.push(new Pokemon('050','kangaskhid', ['normal'], ['early bird', 'scrappy'], 85, 70, 60, 20, 60, 70, []));
// Tangel
dex.push(new Pokemon('051','tangel', ['grass'], ['regenerator', 'chlorophyll'], 45, 25, 85, 70, 20, 40, []));
// Gelanla
dex.push(new Pokemon('052','gelanla', ['grass'], ['regenerator', 'chlorophyll'], 85, 80, 120, 95, 100, 75, []));
// Pii
dex.push(new Pokemon('053','pii', ['normal'], ['magic guard', 'unaware'], 95, 15, 55, 60, 75, 25, []));
// Hupii
dex.push(new Pokemon('054','hupii', ['normal'], ['magic guard', 'unaware'], 140, 25, 70, 95, 90, 40, []));
// Breyer
dex.push(new Pokemon('055','breyer', ['posion','rock'], ['stupefy (custom: halve enemy speed)', 'corrosion'], 85, 80, 82, 80, 82, 55, []));
// Terratoma
dex.push(new Pokemon('056','terratoma', ['flying', 'ground'], ['sand rush', 'reckless'], 55, 122, 65, 45, 54, 114, []));
// Ponchama
dex.push(new Pokemon('057','ponchama', ['ice'], ['refrigerate', 'unaware'], 125, 130, 80, 85, 40, 75, []));
// Weirduck
dex.push(new Pokemon('058','weirduck', ['psychic'], ['psychic surge'], 80, 45, 76, 100, 90, 86, []));
// Cypsilia
dex.push(new Pokemon('059','cypsilia', ['grass'], ['chlorophyll', 'solar power'], 45, 15, 45, 55, 40, 35, []));
// Sunnee
dex.push(new Pokemon('060','sunnee', ['grass', 'psychic'], ['chlorophyll', 'solar power'], 45, 15, 45, 255, 40, 35, ['psychic', 'future sight', 'energy ball', 'giga drain', 'grass knot', 'earth power', 'psyshock', 'solar beam', 'weather ball', 'substitute', 'leech seed']));
// Yinyangle
dex.push(new Pokemon('061','yinyangle', ['dark', 'normal'], ['levitate'], 66, 88, 77, 99, 66, 111, ['body slam', 'dark pulse', 'crunch', 'roost', 'knock off', 'snarl', 'toxic', 'protect', 'return', 'frustration', 'nasty plot', 'hyper beam']));
// Blastyke
dex.push(new Pokemon('062','blastyke', ['water'], ['torrent', 'water veil'], 70, 75, 80, 65, 70, 50, []));
// Tortartle
dex.push(new Pokemon('063','tortartle', ['water'], ['torrent','water veil'], 110, 115, 100, 70, 85, 60, []));
// UNNAMED
dex.push(new Pokemon('064','UNNAMED', ['normal'], ['adaptability'], 100, 85, 70, 55, 75, 78, []));
// Wylabell
dex.push(new Pokemon('065','wylabell', ['grass', 'psychic'], ['wonder skin', 'prankster'], 110, 70, 80, 50, 60, 120, ['leaf blade', 'swords dance', 'psycho cut', 'sleep powder', 'synthesis', 'knock off', 'razor leaf', 'curse']));
// Enlebi
dex.push(new Pokemon('894','enlebi', ['psychic'], ['pressure'], 100, 100, 100, 100, 100, 100, []));
// Enlebi-unbound
dex.push(new Pokemon('895','enlebi-u', ['psychic', 'fairy'], ['divine song (custom: powers up psychic and fairy type moves by 1.5x)'], 100, 110, 90, 115, 90, 135, []));
// Misingno
dex.push(new Pokemon('896','missingno', ['glitch', 'bird'], [], 178, 140, 10, 80, 40, 54, []));
// M
dex.push(new Pokemon('897','missingno', ['glitch', 'bird'], [], 178, 140, 10, 80, 40, 54, []));
// XFKLJAJP8
dex.push(new Pokemon('898','missingno', ['glitch', 'bird'], [], 178, 140, 10, 80, 40, 54, []));
// Missingno-water
dex.push(new Pokemon('899','missingno', ['glitch', 'bird'], [], 178, 140, 10, 80, 40, 54, []));
// Missingno-rock
dex.push(new Pokemon('900','missingno', ['glitch', 'bird'], [], 178, 140, 10, 80, 40, 54, []));
// THUFIZER
dex.push(new Pokemon('901','thufizer', ['glitch', 'bird'], [], 178, 140, 10, 80, 40, 54, []));
// Gorochu
dex.push(new Pokemon('902','gorochu', ['electric', 'fighting'], ['conductor'], 90, 130, 75, 110, 95, 100, ['power surge', 'knock off', 'close combat', 'ice punch', 'volt switch', 'superpower', 'swords dance', 'thunderbolt', 'thunder', 'thunder wave', 'volt tackle']));

/* ADDING IN FUTURE UPDATE
  // Dunsparce (I like the idea of this being a regional)
  dex.push(new Pokemon('dunsparce', ['ground'], ['serene grace', 'water absorb'], 100, 70, 70, 65, 65, 45, []));
  // Dunspear
  dex.push(new Pokemon('dunspear', ['ground'], ['serene grace', 'water absorb'], 115, 85, 85, 70, 70, 55, []));
  // Dunspire
  dex.push(new Pokemon('dunspire', ['ground', 'dragon'], ['serene grace', 'water absorb'], 140, 125, 95, 80, 80, 60, []));
  // Dunsplat
  dex.push(new Pokemon('dunsplat', ['ground'], ['serene grace', 'water absorb'], 50, 155, 15, 95, 65, 45, []));


  // Missingno (GLITCH / BIRD)
  dex.push(new Pokemon('missingno', ['glitch', 'bird'], [], 178, 140, 10, 80, 40, 54, []));
  // Jiangama
  dex.push(new Pokemon('jiangama', ['normal', 'ghost'], ['shadow tag', 'cute charm'], 90, 110, 80, 40, 75, 50, []));

  // Amalgrim
  dex.push(new Pokemon('amalgrim', ['ghost'], ['levitate', 'cursed body'], 60, 80, 75, 95, 95, 130, []));
  // Crushir
  dex.push(new Pokemon('crushir', ['bug', 'ghost'], ['intimidate', 'hyper cutter'], 80, 145, 120, 45, 55, 80, []));
  // Porygon-B
  dex.push(new Pokemon('porygon-b', ['normal'], ['libero'], 90, 80, 90, 105, 95, 70, []));
  // Dragarma
  dex.push(new Pokemon('dragarma', ['steel', 'dragon'], ['heavy metal', 'filter'], 110, 95, 185, 60, 70, 20, []));
  // Womad
  dex.push(new Pokemon('womad', ['normal', 'ice'], ['overcoat', 'fur coat'], 60, 75, 50, 45, 55, 60, []));
  // Warfur
  dex.push(new Pokemon('warfur', ['normal', 'ice'], ['overcoat', 'fur coat'], 80, 125, 75, 55, 85, 80, []));
*/
/* HTML Body Structure Updates */

for(var i = 0; i < dex.length; i++) {
  /* Add the container */
  $("body").append('<div class="row"> <div class="col-lg-12"> <div class="dex-box"> <h1>' + capitalizeFirstLetter(dex[i].NAME) + ' (' + dex[i].TYPE + ')</span>' + '</h1><div class="row"> <div class="col-lg-3"> <img class="dex-profile" src="images/spritesV2/' + dex[i].ID + '.png"> </div><div class="col-lg-6"> <div class="row"> <div class="col-lg-4"> <p>HP</p><p>Attack</p><p>Defense</p><p>Sp. Attack</p><p>Sp. Defense</p><p>Speed</p></div><div id="stat-numeric-' + dex[i].ID + '" class="col-lg-1"> </div><div id="stat-visual-' + dex[i].ID + '" class="col-lg-7"> </div></div></div><div class="col-lg-3"> <p class="dex-entry">Ability: ' + dex[i].ABILITY + '</p><p>Notable Moves: ' + dex[i].MOVES + '</p></div></div></div></div></div>')

  for(var key in dex[i].stats) {
    $("#stat-numeric-" + dex[i].ID).append('<p class="stat-value">' + dex[i].stats[key] + '</p>');
    $("#stat-visual-" + dex[i].ID).append('<div class="stat-bar" style="width:' + dex[i].stats[key] + 'px;background:hsl(' + .70 * dex[i].stats[key] + ',85%,45%);border-color:hsl(' + .70 * dex[i].stats[key] + ',85%,35%);"></div>')
  }

}

/* Helper Functions */

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
