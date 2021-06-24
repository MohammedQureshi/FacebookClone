class Link {
  static type = "Link";
  constructor(image, text) {
    this.text = text ?? "";
    this.image = image ?? "";
  }
}

export default Link;
