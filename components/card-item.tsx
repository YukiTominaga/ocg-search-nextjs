import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { SearchResult } from '@/types/search'
import { ExternalLinkIcon, InfinityIcon, CounterTrapIcon, FieldSpellIcon, QuickPlayIcon } from '@/components/icons'
import { formatCardText, getCardBackgroundColor, getLevelRankLink, getAttackDefense, getCardTypeText } from '@/utils/card'

interface CardItemProps {
  card: SearchResult
}

export function CardItem({ card }: CardItemProps) {
  return (
    <Card
      className={`w-full rounded-2xl shadow-lg overflow-hidden ${getCardBackgroundColor(card)}`}
    >
      <CardHeader className="relative pb-2">
        <h3 className="text-xl font-bold text-gray-900">
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(`遊戯王 ${card.card_name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer flex items-center gap-1 w-fit"
          >
            {card.card_name}
            <ExternalLinkIcon />
          </a>
        </h3>
        <p className="text-gray-800 text-sm">{card.card_ruby}</p>
        {card.is_monster && (
          <div className="flex justify-end items-center space-x-2 mt-2">
            <span className="text-gray-800 font-bold text-sm">
              {card.attribute}
            </span>
            {card.is_pendulum && (
              <span className="font-bold text-base bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text">
                SCALE {card.pendulum_scale}
              </span>
            )}
            <span className="text-gray-800 font-bold text-base">
              {getLevelRankLink(card)}
            </span>
          </div>
        )}
        {(card.trap_type === "永続" || card.trap_type === "カウンター" || card.magic_type === "フィールド" || card.magic_type === "速攻" || card.magic_type === "永続") && (
          <div className="absolute top-2 right-2 text-gray-600">
            {card.trap_type === "永続" || card.magic_type === "永続" ? <InfinityIcon /> :
            card.trap_type === "カウンター" ? <CounterTrapIcon /> :
            card.magic_type === "フィールド" ? <FieldSpellIcon /> :
            <QuickPlayIcon />}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 font-bold text-sm w-full mb-2">
          {getCardTypeText(card)}
        </p>
        {card.is_pendulum && card.pendulum_effect && (
          <>
            <p className="text-black text-base whitespace-pre-wrap mb-2">
              【ペンデュラム効果】
              {formatCardText(card.pendulum_effect)}
            </p>
            <hr className="my-2 border-gray-500 border-t-2" />
          </>
        )}
        <p className="text-black text-base whitespace-pre-wrap">
          {formatCardText(card.card_text)}
        </p>
      </CardContent>
      {card.is_monster && (
        <CardFooter className="flex flex-col space-y-1">
          <p className="text-black font-extrabold text-base w-full text-right">
            {getAttackDefense(card)}
          </p>
        </CardFooter>
      )}
    </Card>
  )
} 
