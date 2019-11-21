import { shallowMount } from '@vue/test-utils';
import HelloWorld from './HelloWorld';

describe('HelloWorld.vue', () => {
    it('should render msg', () => {
        const msg = 'Vue!';
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg }
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
