// Check if this is a fresh page load vs back/forward navigation
const isBackNavigation = performance.getEntriesByType("navigation")[0].type === "back_forward";

if (!isBackNavigation) {
    const audio = new Audio('/audio/vineBoom.mp3');
    audio.play().catch(error => console.log('Audio playback failed:', error));
}