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
        state.notesList.find((item) => item.id === id)?.tasks;
      },
    addNewTask:
      (state) =>
      ({ id, newTask }: any) => {
        state.notesList.find((item) => item.id === id)?.tasks.push(newTask);
      },
  },
});
