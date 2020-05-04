import api from '../../lib/request';
import apiPaths from '../../lib/api';
import buildUrl from '../../lib/utils';


const category = {
  
    getCategoryList: function (filters, callback) {
        let listUrl = buildUrl(apiPaths.getCategoryList, filters)

        return dispatch => {
            api.setMethod('GET').sendRequest(listUrl, null, true, function (response) {
                dispatch({
                    type: 'getCategoryList',
                    data: response.data.categories
                });
                callback(response.data);
            }, dispatch)
        }
    }
}

export default category;

