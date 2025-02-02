import { SfSection } from "@highdigital/vuet";
export default {
  title: "Components/Molecules/Section",
  component: SfSection,
  argTypes: {
    titleHeading: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description: "Heading title",
    },
    subtitleHeading: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description: "Heading subtitle",
    },
    levelHeading: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: 2,
        },
      },
      description: "Heading tag level",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSection },
  props: Object.keys(argTypes),
  template: `
  <SfSection
    :title-heading="titleHeading"
    :subtitle-heading="subtitleHeading"
    :level-heading="levelHeading">
      <div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
        [#default slot content]
      </div>
  </SfSection>`,
});

export const Common = Template.bind({});
Common.args = {
  titleHeading: "Share your look",
  subtitleHeading: "#YOURLOOK",
};

export const UseHeadingSlot = (args, { argTypes }) => ({
  components: { SfSection },
  props: Object.keys(argTypes),
  template: `
  <SfSection
    :title-heading="titleHeading"
    :subtitle-heading="subtitleHeading"
    :level-heading="levelHeading">
    <template #heading="{levelHeading, titleHeading, subtitleHeading}">
      CUSTOM HEADING
    </template>
    <div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
      [#default slot content]
    </div>
  </SfSection>`,
});
UseHeadingSlot.args = { ...Common.args };
