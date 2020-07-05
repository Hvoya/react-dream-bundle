import MyButton from './index.vue';

export default { title: 'Button' };

export const asAComponent = () => ({
  components: { MyButton },
  template: '<my-button />',
});
