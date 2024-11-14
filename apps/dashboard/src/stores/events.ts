import type { EventItem, StringifyEventItem } from "@/types/eventSchema";

export type EventFilterType = "Location" | "Date" | "Sold/Cap";
export type EventSortType = "A-Z" | "Z-A" | "Date" | "Sold" | "Cap";

interface EventStore {
  events: EventItem[];
  search: string;
  filters: Set<EventFilterType>;
  sorted: EventSortType;
}
export const useEventStore = defineStore("eventStore", {
  state: () =>
    ({
      events: [],
      search: "",
      filters: new Set(["Date", "Location", "Sold/Cap"]),
      sorted: "A-Z",
    }) as EventStore,
  getters: {
    getFilters: (state) => () => state.filters,
    getSorted: (state) => () => state.sorted,
    getEventByID: (state) => (id: string) =>
      state.events.find((event) => event.id === id),
    getEventsBySortedSearch: (state) => () => {
      const filteredBySearch = state.events.filter((event) =>
        event.eventName.toLowerCase().includes(state.search.toLowerCase())
      );
      switch (state.sorted) {
        case "A-Z":
          return filteredBySearch.sort((a, b) =>
            a.eventName.localeCompare(b.eventName)
          );
        case "Z-A":
          return filteredBySearch.sort((a, b) =>
            b.eventName.localeCompare(a.eventName)
          );
        case "Date":
          //TODO
          return filteredBySearch;
        case "Sold":
          return filteredBySearch.sort((a, b) => a.sold - b.sold);
        case "Cap":
          return filteredBySearch.sort((a, b) => a.capacity - b.capacity);
        default:
          return filteredBySearch;
      }
    },
    getAllSortedOptions: (state) => () =>
      ["A-Z", "Z-A", "Date", "Sold", "Cap"] as EventStore["sorted"][],
  },
  actions: {
    async fetchEvents() {
      try {
        const response = await $fetch<StringifyEventItem[]>(
          "/api/events/getEvents",
          {
            method: "GET",
          }
        );
        console.log(response);
        this.events = convertEventApiToTyped(response);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
    async addEvent(eventItem: Omit<EventItem, "id">) {
      try {
        await $fetch(`/api/events/addEvent`, {
          method: "POST",
          query: eventItem,
        });
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      this.fetchEvents();
    },
    setSearch(searchValue: string) {
      this.search = searchValue;
    },
    setSorted(sort: EventSortType) {
      this.sorted = sort;
    },
    toggleFilter(filter: EventFilterType) {
      this.filters.has(filter)
        ? this.filters.delete(filter)
        : this.filters.add(filter);
    },
  },
});
