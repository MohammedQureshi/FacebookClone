import React from "react";
import Panel from "./Panel";
import Link from "../Link/Link";
import User from "../User/User";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { CurrentUser } from "../User/User";
export class RightSidePanel extends Panel {
  render() {
    const items = [
      new Link(
        new User(CurrentUser.PROFILE_IMAGE_URL, User.Status.ONLINE),
        "LtConquer"
      ),
      new Link(<CheckCircleIcon />, "Circle Icon"),
      //SvgIcon
    ];

    return <Panel className={"rightSide"} links={items} />;
  }
}

export default RightSidePanel;
