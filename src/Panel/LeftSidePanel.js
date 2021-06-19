import React from "react";
import Panel from "./Panel";
import ImageProperties from "../Image/ImageProperties";
import Link from "../Link/Link";
import "./LeftSidePanel.css";



export class LeftSidePanel extends Panel {
    render() {
        const items = [
            new Link(
                new ImageProperties(
                    "https://media-exp3.licdn.com/dms/image/C4E03AQF2s8dGWpgC5g/profile-displayphoto-shrink_200_200/0/1592998404125?e=1629331200&v=beta&t=5IRMkWHeb6gNJBhmuZZcLKYNGjyaJ6Pd3F-ER5lVRxY",
                    "A Picture of Jordan O'Hara"
                ),
                "Mohammed Qureshi"
            ),

            new Link(
                new ImageProperties(
                    "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png",
                    "COVID-19 Information Centre Icon"
                ),
                "COVID-19 Information Centre "
            ),

            new Link(
                new ImageProperties(
                    "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
                    "Friends Icon"
                ),
                "Friends"
            ),
            new Link(
                new ImageProperties(
                    "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png",
                    "Watch Icon"
                ),
                "Watch"
            ),

            new Link(
                new ImageProperties(
                    "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
                    "Pages Icon"
                ),
                "Pages"
            ),


            new Link(
                new ImageProperties(
                    "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
                    "Groups Icon"
                ),
                "Groups"
            ),


            new Link(
                new ImageProperties(
                    "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png",
                    "Marketplace Icon"
                ),
                "Marketplace"
            ),

            new Link(
                new ImageProperties(
                    "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png",
                    "Events Icon"
                ),
                "Events"
            ),

            new Link(
                new ImageProperties(
                    "https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png",
                    "Memories Icon"
                ),
                "Memories"
            ),

            new Link(
                new ImageProperties(
                    "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
                    "Saved Icon"
                ),
                "Saved"
            ),

            new Link(
                new ImageProperties(
                    "https://www.pngkit.com/png/full/81-818043_down-arrow-next-bottom-end-circle-button-comments.png",
                    "See more Icon"
                ),
                "See more"
            )


        ];

        return (
            <Panel className={"leftSide"} links={items}/>
        );
    }
}

export default LeftSidePanel;
