import { v4 as uuidv4 } from "uuid";

const notes = (store) => {
  store.on("@init", () => ({
    notes: [
      {
        id: uuidv4(),
        item:
          "Storeon is a React state management library and unlike other state management libraries which uses Context, it utilises an event-driven approach like Redux.",
      },
      {
        id: uuidv4(),
        item:
          "This is a really short note. I have began to study the basic concepts of technical writing and I'm optimistic about becoming one of the best technical writer.",
      },
    ],
  }));
  store.on("addNote", ({ notes }, note) => {
    return {
      notes: [...notes, { id: uuidv4(), item: note }],
    };
  });
  store.on("deleteNote", ({ notes }, id) => ({
    notes: notes.filter((note) => note.id !== id),
  }));
  store.on("inc", (store, payload) => {
    console.log(
      "This is notes store listening to counter" + JSON.stringify(store)
    );
  });
};

export default notes;
