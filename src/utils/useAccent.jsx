// hooks/useClickSound.js
import useSound from "use-sound";
import clickSfx from "../assets/accent.mp3";

export default function usAccentSound() {
  const [play] = useSound(clickSfx, { volume: 0.1 });
  return play;
}
