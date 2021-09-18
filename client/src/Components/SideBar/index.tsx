import React, { useState } from "react";
import { lang } from "../../fakeData";
import {
  CgCode,
  CgFormatRight,
  CgMenu,
  CgSearch,
  CgMonday,
  CgLogOut
} from "react-icons/cg";
import {
  SideBarWrapper,
  OpenIconWrapper,
  CloseIconWrapper,
  LogoDetails,
  LogoWrapper,
  SideMenuItems,
  FormWrapper,
  InputWrapper,
  Tooltip,
  SearchIconWrapper,
  LanguageWrapper,
  LanguageIconWrapper,
  LanguageHead,
  LanguageOptions,
  LangData,
  LogOutWrapper,
  LogIconWrapper,
  LogOutText
} from "./style";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <SideBarWrapper open={open}>
      {!open ? (
        <OpenIconWrapper open={open} onClick={() => setOpen(!open)}>
          <CgMenu />
        </OpenIconWrapper>
      ) : (
        <LogoDetails open={open}>
          <LogoWrapper>
            <CgCode /> Code Store
          </LogoWrapper>
          <CloseIconWrapper onClick={() => setOpen(!open)}>
            <CgFormatRight />
          </CloseIconWrapper>
        </LogoDetails>
      )}

      <hr />
      <SideMenuItems>
        <FormWrapper open={open}>
          <SearchIconWrapper open={open}>
            <CgSearch />
          </SearchIconWrapper>
          <InputWrapper open={open} placeholder="search..." />
        </FormWrapper>
        <hr />
        <LanguageWrapper>
          <LanguageIconWrapper>
            <CgMonday />
          </LanguageIconWrapper>
          <LanguageHead open={open}>Languages</LanguageHead>
        </LanguageWrapper>
        <LanguageOptions open={open}>
          {lang.map((item) => {
            return <LangData key={item.id}>{item.language}</LangData>;
          })}
        </LanguageOptions>

        <LogOutWrapper>
          <LogIconWrapper>
            <CgLogOut/>
          </LogIconWrapper>
          {/* <LogOutText open={open}>LogOut</LogOutText> */}
        </LogOutWrapper>
      </SideMenuItems>
    </SideBarWrapper>
  );
}
