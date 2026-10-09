# Lesson podcasts (NotebookLM Audio Overviews)

One short podcast (about 1½–2 minutes, NotebookLM **Brief** format) introduces each lesson before Soda starts it:

| Set | Episodes | Plays in the app |
|---|---|---|
| Grammar stages | G6-1 … G6-5, G7-1 … G7-6 (11) | on the stage in the grammar trail ("Listen first") and on every module page in that stage |
| Vocabulary patterns | P6-01 … P6-12, P7-01 … P7-12 (24) | on the pattern card (Patterns tab) |

Every unit page also lists its episodes under **Listen and watch**, and Base Camp shows how many have been heard. Listening to 90% of an episode gives +10 XP once; 10 episodes earn the *Good Listener* badge.

## Files

- `sources/*.md` — one NotebookLM source per episode, built from the app's own rule cards and pattern cards (`g6s1.md` … `p7-sounds.md`). The first line carries the episode code.
- `episodes.json` — code ↔ stage / pattern id.
- `../../audio/<code>.mp3` — the episode (mono MP3, 56 kbps).
- `../../media.js` — the list the app reads (title, duration, stage/pattern, transcript).

## NotebookLM notebooks

- **Trail Mix · Unit 6 podcasts (Soda)** — 17 sources
- **Trail Mix · Unit 7 podcasts (Soda)** — 18 sources

Each episode was made from **one** source (all other sources unticked), format **Brief**, language English, with this focus prompt:

> This episode is for one 13-year-old Thai student at A2 English level who is about to start this lesson. Speak slowly and clearly in simple British English with short sentences, and explain any grammar word you use. Make it a friendly preview: what he is going to learn and why, the key rule, two or three examples, and the classic mistakes (say the wrong sentence, then the right one). Do not read out symbols, asterisks or table lines, and do not mention 'the source', 'the document' or 'the notes'. End with the quick challenge or the 'Try it' task: ask it, give him a moment to think, then give the answer.

Each finished episode is renamed in NotebookLM to start with its code (e.g. `G6-3 Much, Many, and A Lot Of`).

## Checks done on every episode

- Transcribed and read in full against the source rule card. Spoken stage directions ("Pause for three seconds") were cut out of the audio and replaced with a real pause; one inaccurate aside was removed (P6-11, the definition of *species*).
- The transcript shown in the app is the checked transcript.

## Replacing an episode

Generate a new Brief overview from the episode's source with the prompt above, download it, convert to mono MP3 (`ffmpeg -i in.m4a -ac 1 -b:a 56k audio/<code>.mp3`), update the duration in `media.js`, and bump the `?v=` stamp in `index.html`.
