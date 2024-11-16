import type { EventItem, DBResponce } from "@/types/mongoSchema";

export type EventFilterType = (typeof FILTERS)[number];
export type EventSortType = (typeof SORT_OPTIONS)[number];
const SORT_OPTIONS = [
  "A-Z",
  "Z-A",
  "Newest",
  "Oldest",
  "City",
  "Street",
  "Location",
  "Most Sold",
  "Least Sold",
  "Largest Pool",
  "Smallest Pool",
  "Success Rate",
] as const;
const FILTERS = ["Date", "Adress", "Sold/Cap", "S/C Ratio"] as const;
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
      filters: new Set(["Date", "Adress", "Sold/Cap"]),
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
      return sortEventsBy(state.sorted, filteredBySearch);
    },
    getAllSortedOptions: () => () => SORT_OPTIONS,
    getAllFilterOptions: () => () => FILTERS,
  },
  actions: {
    async fetchEvents() {
      try {
        const response = await $fetch<DBResponce<EventItem>[]>(
          "/api/events/getEvents",
          {
            method: "GET",
          }
        );
        this.events = responseToTyped(response);
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

function sortEventsBy(currentSort: EventSortType, list: EventItem[]) {
  switch (currentSort) {
    case "A-Z":
      return list.sort((a, b) => a.eventName.localeCompare(b.eventName));
    case "Z-A":
      return list.sort((a, b) => b.eventName.localeCompare(a.eventName));
    case "Newest":
      return list.sort((a, b) => b.date.getTime() - a.date.getTime());
    case "Oldest":
      return list.sort((a, b) => a.date.getTime() - b.date.getTime());
    case "City":
      return list.sort((a, b) => a.city.localeCompare(b.city));
    case "Street":
      return list.sort((a, b) => a.street.localeCompare(b.street));
    case "Location":
      return list.sort((a, b) => a.location.localeCompare(b.location));
    case "Most Sold":
      return list.sort((a, b) => b.sold - a.sold);
    case "Least Sold":
      return list.sort((a, b) => a.sold - b.sold);
    case "Largest Pool":
      return list.sort((a, b) => b.capacity - a.capacity);
    case "Smallest Pool":
      return list.sort((a, b) => a.capacity - b.capacity);
    case "Success Rate":
      return list.sort((a, b) => b.sold / b.capacity - a.sold / a.capacity);
    default:
      return list;
  }
}
