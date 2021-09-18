import React, { useState } from "react";
import { CgMoon, CgSun } from "react-icons/cg";

import { HeaderWrapper, ThemeMode, ThemeIconWrapper, UserProfile } from "./style";

export default function Header() {
  const [dark, setDark] = useState(false);
  return (
    <HeaderWrapper>
      <ThemeMode>
          <ThemeIconWrapper onClick={() => setDark(!dark)}>
          {
              dark? <CgMoon/> : <CgSun/>
          }
          </ThemeIconWrapper>
      </ThemeMode>
      <UserProfile>
          Hi, Aaquib
      </UserProfile>
    </HeaderWrapper>
  );
}
