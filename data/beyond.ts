export type BeyondEntry = {
  label: string;
  title: string;
  detail: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// ACTION REQUIRED — this is the one section the resume could not fill in.
//
// It ships EMPTY on purpose: an empty array hides the "Beyond work" section and
// its nav link entirely, which is far better than publishing "Add a hobby here"
// on a live portfolio. Uncomment the template below, replace it with things that
// are actually true about you, and the section reappears automatically.
// ─────────────────────────────────────────────────────────────────────────────
export const beyond: BeyondEntry[] = [
  {
    label: 'Reading',
    title: 'Reading',
    detail: 'Read across fiction and non-fiction, with a keen interest in science, murder mysteries and philosophy',
  },
  {
    label: 'Sport / fitness',
    title: 'Badminton, Lawn Tennis, Table Tennis',
    detail: 'Am personally excited about racket sports in general. Have been a state level badminton player in the past, and always in search of exciting matches around!',
  },
  {
    label: 'Photography',
    title: 'Photography',
    detail: 'Keen interest in photography, especially street and still life. I possess a Fujifilm X-t50 and have been tinkering with Adobe lightroom for post-processing. I have a small collection of my work on my Instagram page named fuji_visions',
  },
  // {
  //   label: 'Languages',
  //   title: 'Languages',
  //   detail: 'Currently learning Japanese. Fluent in English, Hindi and Bengali',
  // },
];
