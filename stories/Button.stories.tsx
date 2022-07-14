import Button from "../src/components/Button"
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {handleClick: {action: 'test'}}
} 

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const PrimaryDisabled = Template.bind({});
export const SecondaryDisabled = Template.bind({});

Primary.args = {
  backgroundColor: 'Laranja',
  label: 'Enviar',
  disable: false
};

Secondary.args = {
  backgroundColor: 'Azul',
  label: 'Enviar',
  disable: false
};
PrimaryDisabled.args = {
  backgroundColor: 'Laranja',
  label: 'Enviar',
  disable: true
};

SecondaryDisabled.args = {
  backgroundColor: 'Azul',
  label: 'Enviar',
  disable: true
};