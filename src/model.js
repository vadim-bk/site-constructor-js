import image from "./assets/image.png";
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from "./classes/blocks";

export const model = [
  new TitleBlock("Constructor sites on pure JavaScript", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),

  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
  }),

  new ColumnsBlock(
    [
      "App on pure JavaScript, no used libraries",
      "SOLID principles and OOP in JavaScript",
      "JavaScript - it is easy, interesting. Learn create any UI by yourself",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem 0",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),

  new TextBlock("here we go with some text", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
