import React from "react"
import { S } from "../Header_Styles"

export const MenuItems: React.FC = () => {
return      <ul>
<S.MenuItem>
  <S.NavLink href="#">Projects</S.NavLink>
</S.MenuItem>

<S.MenuItem>
  <S.NavLink href="#">Technologies</S.NavLink>
</S.MenuItem>

<S.MenuItem>
  <S.NavLink href="#">About me</S.NavLink>
</S.MenuItem>
</ul>
}