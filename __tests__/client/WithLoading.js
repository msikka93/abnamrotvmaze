import React from 'react'
import { shallow } from 'enzyme'
import WithLoading from '../../src/client/components/shows/WithLoading'


describe("WithLoading", () => {  
    describe("when isLoading is true", () => {
        it("returns null", () => {
            const isLoading=true
            const wrapper = shallow(<WithLoading  isLoading={isLoading}/>)
            expect(wrapper.getElement()).toBe(null);
        });
      })
  })