import { Howl } from 'howler';

const sounds = {
  treasure: new Howl({
    src: ['https://freesound.org/data/previews/456/456965_6456158-lq.mp3'],
  }),

  leaves: new Howl({
    src: ['https://freesound.org/data/previews/508/508543_5026978-lq.mp3'],
  }),

  ambience: new Howl({
    src: ['https://sound-effects-media.bbcrewind.co.uk/mp3/NHU05018179.mp3'],
    autoplay: true,
  }),

  victory: new Howl({
    src: ['https://sound-effects-media.bbcrewind.co.uk/mp3/07003077.mp3'],
  }),
};

export default sounds;
