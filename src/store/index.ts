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
    onRemoveTask(state, id) {
      const taskObj = state.notesList.find((item) => item.id === id);
      if (taskObj) {
        taskObj.tasks = [];
      }
    },
    onClearTasks(state, id) {
      state.notesList = state.notesList.filter((item) => item.id !== id);
    },
  },
  actions: {
    ON_ADD_LIST({ commit }, newNoteList) {
      commit("onAddList", newNoteList);
    },
    ON_REMOVE_TASK({ commit }, id) {
      commit("onRemoveTask", id);
    },
    ON_CLEAR_TASKS({ commit }, id) {
      commit("onClearTasks", id);
    },
  },
  getters: {
    getNotesList(state) {
      return state.notesList;
    },
    addNewTask:
      (state) =>
      ({ id, newTask }: any) => {
        state.notesList.find((item) => item.id === id)?.tasks.push(newTask);
      },
  },
});
