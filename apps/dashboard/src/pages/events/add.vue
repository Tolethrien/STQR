<script setup lang="ts">
import getIcons from "@/utils/icons";
const { plusIcon, pictureFrame } = getIcons();
const { addEvent } = useEventStore();
const router = useRouter();

const isValidating = ref(false);
const formData = reactive({
  event: "",
  city: "",
  street: "",
  location: "",
  date: "",
  time: "",
});
const createNewEvent = async () => {
  const someEmpty = Object.values(formData).some((value) => value.length === 0);
  if (someEmpty) {
    isValidating.value = true;
    setTimeout(() => (isValidating.value = false), 2000);
    return;
  }
  try {
    await addEvent({
      capacity: 0,
      sold: 0,
      city: formData.city,
      date: new Date(`${formData.date}T${formData.time}`),
      eventName: formData.event,
      location: formData.location,
      street: formData.street,
    });
    await router.replace("/events");
  } catch (e) {
    console.error("problem while adding event", e);
    //TODO: add some error for user, popover or something
  }
};
</script>
<template>
  <CommonVerticalBar>
    <InputsSearchbar disable />
    <div class="flex h-full items-center gap-4">
      <InputsSortedBy disable />
      <InputsFilteredBy disable />
    </div>
    <InputsAccentButton
      type="route"
      :icon="plusIcon"
      text="Add New"
      disable
      :action="{ link: '' }"
      :css="{ shell: 'p-2', iconPos: 'flex-col' }"
    />
  </CommonVerticalBar>
  <div class="grid h-full grid-cols-[auto_1fr] overflow-hidden">
    <CommonHorizontalBar>
      <div class="bg-dash-sec w-36 h-44 self-start mt-8 shadow-button-inner">
        <p class="text-center text-2xl py-4">
          {{ formData.event.length > 0 ? formData.event : "Event Name" }}
        </p>
        <div
          class="w-24 h-24 mt-2 bg-dash-TextInactive justify-self-center flex justify-center items-center rounded-md"
        >
          <img :src="pictureFrame" alt="" class="brightness-50" />
        </div>
      </div>
    </CommonHorizontalBar>
    <div class="px-10 py-2 overflow-y-auto">
      <form>
        <p class="text-5xl py-4 pb-6">Tailor your Event!</p>
        <p class="text-xl py-4">How it should be named?</p>
        <label aria-label="event name">
          <input
            required
            :class="`text-input-third ${formData.event.length === 0 && isValidating && 'animate-shakeAndFlash'}`"
            v-model="formData.event"
            placeholder="event name..."
          />
        </label>
        <p class="text-xl py-4">Specify the address...</p>
        <div class="flex gap-4">
          <label aria-label="city">
            <input
              required
              :class="`text-input-third ${formData.city.length === 0 && isValidating && 'animate-shakeAndFlash'}`"
              v-model="formData.city"
              placeholder="city..."
            />
          </label>
          <label aria-label="street">
            <input
              required
              :class="`text-input-third ${formData.street.length === 0 && isValidating && 'animate-shakeAndFlash'}`"
              v-model="formData.street"
              placeholder="street..."
            />
          </label>
        </div>
        <div class="py-4">
          <label aria-label="location/place">
            <input
              required
              :class="`text-input-third ${formData.location.length === 0 && isValidating && 'animate-shakeAndFlash'}`"
              v-model="formData.location"
              placeholder="location/place..."
            />
          </label>
        </div>
        <p class="text-xl py-4">...or pick from the saved adresses!</p>
        <select
          class="bg-dash-third w-1/2 shadow-button-inner placeholder:text-dash-TextInactive rounded-md px-4 py-2 outline-none"
        >
          <option value="" disabled selected>No saved addresses yet!</option>
        </select>
        <p class="text-xl py-4">When event happens?</p>
        <div class="flex gap-4 items-center">
          <label aria-label="date">
            <input
              required
              :class="`text-input-third ${formData.date.length === 0 && isValidating && 'animate-shakeAndFlash'}`"
              v-model="formData.date"
              type="date"
            />
          </label>

          <span>on</span>
          <label aria-label="time">
            <input
              required
              :class="`text-input-third ${formData.time.length === 0 && isValidating && 'animate-shakeAndFlash'}`"
              v-model="formData.time"
              type="time"
            />
          </label>
        </div>
        <div class="flex justify-center py-8">
          <InputsAccentButton
            type="button"
            :icon="plusIcon"
            text="Create Event!"
            :action="{ click: createNewEvent }"
            :css="{
              iconPos: 'flex-row',
              img: 'scale-50',
              shell: 'px-4 rounded-sm',
              text: 'text-lg',
            }"
          />
        </div>
      </form>
    </div>
  </div>
</template>
