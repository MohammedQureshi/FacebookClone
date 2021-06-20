import ImageProperties from "../Image/ImageProperties";

class Link {
    static type = "Link";
    constructor(image, text) {
        //this.image = image ?? new ImageProperties();
        this.text = text ?? "";
        this.type = image?.type ?? Link.type;
    }
}

// Link.defaultProps = {
//     image: new ImageInterface(),
//     text: ""
// }

export default Link;