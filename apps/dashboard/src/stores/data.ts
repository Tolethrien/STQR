type Record = {
  eventName: string;
  date: string;
  location: string;
  sold: number;
  capacity: number;
  _id: string;
};

export const useEventStore = defineStore("eventStore", {
  state: () => ({
    events: [] as Record[],
  }),
  getters: {
    getEventByID: (state) => (id: string) =>
      state.events.find((event) => event._id === id),
  },
  actions: {
    async fetchEvents() {
      try {
        const response = await $fetch<Record[]>("/api/getEvents", {
          method: "GET",
        });
        this.events = response;
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
    async addEvent() {
      try {
        await $fetch("/api/addEvent", { method: "POST" });
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      this.fetchEvents();
    },
  },
});
