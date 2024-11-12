type Record = {
  eventname: string;
  date: string;
  location: string;
  sold: number;
  capacity: number;
  id: string;
};

export const useEventStore = defineStore("eventStore", {
  state: () => ({
    events: [
      {
        eventname: "Koncert Letni",
        date: "2024-11-01",
        location: "Warszawa, Krakowska, 5",
        sold: 50,
        capacity: 100,
        id: "1523531535235251",
      },
      {
        eventname: "Festiwal Światła",
        date: "2024-11-02",
        location: "Kraków, Zielona, 15",
        sold: 30,
        capacity: 80,
        id: "12352521521164",
      },
      {
        eventname: "Noc Muzeów",
        date: "2024-11-03",
        location: "Gdańsk, Morska, 10",
        sold: 60,
        capacity: 120,
        id: "12343551235325",
      },
      {
        eventname: "Targi Książki",
        date: "2024-11-04",
        location: "Łódź, Piotrkowska, 12",
        sold: 45,
        capacity: 90,
        id: "43161346436134613",
      },
      {
        eventname: "Jarmark Bożonarodzeniowy",
        date: "2024-11-05",
        location: "Wrocław, Kwiatowa, 22",
        sold: 35,
        capacity: 70,
        id: "1464361436134613",
      },
      {
        eventname: "Festiwal Muzyki Jazzowej",
        date: "2024-11-06",
        location: "Poznań, Nowa, 7",
        sold: 55,
        capacity: 110,
        id: "4165435434636",
      },
      {
        eventname: "Wieczór Filmowy",
        date: "2024-11-07",
        location: "Szczecin, Słoneczna, 9",
        sold: 40,
        capacity: 100,
        id: "7445742527254754",
      },
      {
        eventname: "Dzień Kultury Azjatyckiej",
        date: "2024-11-08",
        location: "Bydgoszcz, Wodna, 3",
        sold: 20,
        capacity: 50,
        id: "654564684658568",
      },
      {
        eventname: "Koncert Symfoniczny",
        date: "2024-11-09",
        location: "Lublin, Lipowa, 13",
        sold: 70,
        capacity: 150,
        id: "15325124747547",
      },
      {
        eventname: "Maraton Filmowy",
        date: "2024-11-10",
        location: "Rzeszów, Górska, 8",
        sold: 65,
        capacity: 120,
        id: "4364373867243",
      },
    ] as Record[],
  }),
  getters: {
    getEventByID: (state) => (id: string) =>
      state.events.find((event) => event.id === id),
  },
  actions: {
    addEvent(newEvent: Record) {
      this.events.push(newEvent);
    },
    removeLastEvent() {
      this.events.pop();
    },
    removeEventByName(name: string) {
      this.events = this.events.filter((event) => event.eventname !== name);
    },
  },
});
