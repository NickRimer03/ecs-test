import Phaser from "phaser";
import Main from "./scenes/main.js";
import "./style.scss";

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#2d2d2d",
  scene: Main,
});
