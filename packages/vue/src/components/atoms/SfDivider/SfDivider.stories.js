import { SfDivider } from "@highdigital/vuet";

export default {
  title: "Components/Atoms/Divider",
  component: SfDivider,
};

const Template = (args, { argTypes }) => ({
  components: { SfDivider },
  template: `<div style="margin-top:10vh"> 
		<SfDivider/> 
	</div>`,
});

export const Common = Template.bind({});
Common.args = {};
