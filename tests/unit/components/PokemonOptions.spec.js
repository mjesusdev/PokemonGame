import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions.vue'

import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })
    })

    test('should do match with Snapshot', () => {
        expect(wrapper.html() ).toMatchSnapshot()
    })

    test('should show the 4 options correctly', () => {
        const liTags = wrapper.findAll('li')
        expect( liTags.length ).toBe(4)

        expect( liTags[0].text() ).toBe('pikachu');
        expect( liTags[1].text() ).toBe('charmander');
        expect( liTags[2].text() ).toBe('venusaur');
        expect( liTags[3].text() ).toBe('mew');
    })

    test('should emit the correct pokemon when clicked', () => {
        const [ li1, li2, li3, li4 ] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect( wrapper.emitted('selection-pokemon').length ).toBe(4);
        expect( wrapper.emitted('selection-pokemon')[0] ).toStrictEqual([5]);
        expect( wrapper.emitted('selection-pokemon')[1] ).toStrictEqual([10]);
        expect( wrapper.emitted('selection-pokemon')[2] ).toStrictEqual([15]);
        expect( wrapper.emitted('selection-pokemon')[3] ).toStrictEqual([20]);
    })

})