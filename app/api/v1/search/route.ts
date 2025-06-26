export const dynamic = 'force-dynamic';

import { searchConfig } from '@/config/searchConfig';
import { SearchService } from '@/lib/searchService';
import { NextRequest, NextResponse } from 'next/server';

const searchService = new SearchService(searchConfig);

export async function POST(request: NextRequest) {
  try {
    const { query, filter } = await request.json();

    if (typeof query !== 'string') {
      return NextResponse.json({ error: 'Invalid query parameter' }, { status: 400 });
    }

    const searchResults = await searchService.search(query, filter);
    const parsedResults = searchResults
      .map(result => {
        const fields = result.document?.structData?.fields;
        if (!fields) return null;

        return {
          is_link: fields.is_link?.boolValue || false,
          is_monster: fields.is_monster?.boolValue || false,
          is_union: fields.is_union?.boolValue || false,
          is_dual: fields.is_dual?.boolValue || false,
          is_toon: fields.is_toon?.boolValue || false,
          card_text: fields.card_text?.stringValue || '',
          is_tuner: fields.is_tuner?.boolValue || false,
          card_name: fields.card_name?.stringValue || '',
          is_pendulum: fields.is_pendulum?.boolValue || false,
          is_trap: fields.is_trap?.boolValue || false,
          is_xyz: fields.is_xyz?.boolValue || false,
          is_magic: fields.is_magic?.boolValue || false,
          card_ruby: fields.card_ruby?.stringValue || '',
          attribute: fields.attribute?.stringValue || '',
          is_fusion: fields.is_fusion?.boolValue || false,
          magic_type: fields.magic_type?.stringValue || '',
          trap_type: fields.trap_type?.stringValue || '',
          is_ritual: fields.is_ritual?.boolValue || false,
          is_synchro: fields.is_synchro?.boolValue || false,
          is_reverse: fields.is_reverse?.boolValue || false,
          has_effect: fields.has_effect?.boolValue || false,
          is_spirit: fields.is_spirit?.boolValue || false,
          level_rank_link: fields.level_rank_link?.numberValue || null,
          attack: typeof fields.attack?.numberValue === 'number' ? fields.attack.numberValue : null,
          defense: typeof fields.defense?.numberValue === 'number' ? fields.defense.numberValue : null,
          pendulum_scale: fields.pendulum_scale?.stringValue || null,
          pendulum_effect: fields.pendulum_effect?.stringValue || '',
          type: fields.type?.stringValue || '',
          content: fields.content?.stringValue || '',
        };
      })
      .filter(result => result !== null);

    return NextResponse.json(parsedResults);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
