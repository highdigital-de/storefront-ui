import { SfHero } from "@highdigital/vuet";

export default {
  title: "Components/Organisms/Hero",
  component: SfHero,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-hero-item--position-bg-top-right",
          "sf-hero-item--position-bg-bottom-right",
          "sf-hero-item--position-bg-bottom-left",
          "sf-hero-item--align-right",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    sliderOptions: {
      control: "object",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfHero },
  props: Object.keys(argTypes),
  data() {
    return {
      title:
        "ClearVAT macht unsere EU-Steuern – wir kümmern uns lieber um die Kunst.",
      image: "/assets/storybook/images/slider-img_fineartmultiple.jpg",
      subtitle: "Dr. Vanessa Moos, Managing Director",
      buttonText: "Learn more",
      background: "#ECEFF1",
    };
  },
  template: `
  <SfHero
    :style="{maxWidth: '1240px', margin: 'auto'}"
  >
    <SfHeroItem
        :class="classes"
        :title="title"
        :subtitle="subtitle"
        :button-text="buttonText"
        :image="image"
        :background="background"
    />
    <SfHeroItem
        :class="classes"
        title="ClearVAT macht unsere EU-Steuern – wir kümmern uns lieber um die Kunst."
        subtitle="Dr. Vanessa Moos, Managing Director"
        button-text="Learn more"
        image="/assets/storybook/images/slider-img_fineartmultiple.jpg"
        background="#FCE4EC"
    />
  </SfHero>`,
});

export const Common = Template.bind({});
Common.args = {};
