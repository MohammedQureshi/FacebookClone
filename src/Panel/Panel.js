import React from "react";
import "./Panel.css";
import "../App.css";
import Image from "../Image/Image";
import User from '../User/User';

export class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.listItems = props.links.map((link) => {
            console.log(link)
                let el;
                if(link.type === User.type) {
                    el = <li key={link.toString()}>
                    <a href="/">
                        <div className={"icon"}>
                            {/* <Image src={link.imageInterface.image.imageSource} alt={link.image.imageAlt}/> */}
                        </div>
                        <div className={"link-details"}>
                            <span> {link.text} </span>
                        </div>
                    </a>
                </li>
                } else {
                    el = <li key={link.toString()}>
                        <a href="/">
                            <div className={"icon"}>
                                {/* <Image src={link.image.src} alt={link.image.imageAlt}/> */}
                                <Image src="http://www.mohammedqureshi.co.uk/static/media/profile.3ff235e5.png" alt="SAMPLE" />
                            </div>
                            <div className={"link-details"}>
                                <span> {link.text} </span>
                            </div>
                        </a>
                    </li>
                }

                return el;
            }
        );
    }
    /**
     * left and right side both contain, Icon or Image, Text  
     */
    render() {
        return (<ul className={["FacebookClone__Panel", this.props.className].join(" ")}>{this.listItems}</ul>);
    }
}

Panel.defaultProps = {
    links : []
}

export default Panel;