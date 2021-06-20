import { shallow } from 'enzyme'

import { RestaurantApp } from '../RestaurantApp'


describe('Tets in <RestaurantApp />', () => {

    const wrapper = shallow( <RestaurantApp/> )
    
    test('should be shown correctly', () => {
        
        expect( wrapper ).toMatchSnapshot()

    })
    
})
