import React, { useState } from "react";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu, MenuItem } from "@mui/material";
import { Button } from "react-bootstrap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

function HeaderDetail() {
  const [menuItems] = useState([
    "중고거래",
    "부동산",
    "중고차",
    "알바",
    "동네업체",
    "동네생활",
    "모임",
  ]);

  const popularKeywords = [
    "인기 검색어",
    "굿즈",
    "플스",
    "닌텐도",
    "다이슨",
    "캠핑",
    "포토카드",
    "에어팟",
    "스타벅스",
    "달력",
    "삼성",
    "다이소",
    "가습기",
    "기프티콘",
    "상품권",
    "기프트카드",
    "노트북",
    "레고",
    "한복",
    "손흥민",
    "의자",
    "아이폰",
    "티니핑",
  ];

  const [selectedMenu, setSelectedMenu] = useState("중고거래");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (item) => {
    setSelectedMenu(item);
    handleClose();
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <Location>
          <SvgIcon
            component={LocationOnIcon}
            inheritViewBox
            style={{ fontSize: "18px", marginRight: "4px" }}
          />
          <div>포항시 북구</div>
          <SvgIcon component={KeyboardArrowDownIcon} inheritViewBox />
        </Location>
        <Search style={{ position: "relative" }}>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="outlined"
              onClick={handleClick}
            >
              {selectedMenu}{" "}
              <SvgIcon component={ArrowDropDownIcon} inheritViewBox />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={() => handleMenuClick(item)}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <Line />
          <Input
            type="text"
            name="search input"
            placeholder="검색어를 입력해주세요"
          />
          <SvgIcon
            component={SearchIcon}
            inheritViewBox
            style={{
              position: "absolute",
              right: "10px",
              cursor: "pointer",
            }}
          />
        </Search>
      </SearchWrapper>
      <Popular>
        {popularKeywords.map((category, index) => (
          <Category key={index}>{category}</Category>
        ))}
      </Popular>
    </Wrapper>
  );
}

export default HeaderDetail;

const Wrapper = styled.div`
  width: 1260px;
  margin: auto;
  /* border: 2px solid blue; */
`;
const SearchWrapper = styled.div`
  /* border: 2px solid red; */
  height: 60px;

  display: flex;
  align-items: center;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  background-color: #ececec;
  padding: 10px 15px 10px 15px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  margin-left: 25px;
  cursor: pointer;
`;

const Search = styled.div`
  height: 46px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  width: 84%;
  margin-left: 26px;
  /* cursor: pointer; */
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  border: 0.6px solid #e9e9e9;
  height: 24px;
`;
const Input = styled.input`
  margin-left: 10px;
  outline: none;
  border-width: 0;
  font-size: 15px;
  width: 85%;
`;

const Popular = styled.div`
  /* border: 2px solid orange; */
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 200px;
`;

const Category = styled.div`
  font-size: 14px;
  padding: 5px;
`;
