import { SearchResult } from '@/types/search';

export const mockCards: SearchResult[] = [
  {
    type: 'magic',
    is_link: false,
    is_monster: false,
    is_union: false,
    is_dual: false,
    is_toon: false,
    card_text:
      '①：１ターンに１度、以下の効果から１つを選択して発動できる。\n●元々のカード名に「トイ」を含む、自身を魔法カード扱いで手札から魔法＆罠ゾーンにセットできる効果を持つモンスターを自分の手札・デッキ・モンスターゾーン（表側表示）・墓地から２体まで選び、魔法カード扱いで自分の魔法＆罠ゾーンにセットする。\n●自分の魔法＆罠ゾーンのカードを２枚まで破壊する。\n②：１ターンに１度、相手モンスターの攻撃宣言時、自分フィールドの裏側表示カード１枚を墓地へ送って発動できる。その相手モンスターを破壊する。',
    is_tuner: false,
    card_name: 'トイ・ボックス',
    is_pendulum: false,
    is_trap: false,
    is_xyz: false,
    is_magic: true,
    card_ruby: 'トイ・ボックス',
    attribute: '魔法',
    is_fusion: false,
    magic_type: '永続',
    is_ritual: false,
    is_synchro: false,
    is_reverse: false,
    has_effect: false,
    is_spirit: false,
    trap_type: '永続',
    content: 'トイ・ボックス',
    level_rank_link: '0',
    attack: '0',
    defense: '0',
    pendulum_scale: '0',
    pendulum_effect: '',
  },
];
