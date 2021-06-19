export function Image({src, alt}) {
    return <img src={src} alt={alt}/>
}

Image.defaultProps = {
    src: "",
    alt: ""
}

export default Image;
