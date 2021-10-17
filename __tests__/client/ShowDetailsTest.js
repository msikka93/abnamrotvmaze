import React from 'react'
import { shallow } from 'enzyme'
import ShowDetails from '../../src/client/components/shows.show/ShowDetails'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'


describe("ShowDetails", () => {  
    describe("when show details is clicked", () => {
        it("returns ShowPersonalDetails", () => {
            const showDetails =[
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
            const wrapper = shallow(<ShowDetails  showDetails={showDetails}/>)
            expect(wrapper.find(Divider)).toHaveLength(1)
            expect(wrapper.find(Button)).toHaveLength(1)
            expect(wrapper.find('ShowPersonalDetails')).toHaveLength(1)
        });
      })
  })