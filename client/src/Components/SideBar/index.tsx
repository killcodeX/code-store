import React, { useState } from "react";
import { lang } from "../../fakeData";
import {
  CgCode,
  CgFormatRight,
  CgMenu,
  CgMathPlus,
  CgSearch,
  CgMonday,
  CgLogOut,
} from "react-icons/cg";
import {
  SideBarWrapper,
  OpenIconWrapper,
  CloseIconWrapper,
  LogoDetails,
  LogoWrapper,
  SideMenuItems,
  AddPostWrapper,
  AddIconWrapper,
  FormWrapper,
  InputWrapper,
  SearchIconWrapper,
  LanguageWrapper,
  LanguageIconWrapper,
  LanguageHead,
  LanguageOptions,
  LangData,
  LogOutWrapper,
  LogIconWrapper,
  LogOutText,
} from "./style";
import {getAddPostodal} from "../../Redux/Actions/postActions";
import { useDispatch } from "react-redux";

export default function SideBar() {
  const dispatch = useDispatch()
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
        <AddPostWrapper onClick={() => dispatch(getAddPostodal())}>
          <AddIconWrapper>
            <CgMathPlus />
          </AddIconWrapper>
          <LanguageHead open={open}>Add New Snippet</LanguageHead>
        </AddPostWrapper>
        <hr />

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
            <CgLogOut />
          </LogIconWrapper>
          {/* <LogOutText open={open}>LogOut</LogOutText> */}
        </LogOutWrapper>
      </SideMenuItems>
    </SideBarWrapper>
  );
}
