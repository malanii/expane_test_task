interface Image {
  alt: string;
  src: string;
}

export interface ListOfImages {
  [key: string]: Image;
}
export interface Btns {
    [key: string]: string;
}