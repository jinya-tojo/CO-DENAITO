import React from 'react'
import { styles } from './styles'

type SelectCategoryProps = {
  value: string
  onChange: (v: string) => void
}

export const SelectCategory: React.FC<SelectCategoryProps> = ({
  value,
  onChange,
}) => {
  return (
    <>
      <div css={styles.title}>
        <label css={styles.label}>カテゴリー</label>
        <p css={styles.tag}>必須</p>
      </div>
      <select
        css={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="トップス">トップス</option>
        <option value="ジャケット / アウター">ジャケット / アウター</option>
        <option value="パンツ">パンツ</option>
        <option value="オールインワン">オールインワン</option>
        <option value="スカート">スカート</option>
        <option value="ワンピース / ドレス">ワンピース / ドレス</option>
        <option value="スーツ">スーツ</option>
        <option value="バッグ">バッグ</option>
        <option value="シューズ">シューズ</option>
        <option value="ファッション雑貨 / 小物">ファッション雑貨 / 小物</option>
      </select>
    </>
  )
}
