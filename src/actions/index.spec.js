import * as actions from './index'

describe('todo actions', () => {
  it('selectAircraft should create SELECT_AIRCRAFT action', () => {
    expect(actions.selectAircraft(1)).toEqual({
      type: 'SELECT_AIRCRAFT',
      id: 1
    })
  })
})
