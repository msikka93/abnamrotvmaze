import React from 'react'
import { shallow } from 'enzyme'
import DryField from '../../src/client/components/shared/DryField'
import Typography from '@material-ui/core/Typography'

describe("DryField", () => {  
    it("returns DryField", () => {
        const wrapper = shallow(<DryField  value={123}/>)
        expect(wrapper.find(Typography)).toHaveLength(1)
    });
    it("returns null", () => {
        const wrapper = shallow(<DryField  value={null}/>)
        expect(wrapper.getElement()).toBeTruthy();
    });
})