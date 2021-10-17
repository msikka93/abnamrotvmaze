import React from 'react'
import { shallow } from 'enzyme'
import ViewFormatter from '../../src/client/components/shows/ViewFormatter'
import { IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import Delete from '@material-ui/icons/Delete'

describe("ViewFormatter", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
        type:'view',
        handleClick:jest.fn()
    }
    wrapper = shallow(<ViewFormatter {...props}/>);
  });
  describe("when type is view", () => {
    it("loads the view icon", () => {
        const wrapper = shallow(<ViewFormatter  {...props}/>)
        expect(wrapper.find(Visibility).length).toEqual(1)
    });
  });
  describe("ViewFormatter", () => {
    it("should render my component", () => {
      const  handleClick = jest.fn()
      const wrapper = shallow(<ViewFormatter handleClick={handleClick}/>)
      const button = wrapper.find(IconButton);
      button.simulate('click');
      expect(wrapper.find(IconButton).length).toEqual(1)
      expect(handleClick).toHaveBeenCalled();
    })
  })
})

describe("ViewFormatter", () => {
    let wrapper;
    
    describe("when type is delete", () => {
      it("loads the delete icon", () => {
          const type='delete'
          const wrapper = shallow(<ViewFormatter  type={type}/>)
          expect(wrapper.find(Delete).length).toEqual(1)
      });
    })  
  })