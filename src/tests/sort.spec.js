import { shallowMount } from '@vue/test-utils';
import SortButtons from '@/components/sort.vue'; // Adjust the path to your component

describe('sort.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(SortButtons);
    });

    it('emits "sortByName" when the Sort by Name button is clicked', async () => {
        const button = wrapper.find('.btn-primary');
        await button.trigger('click');
        expect(wrapper.emitted().sortByName).toBeTruthy();
    });

    it('emits "sortByGold" when the Sort by Gold button is clicked', async () => {
        const button = wrapper.find('.btn-success');
        await button.trigger('click');
        expect(wrapper.emitted().sortByGold).toBeTruthy();
    });

    it('emits "sortByTotal" when the Sort by Total Medals button is clicked', async () => {
        const button = wrapper.find('.btn-warning');
        await button.trigger('click');
        expect(wrapper.emitted().sortByTotal).toBeTruthy();
    });
});
