import { SearchResult } from '@/types/search';
import React from 'react';

export function formatCardText(text: string) {
  return text
    .trim()
    .replace(/。([①②③④])/g, '。\n$1')
    .split('\n')
    .filter(line => line.trim() !== '')
    .join('\n');
}

export function highlightCardText(text: string, searchContent: string): React.ReactElement {
  if (!searchContent || !text) {
    return React.createElement('span', {}, formatCardText(text));
  }

  const formattedText = formatCardText(text);

  // 検索文字列をエスケープして正規表現を作成
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const escapedSearchContent = escapeRegExp(searchContent.trim());
  const regex = new RegExp(`(${escapedSearchContent})`, 'gi');

  const parts = formattedText.split(regex);

  return React.createElement(
    'span',
    {},
    parts.map((part, index) => {
      const isMatch = new RegExp(`^${escapedSearchContent}$`, 'i').test(part);

      return isMatch
        ? React.createElement('strong', { key: index, className: 'font-bold' }, part)
        : React.createElement('span', { key: index }, part);
    })
  );
}

export function getCardBackgroundColor(card: SearchResult) {
  if (card.is_pendulum) {
    let monsterColor = 'yugioh-normal';

    if (card.is_ritual) {
      monsterColor = 'yugioh-ritual';
    } else if (card.is_fusion) {
      monsterColor = 'yugioh-fusion';
    } else if (card.is_synchro) {
      monsterColor = 'yugioh-synchro';
    } else if (card.is_xyz) {
      monsterColor = 'yugioh-xyz';
    } else if (card.has_effect) {
      monsterColor = 'yugioh-effect';
    }

    const opacity = card.is_xyz ? '20' : '40';
    return `bg-gradient-to-b from-${monsterColor}/${opacity} from-30% via-${monsterColor}/${opacity} via-70% via-yugioh-magic/40 via-80% to-yugioh-magic/40 to-100%`;
  }

  if (card.is_ritual) return 'bg-yugioh-ritual/30';
  if (card.is_xyz) return 'bg-yugioh-xyz/20';
  if (card.is_synchro) return 'bg-yugioh-synchro';
  if (card.is_fusion) return 'bg-yugioh-fusion/40';
  if (card.is_link) return 'bg-yugioh-link/50';
  if (card.is_trap) return 'bg-yugioh-trap/40';
  if (card.is_magic) return 'bg-yugioh-magic/40';
  if (card.has_effect) return 'bg-yugioh-effect/40';
  return 'bg-yugioh-normal/40';
}

export function getLevelRankLink(card: SearchResult) {
  if (!card.is_monster) return null;
  if (card.is_link) return `LINK ${card.level_rank_link}`;
  if (card.is_xyz) return `RANK ${card.level_rank_link}`;
  return `LEVEL ${card.level_rank_link}`;
}

export function getAttackDefense(card: SearchResult) {
  if (!card.is_monster) return null;
  if (card.is_link) return `ATK/ ${card.attack}`;
  return `ATK/ ${card.attack} DEF/ ${card.defense}`;
}

export function getCardTypeText(card: SearchResult) {
  if (card.is_monster) {
    return [
      card.type,
      card.is_fusion ? '融合' : '',
      card.is_synchro ? 'シンクロ' : '',
      card.is_xyz ? 'エクシーズ' : '',
      card.is_link ? 'リンク' : '',
      card.is_ritual ? '儀式' : '',
      card.is_union ? 'ユニオン' : '',
      card.is_tuner ? 'チューナー' : '',
      card.is_pendulum ? 'ペンデュラム' : '',
      card.has_effect ? '効果' : '',
    ]
      .filter(Boolean)
      .join(' / ');
  }

  if (card.is_magic) {
    if (card.magic_type === 'フィールド') return 'フィールド魔法';
    if (card.magic_type === '通常') return '通常魔法';
    return `${card.magic_type}魔法`;
  }

  if (card.trap_type === 'カウンター') return 'カウンター罠';
  if (card.trap_type === '永続') return '永続罠';
  return `${card.trap_type}罠`;
}
