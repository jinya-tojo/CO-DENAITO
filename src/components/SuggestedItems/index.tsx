import React from 'react'
import { Postcard } from '../Postcard'
import { styles } from './styles'

export const SuggestedItems: React.FC = () => {
  return (
    <div css={styles.container}>
      <p css={styles.title}>おすすめされているアイテム</p>
      <div css={styles.items}>
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
