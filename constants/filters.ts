import { Filters } from '@/types/filters'

export const INITIAL_FILTERS: Filters = {
  // カード種類
  normal: false,
  effect: false,
  fusion: false,
  ritual: false,
  synchro: false,
  xyz: false,
  pendulum: false,
  link: false,
  spell: false,
  trap: false,

  // 属性
  light: false,
  dark: false,
  water: false,
  fire: false,
  earth: false,
  wind: false,
  divine: false,

  // 魔法カードの種類
  normalSpell: false,
  fieldSpell: false,
  equipSpell: false,
  continuousSpell: false,
  quickPlaySpell: false,
  ritualSpell: false,

  // 罠カードの種類
  normalTrap: false,
  continuousTrap: false,
  counterTrap: false,

  // 種族
  spellcaster: false,
  dragon: false,
  undead: false,
  warrior: false,
  beastWarrior: false,
  beast: false,
  wingedBeast: false,
  machine: false,
  fiend: false,
  fairy: false,
  insect: false,
  dinosaur: false,
  reptile: false,
  fish: false,
  seaSerpent: false,
  aqua: false,
  pyro: false,
  thunder: false,
  rock: false,
  plant: false,
  psychic: false,
  wyrm: false,
  cyberse: false,
  divineBeast: false,
  phantomBeast: false,

  // レベル・ランク・LINK
  level_rank_link_0: false,
  level_rank_link_1: false,
  level_rank_link_2: false,
  level_rank_link_3: false,
  level_rank_link_4: false,
  level_rank_link_5: false,
  level_rank_link_6: false,
  level_rank_link_7: false,
  level_rank_link_8: false,
  level_rank_link_9: false,
  level_rank_link_10: false,
  level_rank_link_11: false,
  level_rank_link_12: false,
  level_rank_link_13: false,

  // 能力・その他
  toon: false,
  dual: false,
  union: false,
  spirit: false,
  tuner: false,
  flip: false,
} 
