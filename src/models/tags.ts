import { request } from 'umi'


const getTage = () => {
    return request('/api/tags')
}

export default {
    // 调用model的时候，通过命名空间调用，不要和其它model同名
    namespace: 'tags',
    // 状态，跟react中的state类似，和redux中报错的state 一样
    state: {
        tagsList: []
    },
    // 调用服务端接口，获取数据
    effects: {
        *fetchTages({ payload, callback }, { put, call }) {
            const response = yield call(getTage)

            // 调用reducers ,并传递数据 
            yield put({
                type: 'setTagsList', // 类似于redux中action的type
                payload: response
            })
        }
    },
    // 更新 state        
    reducers: {
        setTagsList(state, action) {
            return { ...state, tagsList: action.payload }
        }
    },

}