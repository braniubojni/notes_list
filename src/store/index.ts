import { createStore } from "vuex";

export default createStore({
  state: {
    notesList: [
      {
        id: 1,
        name: "To do",
        tasks: ["Build the feature", "Test the feature", "Commit feature"],
      },
      {
        id: 2,
        name: "Doing",
        tasks: ["Test the app before launching", "Commit feature"],
      },
      {
        id: 3,
        name: "Done",
        tasks: [
          "Set up app landing page",
          "Send out email invitations to the sub",
        ],
      },
    ],
  },
  mutations: {
    onAddList(state, newNoteList) {
      state.notesList.push(newNoteList);
    },
  },
  actions: {
    ON_ADD_LIST({ commit }, newNoteList) {
      commit("onAddList", newNoteList);
    },
  },
  getters: {
    getNotesList(state) {
      return state.notesList;
    },
    removeTaskList:
      (state) =>
      ({ id }: any) => {
        const tasks = state.notesList.find((item) => item.id === id);
        if (tasks?.tasks) {
          tasks.tasks = [];
        }
      },
    removeNotesList:
      (state) =>
      ({ id }: any) => {
        state.notesList = state.notesList.filter((item) => item.id !== id);
      },
    addNewTask:
      (state) =>
      ({ id, newTask }: any) => {
        state.notesList.find((item) => item.id === id)?.tasks.push(newTask);
      },
  },
});
