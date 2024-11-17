<script setup lang="ts">
interface GeneralProps {
  disable?: boolean;
  text: string;
  icon: string;
  css?: Partial<{
    img?: string;
    text?: string;
    shell?: string;
    iconPos?: "flex-col" | "flex-row";
  }>;
}
type UnionProps =
  | { type: "button"; action: { click: () => void } }
  | { type: "route"; action: { link: string } };

type Props = GeneralProps & UnionProps;
const { disable = false, css, icon, text, action, type } = defineProps<Props>();
const generalStyle =
  "bg-dash-accent text-dash-TextActive flex items-center justify-center font-medium";
const disableStyle = "brightness-50 pointer-events-none";
</script>

<template>
  <RouterLink
    v-if="type === 'route'"
    :to="action.link"
    :class="` ${generalStyle} ${disable && disableStyle} ${css?.iconPos ?? 'flex-col'} ${css?.shell}`"
  >
    <img
      :src="icon"
      alt="buttonAddIcon"
      :class="`${disable && 'brightness-75'} ${css?.img}`"
    />
    <p :class="`${disable && 'brightness-90'} ${css?.text}`">{{ text }}</p>
  </RouterLink>
  <button
    v-else
    @click.prevent="action.click"
    :class="`${generalStyle} ${disable && disableStyle} ${css?.iconPos ?? 'flex-col'} ${css?.shell}`"
  >
    <img
      :src="icon"
      alt="buttonAddIcon"
      :class="`${disable && 'brightness-75'} ${css?.img}`"
    />
    <p :class="`${disable && 'brightness-90'} ${css?.text}`">{{ text }}</p>
  </button>
</template>
