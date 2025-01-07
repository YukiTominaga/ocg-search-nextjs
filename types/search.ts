export interface SearchConfig {
  projectId: string;
  location: string;
  collectionId: string;
  dataStoreId: string;
}

export interface SearchResult {
  trap_type: string;
  is_trap: boolean;
  is_magic: boolean;
  is_pendulum: boolean;
  is_xyz: boolean;
  is_tuner: boolean;
  is_toon: boolean;
  is_dual: boolean;
  attribute: string;
  is_fusion: boolean;
  is_union: boolean;
  is_monster: boolean;
  is_spirit: boolean;
  is_link: boolean;
  is_reverse: boolean;
  is_synchro: boolean;
  is_ritual: boolean;
  card_name: string;
  content: string;
  card_text: string;
  has_effect: boolean;
  card_ruby: string;
  level_rank_link: string;
  attack: string;
  defense: string;
  magic_type: string;
  pendulum_scale: string;
  pendulum_effect: string;
  type: string;
}
