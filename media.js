/* ============================================================
   TRAIL MIX — media shelf  (THE ONLY FILE YOU EDIT TO ADD AUDIO / VIDEO)
   ------------------------------------------------------------
   The podcast, video and extras nodes are already built into the app.
   While a list is empty, Base Camp shows a tidy "coming soon" slot.

   Add an object to the right list. Every field except id/title is optional.

   PODCAST
     { id:"p1", title:"Countable or not? The pour test", url:"audio/p1.mp3",
       duration:"6:20", unit:6, module:"g6m1", transcript:"…" }
       - url can be a file in an audio/ folder, or any https link.
       - external:true turns it into a Listen button (Spotify, Apple…).

   VIDEO
     { id:"v1", title:"Going to, will or -ing?", youtube:"VIDEOID",
       duration:"3:10", unit:7, module:"g7m7" }
       - or iframe:"https://…" for a non-YouTube player.

   EXTRAS  (Blooket games, NotebookLM decks, worksheets)
     { id:"x1", title:"Unit 6 Blooket", url:"https://…", unit:6 }

   unit:6 or unit:7 shows the item on that unit's page and Base Camp.
   module:"g6m5" also puts a chip on that module's rule card.
   ============================================================ */
window.MEDIA = {
  podcasts: [],
  videos: [],
  extras: []
};
