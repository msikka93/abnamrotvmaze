import React, { useState as useStateMock } from 'react'
import { shallow, mount } from 'enzyme'
import ShowsGrid from '../../src/client/components/shows/ShowsGrid'
import CircularProgress from '@material-ui/core/CircularProgress'
import ReactDataGrid from 'react-data-grid'
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }))

describe("ShowsGrid", () => {  
    let useEffect;
    let wrapper;
    const setState = jest.fn();
    useStateMock.mockImplementation(init => [init, setState])
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
        setRows:jest.fn(),
        shows:['drama','comic']
    }
    wrapper = shallow(<ShowsGrid {...props}/>);
    })
    it('renders', () => {
        const wrapper = mount(
          <ShowsGrid shows={[]}/>
        )
        expect(wrapper.find(CircularProgress)).toHaveLength(1)
      })
  describe("on start", () => {
    it("loads the shows", () => {
      expect(wrapper.find(ReactDataGrid).props().minHeight).toEqual(480);
      expect(wrapper.find(ReactDataGrid).props().rowHeight).toEqual(40);
      expect(wrapper.find(ReactDataGrid).props().rowsCount).toEqual(2);
    });
  });
    describe("when isLoading is true", () => {
        it("returns null", () => {
            const shows =[
                {
                    "id": 38339,
                    "url": "https://www.tvmaze.com/shows/38339/a-teacher",
                    "name": "A Teacher",
                    "type": "Scripted",
                    "language": "English",
                    "genres": [
                        "Drama"
                    ],
                    
                    "rating": {
                        "average": 5.9
                    },
                    "weight": 98,
                    "network": null,
                    
                    "image": {
                        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/272/681431.jpg",
                        "original": "https://static.tvmaze.com/uploads/images/original_untouched/272/681431.jpg"
                    },
                    "summary": "<p><b>A Teacher</b> examines the complexities and consequences of an illegal relationship between a female teacher, Claire and her male high school student, Eric. Dissatisfied in their own lives, Claire and Eric discover an undeniable escape in each other, but their relationship accelerates faster than anticipated and the permanent damage becomes impossible to ignore.</p>",
                    
                }
            ]
            const wrapper = shallow(<ShowsGrid shows={shows}/>)
            wrapper.find(ReactDataGrid).props().onGridSort()
            expect(setState).toHaveBeenCalledTimes(1)
            expect(wrapper).toBeTruthy()
        });
      })
  })