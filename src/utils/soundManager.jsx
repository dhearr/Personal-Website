// import { createContext, useContext, useState, useEffect, useRef } from "react";
// import backsound from "../assets/backsound.mp3";
// import backsoundCredits from "../assets/credit-sound.mp3";
// import clickSfx from "../assets/accent.mp3";
// import useSound from "use-sound";

// const SoundManagerContext = createContext();

// export function SoundManagerProvider({ children }) {
//   // STATE BACKSOUND
//   const [isMusicOn, setIsMusicOn] = useState(() => {
//     const saved = localStorage.getItem("isMusicOn");
//     return saved !== null ? JSON.parse(saved) : true;
//   });

//   const [musicVolume, setMusicVolume] = useState(() => {
//     const saved = localStorage.getItem("musicVolume");
//     return saved !== null ? parseFloat(saved) : 0.1;
//   });

//   const audioRef = useRef(null);

//   // STATE ACCENT
//   const [isAccentOn, setIsAccentOn] = useState(() => {
//     const saved = localStorage.getItem("isAccentOn");
//     return saved !== null ? JSON.parse(saved) : true;
//   });

//   const [accentVolume, setAccentVolume] = useState(() => {
//     const saved = localStorage.getItem("accentVolume");
//     return saved !== null ? parseFloat(saved) : 0.1;
//   });

//   const [playAccentRaw, accentSoundObj] = useSound(clickSfx, {
//     volume: accentVolume,
//   });

//   // EFFECT BACKSOUND
//   // Simpan toggle backsound
//   useEffect(() => {
//     localStorage.setItem("isMusicOn", JSON.stringify(isMusicOn));
//   }, [isMusicOn]);

//   // Simpan volume backsound
//   useEffect(() => {
//     localStorage.setItem("musicVolume", musicVolume.toString());
//     if (audioRef.current) {
//       audioRef.current.volume = musicVolume;
//     }
//   }, [musicVolume]);

//   // Play backsound jika ON
//   useEffect(() => {
//     if (isMusicOn && audioRef.current) {
//       audioRef.current.play().catch(() => {});
//     }
//   }, [isMusicOn]);

//   // Inisialisasi backsound
//   useEffect(() => {
//     audioRef.current = new Audio(backsound);
//     audioRef.current.loop = true;
//     audioRef.current.volume = musicVolume;
//   }, []);

//   //  EFFECT ACCENT
//   // Simpan toggle accent
//   useEffect(() => {
//     localStorage.setItem("isAccentOn", JSON.stringify(isAccentOn));
//   }, [isAccentOn]);

//   // Simpan volume accent
//   useEffect(() => {
//     localStorage.setItem("accentVolume", accentVolume.toString());
//     // Update volume accent di use-sound
//     if (accentSoundObj && accentSoundObj.volume) {
//       accentSoundObj.volume(accentVolume);
//     }
//   }, [accentVolume, accentSoundObj]);

//   //  FUNCTIONS BACKSOUND
//   const playMusic = () => {
//     if (!audioRef.current) return;
//     setIsMusicOn(true);
//     audioRef.current.volume = musicVolume;
//     audioRef.current.play().catch(() => {});
//   };

//   const stopMusic = () => {
//     if (!audioRef.current) return;
//     audioRef.current.pause();
//     audioRef.current.currentTime = 0;
//     setIsMusicOn(false);
//   };

//   //  FUNCTION ACCENT
//   const playAccent = () => {
//     if (isAccentOn) {
//       playAccentRaw();
//     }
//   };

//   //  RETURN PROVIDER
//   return (
//     <SoundManagerContext.Provider
//       value={{
//         isMusicOn,
//         playMusic,
//         stopMusic,
//         musicVolume,
//         setMusicVolume,
//         isAccentOn,
//         setIsAccentOn,
//         accentVolume,
//         setAccentVolume,
//         playAccent,
//       }}
//     >
//       {children}
//     </SoundManagerContext.Provider>
//   );
// }

// export function useSoundManager() {
//   return useContext(SoundManagerContext);
// }

