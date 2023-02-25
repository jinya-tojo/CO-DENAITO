import React from 'react'
import { Postcard } from '../Postcard'
import { containerStyles, itemsStyles, titleStyles } from './styles'

export const SuggestedItems: React.FC = () => {
  return (
    <div css={containerStyles.container}>
      <p css={titleStyles.title}>おすすめされているアイテム</p>
      <div css={itemsStyles.items}>
        <Postcard
          width="four"
          height="four"
          bland="NIKO AND"
          item="チェック柄スラくす"
          category="パンツ"
          want="キャップ"
        />
        <Postcard
          width="four"
          height="four"
          bland="NIKO AND"
          item="チェック柄スラくす"
          category="パンツ"
          want="キャップ"
        />
        <Postcard
          width="four"
          height="four"
          bland="NIKO AND"
          item="チェック柄スラくす"
          category="パンツ"
          want="キャップ"
        />
        <Postcard
          width="four"
          height="four"
          bland="NIKO AND"
          item="チェック柄スラくす"
          category="パンツ"
          want="キャップ"
        />
        <Postcard
          width="four"
          height="four"
          bland="NIKO AND"
          item="チェック柄スラくす"
          category="パンツ"
          want="キャップ"
        />
        <Postcard
          width="four"
          height="four"
          bland="NIKO AND"
          item="チェック柄スラくす"
          category="パンツ"
          want="キャップ"
        />
        <Postcard
          width="four"
          height="four"
          bland="NIKO AND"
          item="チェック柄スラくす"
          category="パンツ"
          want="キャップ"
        />
        <Postcard
          width="four"
          height="four"
          bland="NIKO AND"
          item="チェック柄スラくす"
          category="パンツ"
          want="キャップ"
        />
      </div>
    </div>
  )
}
