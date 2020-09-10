import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  grid-area: NB;

  background: var(--white);

  border-top-right-radius: 65px;
  border-bottom-right-radius: 65px;

  box-shadow: 1px 10px 15px 10px rgba(0, 0, 0, 0.03);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 15px;
`;

export const NavigationItems = styled.nav``;

export const LogoutButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    display: none;
    margin-left: 7px;
    margin-top: 7px;
  }

  &:hover {
    cursor: pointer;

    img {
      opacity: 0.7;
    }

    svg {
      display: block;
    }
  }
`;

export const UserAvatar = styled.img`
  width: 80px;
  border-radius: 25px;
`;