import React from 'react'

export default function PopupYoutube({ toggleModal }: { toggleModal: () => void }) {
  return (
    <div>
      <div
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        onClick={toggleModal}
      >
        <div className="relative w-[90%] md:w-[60%] lg:w-[40%] z-50
          ">
          <iframe
            className="w-full h-[300px] md:h-[500px]"
            src="/videos/Sparktech-fiverr-video-Shiku.mp4"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            className="absolute top-[-40px] right-0 text-white text-3xl font-normal z-50 cursor-pointer
              "
            onClick={toggleModal}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  )
}
