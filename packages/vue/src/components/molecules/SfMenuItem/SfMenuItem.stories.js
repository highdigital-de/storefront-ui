import { SfMenuItem, SfIcon } from "@highdigital/vuet";
import { icons } from "@highdigital/sharedt/icons/icons";
const iconsNames = Object.keys(icons);

export default {
  title: "Components/Molecules/MenuItem",
  component: SfMenuItem,
  decorators: [
    () => ({ template: '<div style="max-width: 300px"><story/></div>' }),
  ],
  argTypes: {
    label: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    count: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    icon: {
      control: {
        type: "select",
        options: iconsNames,
      },
      table: {
        category: "Props",
      },
      defaultValue: "chevron_right",
    },
    link: {
      control: "text",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfMenuItem },
  props: Object.keys(argTypes),
  template: `
  <SfMenuItem
  :label="label"
  :count="count"
  :icon="icon" />`,
});

export const Common = Template.bind({});
Common.args = {
  label: "Red",
  count: 30,
};

export const AsLink = Template.bind({});
AsLink.args = {
  ...Common.args,
  link: "https://www.storefrontui.io/",
};

export const UseIconSlot = (args, { argTypes }) => ({
  components: { SfMenuItem },
  props: Object.keys(argTypes),
  template: `
  <SfMenuItem
    :label="label"
    :count="count"
    :icon="icon">
    <template #icon>
      ❤️
    </template>
  </SfMenuItem>`,
});
UseIconSlot.args = { ...Common.args };

export const UseMobileNavIconSlot = (args, { argTypes }) => ({
  components: { SfMenuItem, SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfMenuItem
    :label="label"
    :count="count"
    :icon="icon">
    <template #mobile-nav-icon="{icon}">
      <SfIcon icon="arrow_right" size="xxs" style="margin-left: 0.625rem"/>
    </template>
  </SfMenuItem>`,
});
UseMobileNavIconSlot.args = { ...Common.args };

export const UseLabelSlot = (args, { argTypes }) => ({
  components: { SfMenuItem },
  props: Object.keys(argTypes),
  template: `
  <SfMenuItem
    :label="label"
    :count="count"
    :icon="icon">
    <template #label="{label}">
      CUSTOM LABEL
    </template>
  </SfMenuItem>`,
});
UseLabelSlot.args = { ...Common.args };

export const UseCountSlot = (args, { argTypes }) => ({
  components: { SfMenuItem },
  props: Object.keys(argTypes),
  template: `
  <SfMenuItem
    :label="label"
    :count="count"
    :icon="icon">
    <template #count="{count}">
      CUSTOM COUNT
    </template>
  </SfMenuItem>`,
});
UseCountSlot.args = { ...Common.args };
