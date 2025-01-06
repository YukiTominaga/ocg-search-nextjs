import { SearchResult } from '@/types/search'

export function formatCardText(text: string) {
  return text
    .trim()
    .replace(/。([①②③④])/g, '。\n$1')
    .split('\n')
    .filter(line => line.trim() !== '')
    .join('\n')
}

export function getCardBackgroundColor(card: SearchResult) {
  if (card.is_pendulum) {
    if (card.is_ritual) return `bg-gradient-to-b from-yugioh-ritual/20 via-yugioh-ritual/20 to-emerald-600/50`
    if (card.is_fusion) return `bg-gradient-to-b from-yugioh-fusion/20 via-yugioh-fusion/20 to-emerald-600/50`
    if (card.is_synchro) return `bg-gradient-to-b from-yugioh-synchro via-yugioh-synchro to-emerald-600/50`
    if (card.is_xyz) return `bg-gradient-to-b from-yugioh-xyz/10 via-yugioh-xyz/10 to-emerald-600/50`
    return card.has_effect
      ? `bg-gradient-to-b from-yugioh-effect/20 via-yugioh-effect/20 to-emerald-600/50`
      : `bg-gradient-to-b from-yugioh-normal/20 via-yugioh-normal/20 to-emerald-600/50`
  }
  if (card.is_ritual) return 'bg-yugioh-ritual/20'
  if (card.is_xyz) return 'bg-yugioh-xyz/10'
  if (card.is_synchro) return 'bg-yugioh-synchro'
  if (card.is_fusion) return 'bg-yugioh-fusion/20'
  if (card.is_link) return 'bg-yugioh-link/50'
  if (card.is_trap) return 'bg-yugioh-trap/20'
  if (card.is_magic) return 'bg-yugioh-magic/20'
  if (card.has_effect) return 'bg-yugioh-effect/20'
  return 'bg-yugioh-normal/20'
}

export function getLevelRankLink(card: SearchResult) {
  if (!card.is_monster) return null
  if (card.is_link) return `LINK ${card.level_rank_link}`
  if (card.is_xyz) return `RANK ${card.level_rank_link}`
  return `LEVEL ${card.level_rank_link}`
}

export function getAttackDefense(card: SearchResult) {
  if (!card.is_monster) return null
  if (card.is_link) return `ATK/ ${card.attack}`
  return `ATK/ ${card.attack} DEF/ ${card.defense}`
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
    ].filter(Boolean).join(' / ')
  }

  if (card.is_magic) {
    if (card.magic_type === "フィールド") return "フィールド魔法"
    if (card.magic_type === "通常") return "通常魔法"
    return `${card.magic_type}魔法`
  }

  if (card.trap_type === "カウンター") return "カウンター罠"
  if (card.trap_type === "永続") return "永続罠"
  return `${card.trap_type}罠`
}
