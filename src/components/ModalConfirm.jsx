import { useSoundManager } from "../utils/soundManager";

export default function ConfirmModal({
  message,
  onConfirm,
  onCancel,
  button = true,
}) {
  const { playAccent } = useSoundManager();

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-10"
        onClick={onCancel}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-[#091F2A] border-4 border-[#006ba1] p-10 shadow-xl w-[90%] max-w-sm text-center">
        {message && (
          <h2 className="text-white pixel-text leading-7 text-sm mb-4">
            {message}
          </h2>
        )}
        {button && (
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                playAccent();
                onConfirm();
              }}
              className="bg-[#92cd41] text-xs hover:bg-[#76c442] active:shadow-[inset_4px_4px_0_0_#166534] shadow-[inset_-4px_-4px_0_0_#4aa52e] text-white px-4 py-2 pixel-text"
            >
              Confirm
            </button>

            <button
              onClick={() => {
                playAccent();
                onCancel();
              }}
              className={`eightbit-btn text-white text-xs px-4 py-2 pixel-text bg-[#6b7280] hover:bg-[#4b5563] shadow-[inset_-4px_-4px_0_0_#374151] active:shadow-[inset_4px_4px_0_0_#1f2937]`}
            >
              Batal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
