import { ref, computed, type Ref } from "vue";

export interface Track {
    id: number;
    title: string;
    artist: string;
    image: string | null;
    audio: string | null;
    slug: string;
    play_count?: number;
    created_at?: string;
}

interface AudioPlayerState {
    currentTrack: Track | null;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    audioElement: HTMLAudioElement | null;
    tracksList: Track[];
    isShuffle: boolean;
    playHistory: Track[];
    playedTracks: Set<number>;
}

const state = ref<AudioPlayerState>({
    currentTrack: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    audioElement: null,
    tracksList: [],
    isShuffle: false,
    playHistory: [],
    playedTracks: new Set(),
});

export function useAudioPlayer() {
    const currentTrack = computed(() => state.value.currentTrack);
    const isPlaying = computed(() => state.value.isPlaying);
    const currentTime = computed(() => state.value.currentTime);
    const duration = computed(() => state.value.duration);
    const volume = computed(() => state.value.volume);
    const isShuffle = computed(() => state.value.isShuffle);

    function setTrack(track: Track | null) {
        if (state.value.audioElement) {
            state.value.audioElement.pause();
            state.value.audioElement = null;
        }

        if (!track) {
            state.value.currentTrack = null;
            state.value.isPlaying = false;
            state.value.currentTime = 0;
            state.value.duration = 0;
            return;
        }

        if (state.value.isShuffle && state.value.currentTrack) {
            state.value.playHistory.push(state.value.currentTrack);
        }

        state.value.currentTrack = track;
        state.value.isPlaying = false;
        state.value.currentTime = 0;
        state.value.duration = 0;

        if (state.value.isShuffle) {
            state.value.playedTracks.add(track.id);
        }

        if (track.audio) {
            const audio = new Audio(`/storage/${track.audio}`);
            state.value.audioElement = audio;

            audio.addEventListener("loadedmetadata", () => {
                state.value.duration = audio.duration;
            });

            audio.addEventListener("timeupdate", () => {
                state.value.currentTime = audio.currentTime;
            });

            audio.addEventListener("ended", () => {
                state.value.isPlaying = false;
                state.value.currentTime = 0;
                nextTrack();
            });

            audio.addEventListener("canplay", () => {
                audio.play()
                    .then(() => {
                        state.value.isPlaying = true;
                    })
                    .catch(() => {
                        state.value.isPlaying = false;
                    });
            });

            audio.volume = state.value.volume;
        }
    }

    function clearTrack() {
        setTrack(null);
    }

    function play() {
        if (state.value.audioElement && state.value.currentTrack) {
            state.value.audioElement.play();
            state.value.isPlaying = true;
        }
    }

    function pause() {
        if (state.value.audioElement) {
            state.value.audioElement.pause();
            state.value.isPlaying = false;
        }
    }

    function togglePlayPause() {
        if (state.value.isPlaying) {
            pause();
        } else {
            play();
        }
    }

    function setCurrentTime(time: number) {
        if (!state.value.audioElement) return;

        if (state.value.audioElement.readyState < 1) {
            state.value.audioElement.addEventListener(
                "loadedmetadata",
                () => {
                    const validTime = Math.max(
                        0,
                        Math.min(time, state.value.audioElement!.duration || 0),
                    );
                    const wasPlaying = state.value.isPlaying;
                    state.value.audioElement!.currentTime = validTime;
                    state.value.currentTime = validTime;

                    if (wasPlaying && state.value.audioElement!.paused) {
                        state.value.audioElement!.play().catch(() => {});
                    }
                },
                { once: true },
            );
            return;
        }

        const maxDuration = state.value.duration || state.value.audioElement.duration || 0;
        const validTime = Math.max(0, Math.min(time, maxDuration));
        const wasPlaying = state.value.isPlaying;

        try {
            state.value.audioElement.currentTime = validTime;
            state.value.currentTime = validTime;

            if (wasPlaying && state.value.audioElement.paused) {
                state.value.audioElement.play().catch(() => {});
            }
        } catch (error) {
            console.warn("Could not set audio currentTime:", error);
        }
    }

    function setVolume(vol: number) {
        const volumeValue = Math.max(0, Math.min(1, vol));
        state.value.volume = volumeValue;
        if (state.value.audioElement) {
            state.value.audioElement.volume = volumeValue;
        }
    }

    function formatTime(seconds: number): string {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    }

    function setTracksList(tracks: Track[]) {
        state.value.tracksList = tracks;
    }

    function nextTrack() {
        if (state.value.tracksList.length === 0) return;

        if (state.value.isShuffle) {
            const availableTracks = state.value.tracksList.filter(
                (t) => !state.value.playedTracks.has(t.id)
            );

            if (availableTracks.length === 0 || state.value.playedTracks.size === state.value.tracksList.length) {
                state.value.playedTracks.clear();
                const randomIndex = Math.floor(Math.random() * state.value.tracksList.length);
                setTrack(state.value.tracksList[randomIndex]);
            } else {
                const randomIndex = Math.floor(Math.random() * availableTracks.length);
                setTrack(availableTracks[randomIndex]);
            }
        } else {
            if (!state.value.currentTrack) {
                setTrack(state.value.tracksList[0]);
                return;
            }

            const currentIndex = state.value.tracksList.findIndex(
                (t) => t.id === state.value.currentTrack?.id,
            );
            
            if (currentIndex === -1) {
                setTrack(state.value.tracksList[0]);
                return;
            }

            const nextIndex = (currentIndex + 1) % state.value.tracksList.length;
            setTrack(state.value.tracksList[nextIndex]);
        }
    }

    function previousTrack() {
        if (state.value.tracksList.length === 0) return;

        if (state.value.isShuffle) {
            if (state.value.playHistory.length > 0) {
                const previousTrack = state.value.playHistory.pop();
                if (previousTrack) {
                    setTrack(previousTrack);
                }
            }
        } else {
            if (!state.value.currentTrack) {
                setTrack(state.value.tracksList[state.value.tracksList.length - 1]);
                return;
            }

            const currentIndex = state.value.tracksList.findIndex(
                (t) => t.id === state.value.currentTrack?.id,
            );
            
            if (currentIndex === -1) {
                setTrack(state.value.tracksList[state.value.tracksList.length - 1]);
                return;
            }

            const previousIndex = currentIndex === 0 
                ? state.value.tracksList.length - 1 
                : currentIndex - 1;
            setTrack(state.value.tracksList[previousIndex]);
        }
    }

    function toggleShuffle() {
        state.value.isShuffle = !state.value.isShuffle;
        if (!state.value.isShuffle) {
            state.value.playHistory = [];
            state.value.playedTracks.clear();
        }
    }

    function playFirstTrack() {
        if (state.value.tracksList.length === 0) return;

        if (state.value.isShuffle) {
            const randomIndex = Math.floor(Math.random() * state.value.tracksList.length);
            setTrack(state.value.tracksList[randomIndex]);
        } else {
            setTrack(state.value.tracksList[0]);
        }
    }

    function getQueue(): Track[] {
        if (state.value.tracksList.length === 0) return [];

        if (state.value.isShuffle) {
            const remainingTracks = state.value.tracksList.filter(
                (t) => !state.value.playedTracks.has(t.id)
            );
            const shuffled = [...remainingTracks].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, 10);
        } else {
            if (!state.value.currentTrack) {
                return state.value.tracksList.slice(0, 10);
            }

            const currentIndex = state.value.tracksList.findIndex(
                (t) => t.id === state.value.currentTrack?.id,
            );
            
            if (currentIndex === -1) {
                return state.value.tracksList.slice(0, 10);
            }

            const nextTracks = [];
            for (let i = 1; i <= 10; i++) {
                const index = (currentIndex + i) % state.value.tracksList.length;
                nextTracks.push(state.value.tracksList[index]);
            }
            return nextTracks;
        }
    }

    const queue = computed(() => getQueue());

    return {
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        isShuffle,
        queue,
        setTrack,
        clearTrack,
        play,
        pause,
        togglePlayPause,
        setCurrentTime,
        setVolume,
        formatTime,
        setTracksList,
        nextTrack,
        previousTrack,
        toggleShuffle,
        playFirstTrack,
        getQueue,
    };
}
