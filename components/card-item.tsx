import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { SearchResult } from '@/types/search';
import { ExternalLinkIcon, InfinityIcon, CounterTrapIcon, FieldSpellIcon, QuickPlayIcon } from '@/components/icons';
import {
  formatCardText,
  getCardBackgroundColor,
  getLevelRankLink,
  getAttackDefense,
  getCardTypeText,
} from '@/utils/card';

interface CardItemProps {
  card: SearchResult;
}

export function CardItem({ card }: CardItemProps) {
  const bgColorClass = getCardBackgroundColor(card);

  return (
    <Card className={`w-full overflow-hidden rounded-2xl shadow-lg ${bgColorClass}`}>
      <CardHeader className="relative pb-2">
        <h3 className="text-xl font-bold text-gray-900">
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(`遊戯王 ${card.card_name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit cursor-pointer items-center gap-1 hover:underline"
          >
            {card.card_name}
            <ExternalLinkIcon />
          </a>
        </h3>
        <p className="text-sm text-gray-800">{card.card_ruby}</p>
        {card.is_monster && (
          <div className="mt-2 flex items-center justify-end space-x-2">
            <span className="text-sm font-bold text-gray-800">{card.attribute}</span>
            {card.is_pendulum && (
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-base font-bold text-transparent">
                SCALE {card.pendulum_scale}
              </span>
            )}
            <span className="text-base font-bold text-gray-800">{getLevelRankLink(card)}</span>
          </div>
        )}
        {(card.trap_type === '永続' ||
          card.trap_type === 'カウンター' ||
          card.magic_type === 'フィールド' ||
          card.magic_type === '速攻' ||
          card.magic_type === '永続') && (
          <div className="absolute right-2 top-2 text-gray-600">
            {card.trap_type === '永続' || card.magic_type === '永続' ? (
              <InfinityIcon />
            ) : card.trap_type === 'カウンター' ? (
              <CounterTrapIcon />
            ) : card.magic_type === 'フィールド' ? (
              <FieldSpellIcon />
            ) : (
              <QuickPlayIcon />
            )}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p className="mb-2 w-full text-sm font-bold text-gray-800">{getCardTypeText(card)}</p>
        {card.is_pendulum && card.pendulum_effect && (
          <>
            <p className="mb-2 whitespace-pre-wrap text-base text-black">
              【ペンデュラム効果】
              {formatCardText(card.pendulum_effect)}
            </p>
            <hr className="my-2 border-t-2 border-gray-500" />
          </>
        )}
        <p className="whitespace-pre-wrap text-base text-black">{formatCardText(card.card_text)}</p>
      </CardContent>
      {card.is_monster && (
        <CardFooter className="flex flex-col space-y-1">
          <p className="w-full text-right text-base font-extrabold text-black">{getAttackDefense(card)}</p>
        </CardFooter>
      )}
    </Card>
  );
}
