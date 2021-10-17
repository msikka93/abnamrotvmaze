import React from 'react'
import { shallow } from 'enzyme'
import ShowPersonalDetails from '../../src/client/components/shows.show/ShowPersonalDetails'
import { Divider } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'


describe("ShowPersonalDetails", () => {  
    describe("shows the specific show details", () => {
        it("returns ShowPersonalDetails when all fields are there", () => {
            const columns = [
                {
                  id: 'image',
                  name: '',
                  className: 'col-sm-6'
                },
                {
                  id: 'name',
                  name: 'Name',
                  className: 'col-sm-6'
                },
                {
                  id: 'type',
                  name: 'Type',
                  className: 'col-sm-6'
                },
                {
                  id: 'genres',
                  name: 'Genres',
                  className: 'col-sm-6'
                },
                {
                  id: 'language',
                  name: 'Language',
                  className: 'col-sm-6'
                },
                {
                  id: 'network',
                  name: 'Country',
                  className: 'col-sm-6'
                },
                {
                  id: 'summary',
                  name: 'Summary',
                  className: 'col-sm-12'
                },
                
              ]
            const showDetails =
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
                    "network": {
                        "id": 35,
                        "name": "ITV",
                        "country": {
                            "name": "United Kingdom",
                            "code": "GB",
                            "timezone": "Europe/London"
                        }
                    },
                    "image": {
                        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/272/681431.jpg",
                        "original": "https://static.tvmaze.com/uploads/images/original_untouched/272/681431.jpg"
                    },
                    "summary": "<p><b>A Teacher</b> examines the complexities and consequences of an illegal relationship between a female teacher, Claire and her male high school student, Eric. Dissatisfied in their own lives, Claire and Eric discover an undeniable escape in each other, but their relationship accelerates faster than anticipated and the permanent damage becomes impossible to ignore.</p>",
                    
                }
            
            const wrapper = shallow(<ShowPersonalDetails  showDetails={showDetails} columns={columns}/>)
            expect(wrapper.find(Typography)).toHaveLength(6)
        });
        it("returns ShowPersonalDetails when summary is null", () => {
            const columns = [
                {
                  id: 'image',
                  name: '',
                  className: 'col-sm-6'
                },
                {
                  id: 'name',
                  name: 'Name',
                  className: 'col-sm-6'
                },
                {
                  id: 'type',
                  name: 'Type',
                  className: 'col-sm-6'
                },
                {
                  id: 'genres',
                  name: 'Genres',
                  className: 'col-sm-6'
                },
                {
                  id: 'language',
                  name: 'Language',
                  className: 'col-sm-6'
                },
                {
                  id: 'network',
                  name: 'Country',
                  className: 'col-sm-6'
                },
                {
                  id: 'summary',
                  name: 'Summary',
                  className: 'col-sm-12'
                },
                
              ]
            const showDetails =
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
                    "network": {
                        "id": 35,
                        "name": "ITV",
                        "country": {
                            "name": "United Kingdom",
                            "code": "GB",
                            "timezone": "Europe/London"
                        }
                    },
                    "image": {
                        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/272/681431.jpg",
                        "original": "https://static.tvmaze.com/uploads/images/original_untouched/272/681431.jpg"
                    },
                    "summary": null
                    
                }
            
            const wrapper = shallow(<ShowPersonalDetails  showDetails={showDetails} columns={columns}/>)
            expect(wrapper.find(Typography)).toHaveLength(6)
            // expect(wrapper.find(Typography).get(0).props.value).toEqual("Show Description will be available soon");
            expect(wrapper.find(Typography).first().text()).toEqual('A Teacher')
        });
        it("returns ShowPersonalDetails when country is null", () => {
            const columns = [
                {
                  id: 'image',
                  name: '',
                  className: 'col-sm-6'
                },
                {
                  id: 'name',
                  name: 'Name',
                  className: 'col-sm-6'
                },
                {
                  id: 'type',
                  name: 'Type',
                  className: 'col-sm-6'
                },
                {
                  id: 'genres',
                  name: 'Genres',
                  className: 'col-sm-6'
                },
                {
                  id: 'language',
                  name: 'Language',
                  className: 'col-sm-6'
                },
                {
                  id: 'network',
                  name: 'Country',
                  className: 'col-sm-6'
                },
                {
                  id: 'summary',
                  name: 'Summary',
                  className: 'col-sm-12'
                },
                
              ]
            const showDetails =
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
                    "network": {
                        "id": 35,
                        "name": "ITV",
                        "country": {
                            "name": null,
                            "code": "GB",
                            "timezone": "Europe/London"
                        }
                    },
                    "image": {
                        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/272/681431.jpg",
                        "original": "https://static.tvmaze.com/uploads/images/original_untouched/272/681431.jpg"
                    },
                    "summary": null
                    
                }
            
            const wrapper = shallow(<ShowPersonalDetails  showDetails={showDetails} columns={columns}/>)
            expect(wrapper.find(Typography)).toHaveLength(6)
            // expect(wrapper.find(Typography).get(0).props.value).toEqual("Show Description will be available soon");
            expect(wrapper.find(Typography).first().text()).toEqual('A Teacher')
        });
        it("returns ShowPersonalDetails", () => {
            const columns = [
                {
                  id: 'name',
                  name: 'Name',
                  className: 'col-sm-6'
                },
                {
                  id: 'type',
                  name: 'Type',
                  className: 'col-sm-6'
                },
                {
                  id: 'genres',
                  name: 'Genres',
                  className: 'col-sm-6'
                },
                {
                  id: 'language',
                  name: 'Language',
                  className: 'col-sm-6'
                }
              ]
            const showDetails =
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
                    "network": {
                        "id": 35,
                        "name": "ITV",
                        "country": {
                            "name": "United Kingdom",
                            "code": "GB",
                            "timezone": "Europe/London"
                        }
                    },
                    "image": {
                        "medium": null,
                        "original": "https://static.tvmaze.com/uploads/images/original_untouched/272/681431.jpg"
                    },
                    "summary": "<p><b>A Teacher</b> examines the complexities and consequences of an illegal relationship between a female teacher, Claire and her male high school student, Eric. Dissatisfied in their own lives, Claire and Eric discover an undeniable escape in each other, but their relationship accelerates faster than anticipated and the permanent damage becomes impossible to ignore.</p>",
                    
                }
            
            const wrapper = shallow(<ShowPersonalDetails  showDetails={showDetails} columns={columns}/>)
            expect(wrapper.find(Typography)).toHaveLength(6)
            expect(wrapper.find(Typography).at(0).text()).toEqual('A Teacher')
        });
      })
  })