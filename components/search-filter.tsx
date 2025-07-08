import { SlidersHorizontal, Trash2 } from 'lucide-react';
import { useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';

interface Filters {
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
  normalSpell: boolean;
  fieldSpell: boolean;
  equipSpell: boolean;
  continuousSpell: boolean;
  quickPlaySpell: boolean;
  ritualSpell: boolean;
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

interface SearchFilterProps {
  onFilterChange: (filters: Filters) => void;
  onSearch: () => void;
  searchQuery: string;
}

export function SearchFilter({ onFilterChange, onSearch, searchQuery }: SearchFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const initialFiltersRef = useRef<Filters | null>(null);
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
    normalSpell: false,
    fieldSpell: false,
    equipSpell: false,
    continuousSpell: false,
    quickPlaySpell: false,
    ritualSpell: false,
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

  const handleToggle = (key: keyof Filters) => (pressed: boolean) => {
    const newFilters = { ...filters, [key]: pressed };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleButtonClass = (isPressed: boolean) => `
    justify-between w-full border rounded-md p-2 transition-colors whitespace-nowrap text-sm
    ${
      isPressed
        ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
    }
  `;

  const handleReset = () => {
    const resetFilters: Filters = {
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
      normalSpell: false,
      fieldSpell: false,
      equipSpell: false,
      continuousSpell: false,
      quickPlaySpell: false,
      ritualSpell: false,
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
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const compareFilters = (filters1: Filters, filters2: Filters): boolean => {
    return Object.keys(filters1).some(key => {
      const filterKey = key as keyof Filters;
      return filters1[filterKey] !== filters2[filterKey];
    });
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      // ダイアログが開く時：現在のフィルター状態を保存
      initialFiltersRef.current = { ...filters };
    } else {
      // ダイアログが閉じる時：フィルターが変更されていれば自動検索実行
      if (initialFiltersRef.current && compareFilters(initialFiltersRef.current, filters)) {
        if (searchQuery.trim().length > 0) {
          onSearch();
        }
      }
    }
    setIsOpen(open);
  };

  const handleOkClick = () => {
    setIsOpen(false);
    if (searchQuery.trim().length > 0) {
      onSearch();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="default" className="flex shrink-0 items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-[90vh] flex-col sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>フィルターメニュー</DialogTitle>
          <DialogDescription>検索結果を絞り込むことができます</DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto">
          <div className="grid gap-4 px-1 py-4">
            <div>
              <h3 className="mb-3 text-sm font-medium text-gray-700">カード種類</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.normal}
                    onPressedChange={handleToggle('normal')}
                    className={toggleButtonClass(filters.normal)}
                  >
                    <span>通常</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.effect}
                    onPressedChange={handleToggle('effect')}
                    className={toggleButtonClass(filters.effect)}
                  >
                    <span>効果</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.fusion}
                    onPressedChange={handleToggle('fusion')}
                    className={toggleButtonClass(filters.fusion)}
                  >
                    <span>融合</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.ritual}
                    onPressedChange={handleToggle('ritual')}
                    className={toggleButtonClass(filters.ritual)}
                  >
                    <span>儀式</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.synchro}
                    onPressedChange={handleToggle('synchro')}
                    className={toggleButtonClass(filters.synchro)}
                  >
                    <span>シンクロ</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.xyz}
                    onPressedChange={handleToggle('xyz')}
                    className={toggleButtonClass(filters.xyz)}
                  >
                    <span>エクシーズ</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.pendulum}
                    onPressedChange={handleToggle('pendulum')}
                    className={toggleButtonClass(filters.pendulum)}
                  >
                    <span>ペンデュラム</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.link}
                    onPressedChange={handleToggle('link')}
                    className={toggleButtonClass(filters.link)}
                  >
                    <span>リンク</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.spell}
                    onPressedChange={handleToggle('spell')}
                    className={toggleButtonClass(filters.spell)}
                  >
                    <span>魔法</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.trap}
                    onPressedChange={handleToggle('trap')}
                    className={toggleButtonClass(filters.trap)}
                  >
                    <span>罠</span>
                  </Toggle>
                </div>
              </div>
              <hr className="mt-4 border-gray-200" />
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-gray-700">属性</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.light}
                    onPressedChange={handleToggle('light')}
                    className={toggleButtonClass(filters.light)}
                  >
                    <span>光属性</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.dark}
                    onPressedChange={handleToggle('dark')}
                    className={toggleButtonClass(filters.dark)}
                  >
                    <span>闇属性</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.water}
                    onPressedChange={handleToggle('water')}
                    className={toggleButtonClass(filters.water)}
                  >
                    <span>水属性</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.fire}
                    onPressedChange={handleToggle('fire')}
                    className={toggleButtonClass(filters.fire)}
                  >
                    <span>炎属性</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.earth}
                    onPressedChange={handleToggle('earth')}
                    className={toggleButtonClass(filters.earth)}
                  >
                    <span>地属性</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.wind}
                    onPressedChange={handleToggle('wind')}
                    className={toggleButtonClass(filters.wind)}
                  >
                    <span>風属性</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.divine}
                    onPressedChange={handleToggle('divine')}
                    className={toggleButtonClass(filters.divine)}
                  >
                    <span>神属性</span>
                  </Toggle>
                </div>
              </div>
              <hr className="mt-4 border-gray-200" />
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-gray-700">種族</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.spellcaster}
                    onPressedChange={handleToggle('spellcaster')}
                    className={toggleButtonClass(filters.spellcaster)}
                  >
                    <span>魔法使い族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.dragon}
                    onPressedChange={handleToggle('dragon')}
                    className={toggleButtonClass(filters.dragon)}
                  >
                    <span>ドラゴン族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.undead}
                    onPressedChange={handleToggle('undead')}
                    className={toggleButtonClass(filters.undead)}
                  >
                    <span>アンデット族</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.warrior}
                    onPressedChange={handleToggle('warrior')}
                    className={toggleButtonClass(filters.warrior)}
                  >
                    <span>戦士族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.beastWarrior}
                    onPressedChange={handleToggle('beastWarrior')}
                    className={toggleButtonClass(filters.beastWarrior)}
                  >
                    <span>獣戦士族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.beast}
                    onPressedChange={handleToggle('beast')}
                    className={toggleButtonClass(filters.beast)}
                  >
                    <span>獣族</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.wingedBeast}
                    onPressedChange={handleToggle('wingedBeast')}
                    className={toggleButtonClass(filters.wingedBeast)}
                  >
                    <span>鳥獣族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.machine}
                    onPressedChange={handleToggle('machine')}
                    className={toggleButtonClass(filters.machine)}
                  >
                    <span>機械族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.fiend}
                    onPressedChange={handleToggle('fiend')}
                    className={toggleButtonClass(filters.fiend)}
                  >
                    <span>悪魔族</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.fairy}
                    onPressedChange={handleToggle('fairy')}
                    className={toggleButtonClass(filters.fairy)}
                  >
                    <span>天使族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.insect}
                    onPressedChange={handleToggle('insect')}
                    className={toggleButtonClass(filters.insect)}
                  >
                    <span>昆虫族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.dinosaur}
                    onPressedChange={handleToggle('dinosaur')}
                    className={toggleButtonClass(filters.dinosaur)}
                  >
                    <span>恐竜族</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.reptile}
                    onPressedChange={handleToggle('reptile')}
                    className={toggleButtonClass(filters.reptile)}
                  >
                    <span>爬虫類族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.fish}
                    onPressedChange={handleToggle('fish')}
                    className={toggleButtonClass(filters.fish)}
                  >
                    <span>魚族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.seaSerpent}
                    onPressedChange={handleToggle('seaSerpent')}
                    className={toggleButtonClass(filters.seaSerpent)}
                  >
                    <span>海竜族</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.aqua}
                    onPressedChange={handleToggle('aqua')}
                    className={toggleButtonClass(filters.aqua)}
                  >
                    <span>水族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.pyro}
                    onPressedChange={handleToggle('pyro')}
                    className={toggleButtonClass(filters.pyro)}
                  >
                    <span>炎族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.thunder}
                    onPressedChange={handleToggle('thunder')}
                    className={toggleButtonClass(filters.thunder)}
                  >
                    <span>雷族</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.rock}
                    onPressedChange={handleToggle('rock')}
                    className={toggleButtonClass(filters.rock)}
                  >
                    <span>岩石族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.plant}
                    onPressedChange={handleToggle('plant')}
                    className={toggleButtonClass(filters.plant)}
                  >
                    <span>植物族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.psychic}
                    onPressedChange={handleToggle('psychic')}
                    className={toggleButtonClass(filters.psychic)}
                  >
                    <span>サイキック族</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.wyrm}
                    onPressedChange={handleToggle('wyrm')}
                    className={toggleButtonClass(filters.wyrm)}
                  >
                    <span>幻竜族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.cyberse}
                    onPressedChange={handleToggle('cyberse')}
                    className={toggleButtonClass(filters.cyberse)}
                  >
                    <span>サイバース族</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.divineBeast}
                    onPressedChange={handleToggle('divineBeast')}
                    className={toggleButtonClass(filters.divineBeast)}
                  >
                    <span>幻神獣族</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.phantomBeast}
                    onPressedChange={handleToggle('phantomBeast')}
                    className={toggleButtonClass(filters.phantomBeast)}
                  >
                    <span>幻想魔族</span>
                  </Toggle>
                </div>
              </div>
              <hr className="mt-4 border-gray-200" />
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-gray-700">レベル・ランク・LINK</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-7 gap-1.5">
                  <Toggle
                    pressed={filters.level_rank_link_0}
                    onPressedChange={handleToggle('level_rank_link_0')}
                    className={`${toggleButtonClass(filters.level_rank_link_0)} flex items-center justify-center`}
                  >
                    <span>0</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_1}
                    onPressedChange={handleToggle('level_rank_link_1')}
                    className={`${toggleButtonClass(filters.level_rank_link_1)} flex items-center justify-center`}
                  >
                    <span>1</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_2}
                    onPressedChange={handleToggle('level_rank_link_2')}
                    className={`${toggleButtonClass(filters.level_rank_link_2)} flex items-center justify-center`}
                  >
                    <span>2</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_3}
                    onPressedChange={handleToggle('level_rank_link_3')}
                    className={`${toggleButtonClass(filters.level_rank_link_3)} flex items-center justify-center`}
                  >
                    <span>3</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_4}
                    onPressedChange={handleToggle('level_rank_link_4')}
                    className={`${toggleButtonClass(filters.level_rank_link_4)} flex items-center justify-center`}
                  >
                    <span>4</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_5}
                    onPressedChange={handleToggle('level_rank_link_5')}
                    className={`${toggleButtonClass(filters.level_rank_link_5)} flex items-center justify-center`}
                  >
                    <span>5</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_6}
                    onPressedChange={handleToggle('level_rank_link_6')}
                    className={`${toggleButtonClass(filters.level_rank_link_6)} flex items-center justify-center`}
                  >
                    <span>6</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  <Toggle
                    pressed={filters.level_rank_link_7}
                    onPressedChange={handleToggle('level_rank_link_7')}
                    className={`${toggleButtonClass(filters.level_rank_link_7)} flex items-center justify-center`}
                  >
                    <span>7</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_8}
                    onPressedChange={handleToggle('level_rank_link_8')}
                    className={`${toggleButtonClass(filters.level_rank_link_8)} flex items-center justify-center`}
                  >
                    <span>8</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_9}
                    onPressedChange={handleToggle('level_rank_link_9')}
                    className={`${toggleButtonClass(filters.level_rank_link_9)} flex items-center justify-center`}
                  >
                    <span>9</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_10}
                    onPressedChange={handleToggle('level_rank_link_10')}
                    className={`${toggleButtonClass(filters.level_rank_link_10)} flex items-center justify-center`}
                  >
                    <span>10</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_11}
                    onPressedChange={handleToggle('level_rank_link_11')}
                    className={`${toggleButtonClass(filters.level_rank_link_11)} flex items-center justify-center`}
                  >
                    <span>11</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_12}
                    onPressedChange={handleToggle('level_rank_link_12')}
                    className={`${toggleButtonClass(filters.level_rank_link_12)} flex items-center justify-center`}
                  >
                    <span>12</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.level_rank_link_13}
                    onPressedChange={handleToggle('level_rank_link_13')}
                    className={`${toggleButtonClass(filters.level_rank_link_13)} flex items-center justify-center`}
                  >
                    <span>13</span>
                  </Toggle>
                </div>
              </div>
              <hr className="mt-4 border-gray-200" />
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-gray-700">魔法・罠の種類</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.normalSpell}
                    onPressedChange={handleToggle('normalSpell')}
                    className={toggleButtonClass(filters.normalSpell)}
                  >
                    <span>通常魔法</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.fieldSpell}
                    onPressedChange={handleToggle('fieldSpell')}
                    className={toggleButtonClass(filters.fieldSpell)}
                  >
                    <span>フィールド魔法</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.equipSpell}
                    onPressedChange={handleToggle('equipSpell')}
                    className={toggleButtonClass(filters.equipSpell)}
                  >
                    <span>装備魔法</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.continuousSpell}
                    onPressedChange={handleToggle('continuousSpell')}
                    className={toggleButtonClass(filters.continuousSpell)}
                  >
                    <span>永続魔法</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.quickPlaySpell}
                    onPressedChange={handleToggle('quickPlaySpell')}
                    className={toggleButtonClass(filters.quickPlaySpell)}
                  >
                    <span>速攻魔法</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.ritualSpell}
                    onPressedChange={handleToggle('ritualSpell')}
                    className={toggleButtonClass(filters.ritualSpell)}
                  >
                    <span>儀式魔法</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.normalTrap}
                    onPressedChange={handleToggle('normalTrap')}
                    className={toggleButtonClass(filters.normalTrap)}
                  >
                    <span>通常罠</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.continuousTrap}
                    onPressedChange={handleToggle('continuousTrap')}
                    className={toggleButtonClass(filters.continuousTrap)}
                  >
                    <span>永続罠</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.counterTrap}
                    onPressedChange={handleToggle('counterTrap')}
                    className={toggleButtonClass(filters.counterTrap)}
                  >
                    <span>カウンター罠</span>
                  </Toggle>
                </div>
              </div>
              <hr className="mt-4 border-gray-200" />
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-gray-700">能力・その他</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.toon}
                    onPressedChange={handleToggle('toon')}
                    className={toggleButtonClass(filters.toon)}
                  >
                    <span>トゥーン</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.dual}
                    onPressedChange={handleToggle('dual')}
                    className={toggleButtonClass(filters.dual)}
                  >
                    <span>デュアル</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.union}
                    onPressedChange={handleToggle('union')}
                    className={toggleButtonClass(filters.union)}
                  >
                    <span>ユニオン</span>
                  </Toggle>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <Toggle
                    pressed={filters.spirit}
                    onPressedChange={handleToggle('spirit')}
                    className={toggleButtonClass(filters.spirit)}
                  >
                    <span>スピリット</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.tuner}
                    onPressedChange={handleToggle('tuner')}
                    className={toggleButtonClass(filters.tuner)}
                  >
                    <span>チューナー</span>
                  </Toggle>
                  <Toggle
                    pressed={filters.flip}
                    onPressedChange={handleToggle('flip')}
                    className={toggleButtonClass(filters.flip)}
                  >
                    <span>リバース</span>
                  </Toggle>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <Button variant="outline" size="icon" onClick={handleReset} className="h-8 w-8">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="default" size="sm" onClick={handleOkClick}>
            OK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
