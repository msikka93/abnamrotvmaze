
import showsReducer from '../../src/client/store/show/showsReducer'
import * as types from '../../src/client/store/show/showActionTypes'



describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: types.SHOWS_FETCHED };
      const initialState = { 
          shows:undefined,
          hasError: false,
          isLoading: false,
          showsLastEditedAt: new Date().getTime()
        };
  
      expect(showsReducer(undefined, action)).toEqual(initialState);
    });

    test('is correct', () => {
        const action = { type: types.SEARCHED_SHOWS_RECEIVED };
        const initialState = { 
            shows:undefined,
            hasError: false,
            isLoading: false,
            showsLastEditedAt: new Date().getTime(),
          };
    
        expect(showsReducer(undefined, action)).toEqual(initialState);
      });

      test('is correct', () => {
        const action = { type: types.SHOWS_LOADING };
        const initialState = { 
            shows:[],
            hasError: false,
            isLoading: true,
            showsLastEditedAt: null,
          };
    
        expect(showsReducer(undefined, action)).toEqual(initialState);
      });
      test('is correct', () => {
        const action = { type: types.SHOWS_ERROR };
        const initialState = { 
            shows:[],
            hasError: true,
            isLoading: false,
            showsLastEditedAt: null,
          };
    
        expect(showsReducer(undefined, action)).toEqual(initialState);
      });
      test('is correct', () => {
        const action = { type: types.SHOW_RECEIVED };
        const initialState = { 
            shows:[],
            hasError: false,
            isLoading: false,
            showsLastEditedAt: new Date().getTime(),
          };
    
        expect(showsReducer(undefined, action)).toEqual(initialState);
      });
  });