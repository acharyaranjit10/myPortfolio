import React, { useState, useEffect, useRef } from "react";
import { initialPoems } from "../components/poemsData";
import "./PoetryPage.css";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaBackward,
  FaForward,
  FaDownload,
} from "react-icons/fa";

export default function PoetryPage() {
  // Existing state
  const [poems, setPoems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedPoemId, setExpandedPoemId] = useState(null);
  const [isBlurry, setIsBlurry] = useState(false);
  const audioRefs = useRef({});
  const [audioStates, setAudioStates] = useState({});
  const playbackSpeeds = [0.5, 1, 1.25, 1.5, 2];
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
const [showAllPoems, setShowAllPoems] = useState(false);
const [showAllRaps, setShowAllRaps] = useState(false);
  
  // New state for section display
  const [isMobile, setIsMobile] = useState(false);
  const [poemsToShow, setPoemsToShow] = useState(6);
  const [rapsToShow, setRapsToShow] = useState(6);

  useEffect(() => {
    setPoems(initialPoems);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setPoemsToShow(window.innerWidth < 768 ? 2 : 6);
      setRapsToShow(window.innerWidth < 768 ? 2 : 6);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsBlurry(expandedPoemId !== null);
    document.body.classList.toggle("no-scroll", expandedPoemId !== null);
  }, [expandedPoemId]);

  // Filter poems and raps separately
  const filteredPoems = poems.filter(item => 
    item.type === "poem" && 
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     (item.content && item.content.toLowerCase().includes(searchTerm.toLowerCase()))) &&
    (selectedCategory === "All" || item.category === selectedCategory)
  );

  const filteredRaps = poems.filter(item => 
    item.type === "rap" && 
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     (item.lyrics && item.lyrics.toLowerCase().includes(searchTerm.toLowerCase()))) &&
    (selectedCategory === "All" || item.category === selectedCategory)
  );

  // Keep all your existing handler functions
  const toggleExpandPoem = (id) => {
    setExpandedPoemId(expandedPoemId === id ? null : id);
    Object.values(audioRefs.current).forEach((audio) => {
      if (audio && !audio.paused) {
        audio.pause();
      }
    });
  };

  const closeExpandedPoem = () => {
    setExpandedPoemId(null);
  };

  const allCategories = ["All", ...new Set(poems.map((item) => item.category))];

  const handlePlayPause = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
      setAudioStates((prevStates) => ({
        ...prevStates,
        [id]: { ...prevStates[id], isPlaying: !audio.paused },
      }));
    }
  };

  const handleAudioUpdate = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      setAudioStates((prevStates) => ({
        ...prevStates,
        [id]: {
          ...prevStates[id],
          currentTime: audio.currentTime,
          duration: audio.duration,
          isPlaying: !audio.paused,
        },
      }));
    }
  };

  const handleVolumeChange = (id, volume) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.volume = volume;
      setAudioStates((prevStates) => ({
        ...prevStates,
        [id]: { ...prevStates[id], volume },
      }));
    }
  };

  const handleSeek = (id, time) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = time;
      setAudioStates((prevStates) => ({
        ...prevStates,
        [id]: { ...prevStates[id], currentTime: time },
      }));
    }
  };

  const handleMuteUnmute = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.muted = !audio.muted;
      setAudioStates((prevStates) => ({
        ...prevStates,
        [id]: { ...prevStates[id], isMuted: audio.muted },
      }));
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };

  const skipForward = (id, seconds = 10) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = Math.min(audio.duration, audio.currentTime + seconds);
      handleAudioUpdate(id);
    }
  };

  const skipBackward = (id, seconds = 10) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = Math.max(0, audio.currentTime - seconds);
      handleAudioUpdate(id);
    }
  };

  const handlePlaybackSpeedChange = (id, speed) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.playbackRate = speed;
      setPlaybackSpeed(speed);
    }
  };

  const handleDownload = (audioUrl, title) => {
    if (!audioUrl) return;
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = `${title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-[#003049] ${isBlurry ? "overflow-hidden" : ""}`}>
      {/* Expanded Poem Modal */}
      {expandedPoemId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start overflow-y-auto">
          {poems.find((item) => item.id === expandedPoemId) && (
            <div
              className="expanded-poem-container bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-3/4 lg:w-1/2 max-w-4xl relative"
              style={{ marginTop: "90px" }}
            >
              <button
                onClick={closeExpandedPoem}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 text-2xl"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-teal-100 mb-4">
                {poems.find((item) => item.id === expandedPoemId)?.title}
              </h2>

              {poems.find((item) => item.id === expandedPoemId)?.type === "rap" ? (
                <div className="my-4">
                  <div className="audio-controls bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <audio
                      ref={(el) => (audioRefs.current[expandedPoemId] = el)}
                      src={poems.find((item) => item.id === expandedPoemId)?.audioUrl}
                      onTimeUpdate={() => handleAudioUpdate(expandedPoemId)}
                      onLoadedMetadata={() => handleAudioUpdate(expandedPoemId)}
                    />
                    <div className="controls flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => handlePlayPause(expandedPoemId)}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        {audioStates[expandedPoemId]?.isPlaying ? (
                          <FaPause className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        ) : (
                          <FaPlay className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        )}
                      </button>
                      <button
                        onClick={() => skipBackward(expandedPoemId)}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <FaBackward className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </button>
                      <button
                        onClick={() => skipForward(expandedPoemId)}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <FaForward className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </button>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleMuteUnmute(expandedPoemId)}
                          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                          {audioStates[expandedPoemId]?.isMuted ? (
                            <FaVolumeMute className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                          ) : (
                            <FaVolumeUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                          )}
                        </button>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={audioStates[expandedPoemId]?.volume || 1}
                          onChange={(e) =>
                            handleVolumeChange(expandedPoemId, parseFloat(e.target.value))
                          }
                          className="volume-slider"
                        />
                      </div>
                      <div className="time-display text-sm text-gray-700 dark:text-gray-300 min-w-[80px] text-center">
                        {formatTime(audioStates[expandedPoemId]?.currentTime || 0)} /{" "}
                        {formatTime(audioStates[expandedPoemId]?.duration || 0)}
                      </div>
                      <select
                        className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
                        value={playbackSpeed}
                        onChange={(e) =>
                          handlePlaybackSpeedChange(expandedPoemId, parseFloat(e.target.value))
                        }
                      >
                        {playbackSpeeds.map((speed) => (
                          <option key={speed} value={speed}>
                            {speed}x
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() =>
                          handleDownload(
                            poems.find((item) => item.id === expandedPoemId)?.audioUrl,
                            poems.find((item) => item.id === expandedPoemId)?.title
                          )
                        }
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 ml-auto"
                      >
                        <FaDownload className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </button>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={audioStates[expandedPoemId]?.duration || 0}
                      value={audioStates[expandedPoemId]?.currentTime || 0}
                      onChange={(e) =>
                        handleSeek(expandedPoemId, parseFloat(e.target.value))
                      }
                      className="progress-slider w-full mt-2"
                    />
                  </div>

                  {poems.find((item) => item.id === expandedPoemId)?.lyrics && (
                    <div className="poem-content-container mt-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <p className="whitespace-pre-line text-gray-600 dark:text-gray-300 font-serif italic">
                        {poems.find((item) => item.id === expandedPoemId)?.lyrics}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="poem-content-container mt-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="whitespace-pre-line text-gray-600 dark:text-gray-300 font-serif italic">
                    {poems.find((item) => item.id === expandedPoemId)?.content}
                  </p>
                </div>
              )}

              <span className="text-sm text-gray-500 dark:text-gray-400 mt-4 block">
                {poems.find((item) => item.id === expandedPoemId)?.date}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 mb-2 pt-3">
            मेरा सिर्जनाहरू
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 italic">
            Words and rhythms that compile in my heart.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search poems and raps..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-auto">
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {allCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* POEMS SECTION */}
        <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-teal-100">
      Poems <span className="text-sm text-gray-500">({filteredPoems.length})</span>
    </h2>
    {filteredPoems.length > (isMobile ? 2 : 6) && (
      <button 
        onClick={() => {
          if (showAllPoems) {
            setPoemsToShow(isMobile ? 2 : 6);
            setShowAllPoems(false);
          } else {
            setPoemsToShow(filteredPoems.length);
            setShowAllPoems(true);
          }
        }}
        className="px-4 py-1 text-sm rounded-md bg-teal-500 text-white hover:bg-teal-600"
      >
        {showAllPoems ? "See Less" : "See More"}
      </button>
    )}
  </div>

          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-6`}>
            {filteredPoems.slice(0, poemsToShow).map((item) => (
              <div
                key={item.id}
                onClick={() => toggleExpandPoem(item.id)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-teal-100">
                      {item.title}
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.date}
                    </span>
                  </div>
                  <p className="line-clamp-3 whitespace-pre-line text-gray-600 dark:text-gray-300 my-3 font-serif italic">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RAPS SECTION */}
        <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-teal-100">
      Raps <span className="text-sm text-gray-500">({filteredRaps.length})</span>
    </h2>
    {filteredRaps.length > (isMobile ? 2 : 6) && (
      <button 
        onClick={() => {
          if (showAllRaps) {
            setRapsToShow(isMobile ? 2 : 6);
            setShowAllRaps(false);
          } else {
            setRapsToShow(filteredRaps.length);
            setShowAllRaps(true);
          }
        }}
        className="px-4 py-1 text-sm rounded-md bg-teal-500 text-white hover:bg-teal-600"
      >
        {showAllRaps ? "See Less" : "See More"}
      </button>
    )}
  </div>

          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-6`}>
            {filteredRaps.slice(0, rapsToShow).map((item) => (
              <div
                key={item.id}
                onClick={() => toggleExpandPoem(item.id)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-teal-100">
                      {item.title}
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.date}
                    </span>
                  </div>

                  <div className="my-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg p-3">
                    <audio
                      ref={(el) => (audioRefs.current[item.id] = el)}
                      src={item.audioUrl}
                      onTimeUpdate={() => handleAudioUpdate(item.id)}
                      onLoadedMetadata={() => handleAudioUpdate(item.id)}
                    />
                    <div className="controls flex flex-wrap items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayPause(item.id);
                        }}
                        className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        {audioStates[item.id]?.isPlaying ? (
                          <FaPause className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        ) : (
                          <FaPlay className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        )}
                      </button>
                      <div className="time-display text-xs text-gray-700 dark:text-gray-300 min-w-[60px] text-center">
                        {formatTime(audioStates[item.id]?.currentTime || 0)} /{" "}
                        {formatTime(audioStates[item.id]?.duration || 0)}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(item.audioUrl, item.title);
                        }}
                        className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 ml-auto"
                      >
                        <FaDownload className="w-3 h-3 text-gray-700 dark:text-gray-300" />
                      </button>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={audioStates[item.id]?.duration || 0}
                      value={audioStates[item.id]?.currentTime || 0}
                      onChange={(e) =>
                        handleSeek(item.id, parseFloat(e.target.value))
                      }
                      className="progress-slider-small w-full mt-1"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>

                  {item.lyrics && (
                    <p className="line-clamp-3 whitespace-pre-line text-gray-600 dark:text-gray-300 font-serif italic">
                      {item.lyrics}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}