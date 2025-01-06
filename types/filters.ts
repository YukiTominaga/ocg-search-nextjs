export interface Filters {
  // カード種類
  normal: boolean;
  effect: boolean;
  fusion: boolean;
  ritual: boolean;
  synchro: boolean;
  xyz: boolean;
  pendulum: boolean;
  link: boolean;
  spell: boolean;
  trap: boolean;

  // 属性
  light: boolean;
  dark: boolean;
  water: boolean;
  fire: boolean;
  earth: boolean;
  wind: boolean;
  divine: boolean;

  // 魔法カードの種類
  normalSpell: boolean;
  fieldSpell: boolean;
  equipSpell: boolean;
  continuousSpell: boolean;
  quickPlaySpell: boolean;
  ritualSpell: boolean;

  // 罠カードの種類
  normalTrap: boolean;
  continuousTrap: boolean;
  counterTrap: boolean;

  // 種族
  spellcaster: boolean;
  dragon: boolean;
  undead: boolean;
  warrior: boolean;
  beastWarrior: boolean;
  beast: boolean;
  wingedBeast: boolean;
  machine: boolean;
  fiend: boolean;
  fairy: boolean;
  insect: boolean;
  dinosaur: boolean;
  reptile: boolean;
  fish: boolean;
  seaSerpent: boolean;
  aqua: boolean;
  pyro: boolean;
  thunder: boolean;
  rock: boolean;
  plant: boolean;
  psychic: boolean;
  wyrm: boolean;
  cyberse: boolean;
  divineBeast: boolean;
  phantomBeast: boolean;

  // レベル・ランク・LINK
  level_rank_link_0: boolean;
  level_rank_link_1: boolean;
  level_rank_link_2: boolean;
  level_rank_link_3: boolean;
  level_rank_link_4: boolean;
  level_rank_link_5: boolean;
  level_rank_link_6: boolean;
  level_rank_link_7: boolean;
  level_rank_link_8: boolean;
  level_rank_link_9: boolean;
  level_rank_link_10: boolean;
  level_rank_link_11: boolean;
  level_rank_link_12: boolean;
  level_rank_link_13: boolean;

  // 能力・その他
  toon: boolean;
  dual: boolean;
  union: boolean;
  spirit: boolean;
  tuner: boolean;
  flip: boolean;
} 
