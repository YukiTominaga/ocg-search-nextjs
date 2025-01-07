import { useState, useCallback } from 'react';

export interface Filters {
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
  toon: boolean;
  dual: boolean;
  union: boolean;
  spirit: boolean;
  tuner: boolean;
  flip: boolean;
}

export function useSearchFilters() {
  const [filters, setFilters] = useState<Filters>({
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
    toon: false,
    dual: false,
    union: false,
    spirit: false,
    tuner: false,
    flip: false,
  });

  const getFilterString = useCallback(() => {
    const filterConditions = [];

    // カード種類のフィルター
    const cardTypeFilters = [];
    if (filters.normal) cardTypeFilters.push('is_normal = "true"');
    if (filters.effect) cardTypeFilters.push('has_effect = "true"');
    if (filters.fusion) cardTypeFilters.push('is_fusion = "true"');
    if (filters.ritual) cardTypeFilters.push('is_ritual = "true"');
    if (filters.synchro) cardTypeFilters.push('is_synchro = "true"');
    if (filters.xyz) cardTypeFilters.push('is_xyz = "true"');
    if (filters.pendulum) cardTypeFilters.push('is_pendulum = "true"');
    if (filters.link) cardTypeFilters.push('is_link = "true"');
    if (filters.spell) cardTypeFilters.push('is_magic = "true"');
    if (filters.trap) cardTypeFilters.push('is_trap = "true"');

    // 属性のフィルター
    const attributeValues = [];
    if (filters.light) attributeValues.push(`"光属性"`);
    if (filters.dark) attributeValues.push('"闇属性"');
    if (filters.water) attributeValues.push('"水属性"');
    if (filters.fire) attributeValues.push('"炎属性"');
    if (filters.earth) attributeValues.push('"地属性"');
    if (filters.wind) attributeValues.push('"風属性"');
    if (filters.divine) attributeValues.push('"神属性"');

    // 種族のフィルター
    const raceValues = [];
    if (filters.spellcaster) raceValues.push('"魔法使い族"');
    if (filters.dragon) raceValues.push('"ドラゴン族"');
    if (filters.undead) raceValues.push('"アンデット族"');
    if (filters.warrior) raceValues.push('"戦士族"');
    if (filters.beastWarrior) raceValues.push('"獣戦士族"');
    if (filters.beast) raceValues.push('"獣族"');
    if (filters.wingedBeast) raceValues.push('"鳥獣族"');
    if (filters.machine) raceValues.push('"機械族"');
    if (filters.fiend) raceValues.push('"悪魔族"');
    if (filters.fairy) raceValues.push('"天使族"');
    if (filters.insect) raceValues.push('"昆虫族"');
    if (filters.dinosaur) raceValues.push('"恐竜族"');
    if (filters.reptile) raceValues.push('"爬虫類族"');
    if (filters.fish) raceValues.push('"魚族"');
    if (filters.seaSerpent) raceValues.push('"海竜族"');
    if (filters.aqua) raceValues.push('"水族"');
    if (filters.pyro) raceValues.push('"炎族"');
    if (filters.thunder) raceValues.push('"雷族"');
    if (filters.rock) raceValues.push('"岩石族"');
    if (filters.plant) raceValues.push('"植物族"');
    if (filters.psychic) raceValues.push('"サイキック族"');
    if (filters.wyrm) raceValues.push('"幻竜族"');
    if (filters.cyberse) raceValues.push('"サイバース族"');
    if (filters.divineBeast) raceValues.push('"幻神獣族"');
    if (filters.phantomBeast) raceValues.push('"幻想魔族"');

    // レベル・ランク・LINKのフィルター
    const levelValues = [];
    if (filters.level_rank_link_0) levelValues.push('0');
    if (filters.level_rank_link_1) levelValues.push('1');
    if (filters.level_rank_link_2) levelValues.push('2');
    if (filters.level_rank_link_3) levelValues.push('3');
    if (filters.level_rank_link_4) levelValues.push('4');
    if (filters.level_rank_link_5) levelValues.push('5');
    if (filters.level_rank_link_6) levelValues.push('6');
    if (filters.level_rank_link_7) levelValues.push('7');
    if (filters.level_rank_link_8) levelValues.push('"8"');
    if (filters.level_rank_link_9) levelValues.push('9');
    if (filters.level_rank_link_10) levelValues.push('10');
    if (filters.level_rank_link_11) levelValues.push('11');
    if (filters.level_rank_link_12) levelValues.push('12');
    if (filters.level_rank_link_13) levelValues.push('13');

    // 能力・その他のフィルター
    const abilityConditions = [];
    if (filters.toon) abilityConditions.push('is_toon = "true"');
    if (filters.dual) abilityConditions.push('is_dual = "true"');
    if (filters.union) abilityConditions.push('is_union = "true"');
    if (filters.spirit) abilityConditions.push('is_spirit = "true"');
    if (filters.tuner) abilityConditions.push('is_tuner = "true"');
    if (filters.flip) abilityConditions.push('is_flip = "true"');

    // フィルター条件の追加
    if (cardTypeFilters.length > 0) {
      filterConditions.push(`(${cardTypeFilters.join(' OR ')})`);
    }
    if (attributeValues.length > 0) {
      filterConditions.push(`attribute:ANY(${attributeValues.join(',')})`);
    }
    if (raceValues.length > 0) {
      filterConditions.push(`type:ANY(${raceValues.join(',')})`);
    }
    if (levelValues.length > 0) {
      filterConditions.push(`level_rank_link:ANY(${levelValues.join(',')})`);
    }
    if (abilityConditions.length > 0) {
      filterConditions.push(`(${abilityConditions.join(' OR ')})`);
    }

    // 魔法カードの種類のフィルター
    const magicTypeValues = [];
    if (filters.normalSpell) magicTypeValues.push('"通常"');
    if (filters.fieldSpell) magicTypeValues.push('"フィールド"');
    if (filters.equipSpell) magicTypeValues.push('"装備"');
    if (filters.continuousSpell) magicTypeValues.push('"永続"');
    if (filters.quickPlaySpell) magicTypeValues.push('"速攻"');
    if (filters.ritualSpell) magicTypeValues.push('"儀式"');

    // 罠カードの種類のフィルター
    const trapTypeValues = [];
    if (filters.normalTrap) trapTypeValues.push('"通常"');
    if (filters.continuousTrap) trapTypeValues.push('"永続"');
    if (filters.counterTrap) trapTypeValues.push('"カウンター"');

    if (magicTypeValues.length > 0 || trapTypeValues.length > 0) {
      const conditions = [];
      if (magicTypeValues.length > 0) {
        conditions.push(`magic_type:ANY(${magicTypeValues.join(',')})`);
      }
      if (trapTypeValues.length > 0) {
        conditions.push(`trap_type:ANY(${trapTypeValues.join(',')})`);
      }
      filterConditions.push(`(${conditions.join(' OR ')})`);
    }

    return filterConditions.length > 0 ? filterConditions.join(' AND ') : undefined;
  }, [filters]);

  return {
    filters,
    setFilters,
    getFilterString,
  };
}
