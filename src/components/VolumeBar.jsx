import { useSoundManager } from "../utils/soundManager";

export default function VolumeBar({
  value,
  onChange,
  maxBlocks = 10,
  disabled = false,
}) {
  const step = 1 / maxBlocks;
  const activeBlocks = Math.round(value * maxBlocks);
  const { playAccent } = useSoundManager();

  const handleClickBlock = (i) => {
    if (disabled) return;
    const newValue = i === 0 && activeBlocks > 0 ? 0 : (i + 1) / maxBlocks;
    onChange(newValue);
  };

  const handleDecrease = () => {
    if (disabled || value <= 0) return;
    onChange(Math.max(0, value - step));
  };

  const handleIncrease = () => {
    if (disabled || value >= 1) return;
    onChange(Math.min(1, value + step));
  };

  return (
    <div className="flex items-center gap-2 md:gap-3">
      {/* Tombol minus */}
      <button
        onClick={() => {
          handleDecrease();
          playAccent();
        }}
        disabled={disabled || value <= 0}
        className={`px-2 py-1 text-white text-[8px] md:text-[10px] pixel-text transition-colors
    ${
      disabled || value <= 0
        ? "bg-[#6b7280] shadow-[inset_-4px_-4px_0_0_#374151] cursor-not-allowed"
        : "bg-[#6b7280] hover:bg-[#4b5563] shadow-[inset_-4px_-4px_0_0_#374151] active:shadow-[inset_4px_4px_0_0_#1f2937] cursor-pointer"
    }
  `}
      >
        –
      </button>

      {/* Kotak-kotak volume */}
      <div className="flex gap-1 w-[100px] sm:w-full">
        {Array.from({ length: maxBlocks }).map((_, i) => {
          const percent = Math.round(value * 100);
          const blockPercent = Math.round(((i + 1) / maxBlocks) * 100);
          const isActive = i < activeBlocks;
          const showNumber =
            percent > i * (100 / maxBlocks) && percent <= blockPercent;

          return (
            <div
              key={i}
              onClick={() => {
                handleClickBlock(i);
                playAccent();
              }}
              className={`relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7 border overflow-hidden pixel-text transition-colors
                ${
                  isActive
                    ? "bg-[#006ba1] border-[#006ba1] shadow-[inset_-3px_-3px_0_0_#005885] active:shadow-[inset_3px_3px_0_0_#003f60]"
                    : "bg-[#6b7280] border-[#4b5563] shadow-[inset_-3px_-3px_0_0_#374151] active:shadow-[inset_3px_3px_0_0_#1f2937]"
                }
                ${
                  disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:brightness-110"
                }
              `}
            >
              {showNumber && (
                <span
                  className="hidden sm:block text-[5px] md:text-[6px] leading-none text-white text-center w-full truncate"
                  style={{ lineHeight: "1" }}
                >
                  {percent}%
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Tombol plus */}
      <button
        onClick={() => {
          handleIncrease();
          playAccent();
        }}
        disabled={disabled || value >= 1}
        className={`px-2 py-1 text-white text-[8px] md:text-[10px] pixel-text transition-colors
          ${
            disabled || value >= 1
              ? "bg-[#6b7280] shadow-[inset_-4px_-4px_0_0_#374151] cursor-not-allowed"
              : "bg-[#6b7280] hover:bg-[#4b5563] shadow-[inset_-4px_-4px_0_0_#374151] active:shadow-[inset_4px_4px_0_0_#1f2937] cursor-pointer"
          }
        `}
      >
        +
      </button>
    </div>
  );
}
