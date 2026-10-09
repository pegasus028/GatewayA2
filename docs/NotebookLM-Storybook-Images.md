# Storybook illustrations in NotebookLM

The two storybooks (*The 500-Baht Cook-Off* and *Wild Week*) already work without illustrations: each page shows a mosaic of real photos of the words on that page. When you want drawn illustrations of Tonkla and Fah, make them in NotebookLM and drop them in. Nothing else needs to change apart from one line per page.

| What | Where |
|---|---|
| The one source you upload | `docs/SOURCE-Storybook-Art-Brief.md` |
| The prompt you paste | Section 2 below |
| Where finished images go | `art/story/` under the names in Section 4 |

## 1. Click by click

1. Open **notebooklm.google.com** and click **Create new** (a fresh notebook).
2. **Add source → Upload file** → `SOURCE-Storybook-Art-Brief.md`. If `.md` is refused, paste its text into a Google Doc and add the Doc. Add nothing else.
3. **Studio → Slide Deck → Presenter Slides**, language English, length **Short**.
4. Paste the prompt from Section 2 into "Describe the slide deck…" and click **Generate**.
5. When it finishes, check each slide: Tonkla in red, Fah with the camera on the green strap, no writing anywhere. Regenerate any slide that fails.
6. Download the deck (PDF or Slides), export each slide as a JPG about 1600 px wide, and name it as in Section 4.

Tip: 23 images is a lot for one deck. Run it twice: once for slides 1–12 (Unit 6), once for 13–23 (Unit 7), changing the numbers in the prompt.

## 2. The prompt

> Make exactly one slide for each "Slide" section in the source, in order. Each slide is a single full-bleed illustration that follows that section's description exactly, in the style given at the top of the source. Draw Tonkla and Fah exactly as the character section describes, every time. Put no title, no caption, no text, no numbers, no logos and no speaker notes on any slide. Do not add people, animals or objects that the section does not mention.

## 3. Putting an image into the app

Open `data/u6-story.js` (or `u7-story.js`), find the page, and fill its `img` field, for example:

```js
img: "art/story/u6-c1p1.jpg",
```

Leave `img` empty and the page goes back to the photo mosaic. Any shape of image works; it is cropped to fill the panel.

## 4. File names

| Slide | Page | File |
|---|---|---|
| 1 | The 500-Baht Cook-Off, chapter 1 page 1 | `art/story/u6-c1p1.jpg` |
| 2 | The 500-Baht Cook-Off, chapter 1 page 2 | `art/story/u6-c1p2.jpg` |
| 3 | The 500-Baht Cook-Off, chapter 1 page 3 | `art/story/u6-c1p3.jpg` |
| 4 | The 500-Baht Cook-Off, chapter 2 page 1 | `art/story/u6-c2p1.jpg` |
| 5 | The 500-Baht Cook-Off, chapter 2 page 2 | `art/story/u6-c2p2.jpg` |
| 6 | The 500-Baht Cook-Off, chapter 2 page 3 | `art/story/u6-c2p3.jpg` |
| 7 | The 500-Baht Cook-Off, chapter 3 page 1 | `art/story/u6-c3p1.jpg` |
| 8 | The 500-Baht Cook-Off, chapter 3 page 2 | `art/story/u6-c3p2.jpg` |
| 9 | The 500-Baht Cook-Off, chapter 3 page 3 | `art/story/u6-c3p3.jpg` |
| 10 | The 500-Baht Cook-Off, chapter 4 page 1 | `art/story/u6-c4p1.jpg` |
| 11 | The 500-Baht Cook-Off, chapter 4 page 2 | `art/story/u6-c4p2.jpg` |
| 12 | The 500-Baht Cook-Off, chapter 4 page 3 | `art/story/u6-c4p3.jpg` |
| 13 | Wild Week, chapter 1 page 1 | `art/story/u7-c1p1.jpg` |
| 14 | Wild Week, chapter 1 page 2 | `art/story/u7-c1p2.jpg` |
| 15 | Wild Week, chapter 2 page 1 | `art/story/u7-c2p1.jpg` |
| 16 | Wild Week, chapter 2 page 2 | `art/story/u7-c2p2.jpg` |
| 17 | Wild Week, chapter 2 page 3 | `art/story/u7-c2p3.jpg` |
| 18 | Wild Week, chapter 3 page 1 | `art/story/u7-c3p1.jpg` |
| 19 | Wild Week, chapter 3 page 2 | `art/story/u7-c3p2.jpg` |
| 20 | Wild Week, chapter 3 page 3 | `art/story/u7-c3p3.jpg` |
| 21 | Wild Week, chapter 4 page 1 | `art/story/u7-c4p1.jpg` |
| 22 | Wild Week, chapter 4 page 2 | `art/story/u7-c4p2.jpg` |
| 23 | Wild Week, chapter 4 page 3 | `art/story/u7-c4p3.jpg` |
