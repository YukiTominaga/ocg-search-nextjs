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
    if (card.is_ritual) return `bg-gradient-to-b from-blue-600/20 via-blue-600/20 to-emerald-600/50`
    if (card.is_fusion) return `bg-gradient-to-b from-purple-600/20 via-purple-600/20 to-emerald-600/50`
    if (card.is_synchro) return `bg-gradient-to-b from-white via-white to-emerald-600/50`
    if (card.is_xyz) return `bg-gradient-to-b from-black/10 via-black/10 to-emerald-600/50`
    return card.has_effect
      ? `bg-gradient-to-b from-orange-400/20 via-orange-400/20 to-emerald-600/50`
      : `bg-gradient-to-b from-yellow-300/20 via-yellow-300/20 to-emerald-600/50`
  }
  if (card.is_ritual) return 'bg-[#4169E1]/20'    // 青みがかった紫（儀式モンスター）
  if (card.is_xyz) return 'bg-[#000000]/10'       // 黒（エクシーズモンスター）
  if (card.is_synchro) return 'bg-[#FFFFFF]'      // 白（シンクロモンスター）
  if (card.is_fusion) return 'bg-[#8E44AD]/20'    // 紫がかった青（融合モンスター）
  if (card.is_link) return 'bg-[#1E40AF]/50'      // 濃い青色（リンクモンスター）
  if (card.is_trap) return 'bg-[#FF69B4]/20'      // ライトピンク（罠カード）
  if (card.is_magic) return 'bg-[#2E8B57]/20'     // シーグリーン（魔法カード）
  if (card.has_effect) return 'bg-[#FFA500]/20'   // オレンジ（効果モンスター）
  return 'bg-[#FFFF00]/20'                        // 黄色（通常モンスター）
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
