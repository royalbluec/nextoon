import { useState, useEffect, useRef } from 'react';
import { FaSearch, FaBell, FaUser, FaCaretDown, FaTimes } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';

function SecondaryNav() {
  const [isInputOpened, setIsInputOpened] = useState(false);
  const [isBellClicked, setIsBellClicked] = useState(false);
  const [inputText, setInputText] = useState('');
  const inputRef = useRef(null);

  const openInput = () => {
    setIsInputOpened(true);
    inputRef.current.classList.add('active');
    inputRef.current.placeholder = '제목, 작가, 장르';
  };

  const closeInput = () => {
    if (!inputText) {
      setIsInputOpened(false);
      inputRef.current.classList.remove('active');
      inputRef.current.placeholder = '';
    }
  };

  const clearInput = () => {
    setInputText('');
  };

  const changeInput = (e) => {
    setInputText(e.target.value);
  };

  const clickBell = () => {
    console.log('bell');
  };

  useEffect(() => {
    isInputOpened && inputRef.current.focus();
  });

  return (
    <NavBlock role="secondary-navigation">
      <NavElement>
        <OutsideClickHandler onOutsideClick={closeInput}>
          <SearchWrapper>
            <SearchInput
              ref={inputRef}
              value={inputText}
              onChange={changeInput}
            />
            {isInputOpened ? (
              <SearchActiveIcon onClick={closeInput} />
            ) : (
              <SearchIcon onClick={openInput} />
            )}
            {inputText && <CloseIcon onClick={clearInput} />}
          </SearchWrapper>
        </OutsideClickHandler>
      </NavElement>
      <NavElement>
        <BellIcon onClick={clickBell} />
      </NavElement>
      <NavElement>
        <UserIcon />
        <CaretDownIcon />
      </NavElement>
    </NavBlock>
  );
}

const NavBlock = styled.nav`
  display: flex;
  align-items: center;
`;

const NavElement = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  &:last-child {
    margin: 0;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 0px;
  height: 28px;
  background-color: #000;
  color: #fff;
  border: 0;
  outline: none;
  padding: 0;
  font-size: 12px;
  transition: 0.4s ease all;

  ::placeholder {
    color: #b3b3b3;
  }

  &.active {
    border: 1px solid transparent;
    padding-left: 32px;
    width: 240px;
    border-color: #fff;
  }
`;

const SearchIcon = styled(FaSearch)`
  width: 20px;
  height: 20px;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const SearchActiveIcon = styled(FaSearch)`
  width: 20px;
  height: 20px;
  color: white;
  transform: translateX(25%);
  position: absolute;
`;

const CloseIcon = styled(FaTimes)`
  width: 20px;
  height: 20px;
  color: white;
  transform: translateX(248px);
  position: absolute;
`;

const BellIcon = styled(FaBell)`
  width: 20px;
  height: 20px;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const UserIcon = styled(FaUser)`
  width: 20px;
  height: 20px;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const CaretDownIcon = styled(FaCaretDown)`
  width: 16px;
  height: 16x;
  margin-left: 10px;
  color: white;

  :hover {
    cursor: pointer;
    transform: rotate(180deg);
    transition: 0.4s ease all;
  }
`;

export default SecondaryNav;
