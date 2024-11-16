<script setup lang="ts">
//TODO: POOGARNIAC LEJBLE
</script>
<template>
  <CommonVerticalBar>
    <InputsSearchbar disable />
    <div class="flex h-full items-center gap-4">
      <InputsSortedBy disable />
      <InputsFilteredBy disable />
    </div>
    <InputsAddNewButton :disable="true" />
  </CommonVerticalBar>
  <div class="grid h-full grid-cols-[auto_1fr] overflow-hidden">
    <CommonHorizontalBar>
      <div class="bg-dash-sec w-36 h-44 self-start mt-8 shadow-button-inner">
        <p class="text-center text-2xl py-4">Party Name</p>
        <div
          class="w-24 h-24 mt-2 bg-dash-TextInactive justify-self-center rounded-md"
        ></div>
      </div>
    </CommonHorizontalBar>
    <div class="px-10 py-2 overflow-y-auto">
      <p class="text-5xl py-4 pb-6">Tailor your Event!</p>
      <p class="text-xl py-4">How it should be named?</p>
      <InputsTextInput placeholder="event name..."></InputsTextInput>
      <p class="text-xl py-4">Specify the address...</p>
      <div class="flex gap-4">
        <InputsTextInput placeholder="city..."></InputsTextInput>
        <InputsTextInput placeholder="street..."></InputsTextInput>
      </div>
      <div class="py-4">
        <InputsTextInput placeholder="location/place..."></InputsTextInput>
      </div>
      <p class="text-xl py-4">...or pick from the saved adresses!</p>
      <select
        class="bg-dash-third w-1/2 shadow-button-inner placeholder:text-dash-TextInactive rounded-md px-4 py-2 outline-none"
      >
        <option>aa</option>
        <option>bb</option>
        <option>cc</option>
        <option>dd</option>
      </select>
      <p class="text-xl py-4">When event happens?</p>
      <div class="flex gap-4 items-center">
        <InputsDateInput />
        <span>on</span>
        <InputsTimeInput />
      </div>
      <div class="flex justify-center py-6">
        <button class="bg-dash-accent px-4 py-2 rounded-md text-xl">
          press me
        </button>
      </div>
    </div>
  </div>
</template>
