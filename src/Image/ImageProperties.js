const ImageProperties = function(imageSource, imageAlt) {
    imageSource = imageSource ?? "";
    imageAlt = imageAlt ?? "";
    
    return {
        src: imageSource,
        alt: imageAlt
    }
}

export default ImageProperties;
