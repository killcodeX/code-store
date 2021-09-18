import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 10px 15px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%);
`;

export const CardTitle = styled.div`
  font-size: 19px;
  font-weight: 600;
  line-height: 26px;
  min-height: 40px;
  margin-bottom: 10px;
`;

export const CardDescription = styled.div`
  font-size: 15px;
  font-weight: 400;
  min-height: 80px;
  margin-bottom: 15px;
  color: #a1a1a1;
  //overflow: hidden;
  //white-spaces: nowrap;
  //text-overflow: ellipsis;
`;

export const CardCategory = styled.div`
  background: #11101d;
  color: #fff;
  padding: 2px 8px;
  display: inline-block;
  border-radius: 10px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  height: 35px;
  margin: 16px auto;
`;

export const DisplayIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: #50AE82;
  background: #E9FBF2;
  width: 2em !important;
  height: 2em !important;
  border-radius: 50%;
  cursor: pointer;
`;

export const EditIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: #D958D0;
  background: #F5F3FF;
  width: 2em !important;
  height: 2em !important;
  border-radius: 50%;
  cursor: pointer;
`;

export const DeleteIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: #FD5B5F;
  background: #FDEEEC;
  width: 2em !important;
  height: 2em !important;
  border-radius: 50%;
  cursor: pointer;
`;
