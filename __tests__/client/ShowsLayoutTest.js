import React from 'react'
import { shallow } from 'enzyme'
import ShowsLayout from '../../src/client/components/shows/ShowsLayout'
import Typography from '@material-ui/core/Typography'

describe("ShowLayout", () => {
  let useEffect;
  let wrapper;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  }
  let props;
  beforeEach(() => {
    /* mocking useEffect */
    useEffect = jest.spyOn(React, "useEffect")
    mockUseEffect(); // 2 times
    mockUseEffect(); //
    /* shallow rendering */
    props = {
      fetchShows:jest.fn()
    }
    const myMock = jest.fn();
    wrapper = shallow(<ShowsLayout {...props}/>);
  });
  describe("on start", () => {
    it("loads the shows", () => {
      expect(props.fetchShows).toHaveBeenCalled();
    });
  });
  describe("ShowsLayout", () => {
    it("should render my component", () => {
      const wrapper = shallow(<ShowsLayout  {...props}/>)
      expect(wrapper.find(Typography).length).toEqual(1)
    })
  })
})