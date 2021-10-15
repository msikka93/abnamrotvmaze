// https://flow.org/en/docs/types/modules/

import { string } from "prop-types"

  
  export type ShowType = {
    +id: string,
    +name: string,
    +type: string,
    +language: string,
    +genres: Array,
    +image: string,
    +url: string,
    +summary: string,
    +rating: float
  }
  
  export type ShowListType = Array<ShowType>
  
  export type ShowsStateType = {
    +shows: ShowListType,
    +showsLastEditedAt: number | null,
    +isLoading: boolean,
    +hasError: boolean
  }
  
  export type ShowsState = {
    +shows: ShowsStateType
  }
  
  