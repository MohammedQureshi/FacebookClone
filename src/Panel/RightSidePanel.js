import React from "react";
import Panel from "./Panel";
import ImageProperties from "../Image/ImageProperties";
import Link from "../Link/Link";
import User from '../User/User';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { CurrentUser } from "../User/User";
export class RightSidePanel extends Panel {
    render() {
        const items = [
            new Link(
                new User(
                    new ImageProperties(
                        CurrentUser.PROFILE_IMAGE_URL,
                        "A Picture of Jordan O'Hara"
                    ), 
                    User.Status.ONLINE
                ),
                "Mohammed Qureshi"
            ),
            new Link(
                <CheckCircleIcon />,
                "Circle Icon"
            ),
            //SvgIcon
        ];

        return (
            <Panel className={"rightSide"} links={items}/>
        );
    }
}

export default RightSidePanel;