// =======

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useSound from "use-sound";

// 🎶 DAFTAR TRACK MUDAH DITAMBAH
import backsound from "../assets/backsound.mp3";
import backsoundCredits from "../assets/credit-sound.mp3";
// contoh kalau mau nambah musik baru:
// import backsoundAbout from "../assets/about-sound.mp3";

import clickSfx from "../assets/accent.mp3";

const tracks = {
  main: backsound,
  credits: backsoundCredits,
  // tinggal tambah:
  // about: backsoundAbout,
  // blog: backsoundBlog,
};

const SoundManagerContext = createContext();

export function SoundManagerProvider({ children }) {
  const location = useLocation();

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isMusicOn, setIsMusicOn] = useState(() => {
    const saved = localStorage.getItem("isMusicOn");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [musicVolume, setMusicVolume] = useState(() => {
    const saved = localStorage.getItem("musicVolume");
    return saved !== null ? parseFloat(saved) : 0.1;
  });

  const audioRef = useRef(null);

  const [isAccentOn, setIsAccentOn] = useState(() => {
    const saved = localStorage.getItem("isAccentOn");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [accentVolume, setAccentVolume] = useState(() => {
    const saved = localStorage.getItem("accentVolume");
    return saved !== null ? parseFloat(saved) : 0.1;
  });
  const [playAccentRaw, accentSoundObj] = useSound(clickSfx, {
    volume: accentVolume,
  });

  // 🛠 INIT AUDIO
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = musicVolume;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  // 🛠 GANTI TRACK BERDASARKAN URL
  useEffect(() => {
    // mapping path → track
    let trackKey = "main";
    if (location.pathname.startsWith("/credits")) {
      trackKey = "credits";
    }
    // contoh kalau mau nambah:
    // else if (location.pathname.startsWith("/about")) {
    //   trackKey = "about";
    // }

    if (trackKey !== currentTrack) {
      const newSrc = tracks[trackKey];
      if (!newSrc) return; // kalau ga ada track, skip
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = newSrc;
        audioRef.current.load();
        audioRef.current.volume = musicVolume;
        setCurrentTrack(trackKey);
        if (isMusicOn) {
          audioRef.current.play().catch(() => {});
        }
      }
    }
  }, [location.pathname]); // jalan tiap ganti route

  // 🛠 HANDLE VOLUME
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = musicVolume;
    }
    localStorage.setItem("musicVolume", musicVolume.toString());
  }, [musicVolume]);

  // 🛠 MUSIC ON/OFF
  useEffect(() => {
    localStorage.setItem("isMusicOn", JSON.stringify(isMusicOn));
    if (!audioRef.current) return;
    if (isMusicOn) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isMusicOn]);

  // 🛠 ACCENT
  useEffect(() => {
    localStorage.setItem("isAccentOn", JSON.stringify(isAccentOn));
  }, [isAccentOn]);

  useEffect(() => {
    localStorage.setItem("accentVolume", accentVolume.toString());
    if (accentSoundObj && accentSoundObj.volume) {
      accentSoundObj.volume(accentVolume);
    }
  }, [accentVolume, accentSoundObj]);

  // 🎮 CONTROL FUNCTIONS
  const playMusic = () => {
    setIsMusicOn(true);
  };

  const stopMusic = () => {
    setIsMusicOn(false);
  };

  const playAccent = () => {
    if (isAccentOn) playAccentRaw();
  };

  // ⚡ untuk trigger play pertama kali
  const forcePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
      setIsMusicOn(true);
    }
  };

  return (
    <SoundManagerContext.Provider
      value={{
        isMusicOn,
        playMusic,
        stopMusic,
        musicVolume,
        setMusicVolume,
        isAccentOn,
        setIsAccentOn,
        accentVolume,
        setAccentVolume,
        playAccent,
        forcePlay,
      }}
    >
      {children}
    </SoundManagerContext.Provider>
  );
}

export function useSoundManager() {
  return useContext(SoundManagerContext);
}
