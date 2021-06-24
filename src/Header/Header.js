import React from "react";
import "./Header.css";
import Logo from "../Assets/FacebookLogo.svg";
import SearchIcon from "@material-ui/icons/Search";

import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PeopleIcon from "@material-ui/icons/People";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";

import Avatar from "@material-ui/core/Avatar";
import GridOnIcon from "@material-ui/icons/GridOn";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header() {
  return (
    <div className="FacebookClone__Header">
      <div className="FacebookClone__Search">
        <img src={Logo} alt={Logo} />
        <div className="FacebookClone__SearchBox">
          <div className="FacebookClone__Icon">
            <SearchIcon />
          </div>
          <input placeholder="Search Facebook" />
        </div>
      </div>
      <div className="FacebookClone__Navigation">
        <button>
          <HomeIcon />
        </button>
        <button>
          <OndemandVideoIcon />
        </button>
        <button>
          <StorefrontIcon />
        </button>
        <button>
          <PeopleIcon />
        </button>
        <button>
          <ViewCarouselIcon />
        </button>
      </div>
      <div className="FacebookClone__Settings">
        <Avatar
          alt="Avatar"
          src="https://media-exp3.licdn.com/dms/image/C4E03AQF2s8dGWpgC5g/profile-displayphoto-shrink_200_200/0/1592998404125?e=1629331200&v=beta&t=5IRMkWHeb6gNJBhmuZZcLKYNGjyaJ6Pd3F-ER5lVRxY"
          className="FacebookClone__SettingsAvatar"
        />
        <h3> LtConquer </h3>
        <div className="FacebookClone__SettingsIcons">
          <button>
            <GridOnIcon />
          </button>
          <button>
            <ChatIcon />
          </button>
          <button>
            <NotificationsActiveIcon />
          </button>
          <button>
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
