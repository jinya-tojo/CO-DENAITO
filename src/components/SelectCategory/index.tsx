import React from 'react'
import { titleStyles, selectStyles, labelStyles, tagStyles } from './styles'

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
      <div css={titleStyles.title}>
        <label css={labelStyles.label}>カテゴリー</label>
        <p css={tagStyles.tag}>必須</p>
      </div>
      <select
        css={selectStyles.select}
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
