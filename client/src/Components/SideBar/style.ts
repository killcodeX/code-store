import styled from "styled-components";

export const SideBarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(props) => (props.open ? "280px" : "78px")};
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
`;

export const LogoDetails = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  opacity: ${(props) => (props.open ? "1" : "0")};
  position: relative;
`;

export const OpenIconWrapper = styled.div`
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  opacity: ${(props) => (props.open ? "0" : "1")};
  transition: all 0.5s ease;
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  color: #fff;
  text-align: right;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  //opacity: ${(props) => (props.open ? "1" : "0")};
  transition: all 0.5s ease;
`;

export const LogoWrapper = styled.div`
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  transition: all 1.5s ease;
`;

export const Tooltip = styled.span`
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
`;

export const SideMenuItems = styled.div`
  position: relative;
  margin: 8px auto;
  height: 100%;
`;

export const FormWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

export const InputWrapper = styled.input`
  background: #1d1b31;
  border: none;
  height: 50px;
  font-size: 15px;
  color: #fff;
  font-weight: 400;
  outline: none;
  border-radius: 10px;
  width: ${(props) => (props.open ? "100%" : "50px")};
  padding: ${(props) => (props.open ? "0 20px 0 50px" : "0")};
  transition: all 0.5s ease;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.open ? "12px" : "0px")};
  padding: ${(props) => (props.open ? "0px" : "15px")};
  transform: translateY(-50%);
  font-size: 22px;
  background: #1d1b31;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  margin-left: 10px;
`;

export const LanguageIconWrapper = styled.div`
  display: flex;
  font-size: 25px;
  justify-content: center;
  align-items: center;
`;

export const LanguageHead = styled.span`
  font-size: 20px;
  padding-left: 10px;
  font-weight: 400;
  white-space: nowrap;
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: 0.4s;
`;

export const LanguageOptions = styled.div`
  color: #fff;
  padding-left: 10px;
  margin-top: 10px;
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: all 0.5s ease;
`;

export const LangData = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin: 15px 0;
  transition: all 0.2s ease;
  &:hover {
    background: #fff;
    color: #11101d;
    cursor: pointer;
    padding: 2px 5px;
  }
`;

export const LogOutWrapper = styled.div`
  position: absolute;
  bottom: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  background: #1d1b31;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const LogOutText = styled.div`
  color: #fff;
  opacity: ${(props) => (props.open ? "1" : "0")};
`;
