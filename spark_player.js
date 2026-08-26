const container = document.getElementById('videoContainer');
    const video = document.getElementById('videoPlayer');
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const muteBtn = document.getElementById('muteBtn');
    const volHighIcon = document.getElementById('volHighIcon');
    const volMuteIcon = document.getElementById('volMuteIcon');
    const volumeSlider = document.getElementById('volumeSlider');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const enterFullscreenIcon = document.getElementById('enterFullscreenIcon');
    const exitFullscreenIcon = document.getElementById('exitFullscreenIcon');
    const timelineContainer = document.getElementById('timelineContainer');
    const timelineProgress = document.getElementById('timelineProgress');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const controlsOverlay = document.getElementById('controlsOverlay');
    const lockBtn = document.getElementById('lockBtn');
    const unlockedIcon = document.getElementById('unlockedIcon');
    const lockedIcon = document.getElementById('lockedIcon');

    let controlsTimeout;
    let isLocked = false;

    function toggleLock() {
      isLocked = !isLocked;
      unlockedIcon.style.display = isLocked ? 'none' : 'block';
      lockedIcon.style.display = isLocked ? 'block' : 'none';
      controlsOverlay.style.display = isLocked ? 'none' : 'flex';
      lockBtn.title = isLocked ? "Unlock Screen UI (L)" : "Lock Screen UI (L)";
    }

    lockBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLock();
    });

    function togglePlay() {
      if (isLocked) return;
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    }

    video.addEventListener('play', () => {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      resetInactivityTimer();
    });

    video.addEventListener('pause', () => {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      container.classList.remove('hide-controls');
      clearTimeout(controlsTimeout);
    });

    playBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    function toggleFullscreen() {
      if (isLocked) return;
      if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => console.error(err));
      } else {
        document.exitFullscreen().catch(err => console.error(err));
      }
    }

    fullscreenBtn.addEventListener('click', toggleFullscreen);

    document.addEventListener('fullscreenchange', () => {
      const isFullscreen = !!document.fullscreenElement;
      enterFullscreenIcon.style.display = isFullscreen ? 'none' : 'block';
      exitFullscreenIcon.style.display = isFullscreen ? 'block' : 'none';
    });

    document.addEventListener('keydown', (e) => {
      if (e.target.tagName.toLowerCase() === 'input') return;
      if (e.key.toLowerCase() === 'l') {
        e.preventDefault();
        toggleLock();
        return;
      }
      if (isLocked) return;
      if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === ' ' || e.key.toLowerCase() === 'k') {
        e.preventDefault();
        togglePlay();
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        toggleMute();
      }
    });

    function formatTime(time) {
      if (isNaN(time)) return "00:00";
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    video.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(video.duration);
    });

    video.addEventListener('timeupdate', () => {
      currentTimeEl.textContent = formatTime(video.currentTime);
      const progressPercent = (video.currentTime / video.duration) * 100;
      timelineProgress.style.width = `${progressPercent}%`;
    });

    timelineContainer.addEventListener('click', (e) => {
      if (isLocked) return;
      const rect = timelineContainer.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      video.currentTime = pos * video.duration;
    });

    function toggleMute() {
      if (isLocked) return;
      video.muted = !video.muted;
      updateVolumeUI();
    }

    function updateVolumeUI() {
      if (video.muted || video.volume === 0) {
        volHighIcon.style.display = 'none';
        volMuteIcon.style.display = 'block';
        volumeSlider.value = 0;
      } else {
        volHighIcon.style.display = 'block';
        volMuteIcon.style.display = 'none';
        volumeSlider.value = video.volume;
      }
    }

    muteBtn.addEventListener('click', toggleMute);

    volumeSlider.addEventListener('input', (e) => {
      video.volume = e.target.value;
      video.muted = (video.volume === 0);
      updateVolumeUI();
    });

    // Cursor & UI inactivity timer (1000ms)
    function resetInactivityTimer() {
      container.classList.remove('hide-controls');
      clearTimeout(controlsTimeout);
      if (!video.paused) {
        controlsTimeout = setTimeout(() => {
          container.classList.add('hide-controls');
        }, 1000);
      }
    }

    container.addEventListener('mousemove', resetInactivityTimer);
    container.addEventListener('pointermove', resetInactivityTimer);
    container.addEventListener('touchstart', resetInactivityTimer, { passive: true });
    container.addEventListener('mouseleave', () => {
      if (!video.paused) container.classList.add('hide-controls');
    });
