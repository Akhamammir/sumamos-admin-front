import styled from 'styled-components';

export const SidebarContainer = styled.div`
  grid-area: ${({ area }) => area};
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #4c85f0;
  color: #fff;
  box-sizing: content-box;
  line-height: normal;
  @media (max-width: 599px) {
    display: none;
  }
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: left;
  width: 100%;
  list-style: none;
  padding-left: 0px;
  margin: 16px 0px;
  box-sizing: content-box;
`;

export const SidebarMenuItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  padding-left: 30px;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 3px 0 0 0 #ffffff;
    cursor: pointer;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const SidebarMenuItemLabel = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  padding: 12px 0px;
  margin-left: 20px;
  color: #ffffff;
`;

export const SidebarFooter = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: left;
  width: 100%;
  list-style: none;
  padding-left: 0px;
  margin: 16px 0px;
  box-sizing: content-box;
  justify-content: flex-end;
`;

export const MenuLogo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 45px;
  gap: 16px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  color: #fff;
  margin: 0px 30px 30px 30px;
  padding-bottom: 20px;
  box-sizing: content-box;
  /* border-bottom: 1px solid #2e2e33; */
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

export const MenuUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 45px;
  gap: 16px;
  color: #fff;
  margin: 0px 30px 30px 30px;
  padding-bottom: 20px;
  /* box-sizing: content-box; */
`;

export const Avatar = styled.img`
  width: 46px;
  height: 46px;
  background: #4c821f;
  border-radius: 100%;
`;

export const MenuUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
`;

export const UserEmail = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  /* font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  padding: 12px 0px;
  margin-left: 20px; */
`;
export const UserName = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  /* font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  text-align: left;
  padding: 12px 0px;
  margin-left: 20px; */
`;
