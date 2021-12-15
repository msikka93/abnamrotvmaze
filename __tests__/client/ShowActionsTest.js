import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import * as actions from '../../src/client/store/show/showActions'
import * as types from '../../src/client/store/show/showActionTypes'
import  * as fromShows from '../../src/client/store/show/showsReducer'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const createStore = configureMockStore(middlewares)
const store = createStore(fromShows.initialState)

describe('books actions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('Dispatches SHOWS_FETCHED after fetching shows', () => {
        // Response body sample
        const response =[ [
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
        ],
        {
            "snackProps":{
                "message":"All Shows are fetched successfully!",
                "type":"success"
            },
            "type":"snackbar.SHOW"
        }]

        fetchMock.getOnce('/shows/shows',
                { body: { results: response }})

        const expectedActions = [
         { type: types.SHOWS_FETCHED, payload: [response]}
        ]
        store.dispatch(actions.fetchShows())
             .then(() => {
                 expect(store.getActions()).toEqual(expectedActions)
             })
    })

    it('Dispatches SHOW_RECEIVED after fetching shows', () => {
        // Response body sample
        const response =[]
        const showId = '38339'
        fetchMock.getOnce(`/shows/shows/${showId}`,
                { body: { results: response }})

        const expectedActions = [
         { type: types.SHOW_RECEIVED, payload: [response]}
        ]
        store.dispatch(actions.fetchShowByShowId('38339'))
             .then(() => {
                 expect(store.getActions()).toEqual(expectedActions)
             })
    })

    it('Dispatches SEARCHED_SHOWS_RECEIVED after fetching shows', () => {
        // Response body sample
        const response =[]
        const expectedActions = [
         { type: types.SEARCHED_SHOWS_RECEIVED, payload: []}
        ]
        store.dispatch(actions.fetchSearchedShows('girl'))
             .then(() => {
                 expect(store.getActions()).toEqual(expectedActions)
             })
    })

    it('Dispatches SEARCHED_SHOWS_RECEIVED after fetching shows', () => {
        // Response body sample
        const response =[ [
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
        ],
        {
            "snackProps":{
                "message":"All Shows are fetched successfully!",
                "type":"success"
            },
            "type":"snackbar.SHOW"
        }]

        const expectedActions = [
         { type: types.SEARCHED_SHOWS_RECEIVED, payload: response}
        ]
        store.dispatch(actions.fetchSearchedShows('girl'))
             .then(() => {
                 expect(store.getActions()).toEqual(expectedActions)
             })
    })
})