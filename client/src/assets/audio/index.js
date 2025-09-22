// import audio files for webpack processing
import mendeAudio from "./mende.mp3";
import lewozAudio from "./lewoz.mp3";
import toumblakAudio from "./toumblak.mp3";
import wouleAudio from "./woule.mp3";
import ringShoutAudio from "./ring_shout.mp3";
import sanjaAudio from "./sanja.mp3";
import numudonAudio from "./numudon.mp3";
import balakulandyaAudio from "./balakulandya.mp3";
import korodugaAudio from "./koroduga.mp3";

// map said audio file paths to webpack urls
export const audioFiles = {
	"/assets/audio/mende.mp3": mendeAudio,
	"/assets/audio/lewoz.mp3": lewozAudio,
	"/assets/audio/toumblak.mp3": toumblakAudio,
	"/assets/audio/woule.mp3": wouleAudio,
	"/assets/audio/ring_shout.mp3": ringShoutAudio,
	"/assets/audio/sanja.mp3": sanjaAudio,
	"/assets/audio/numudon.mp3": numudonAudio,
	"/assets/audio/balakulandya.mp3": balakulandyaAudio,
	"/assets/audio/koroduga.mp3": korodugaAudio,
};

// get actual webpack url for audio path
export function getAudioUrl(audioPath) {
	return audioFiles[audioPath] || audioPath;
}