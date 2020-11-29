import * as Api from '../apis/eficaz_product_classifier_api.js';

const END_POINT = 'category';

export default {

    /**
     * Gets all the categories. 
     *
     * @return {AxiosResponse}
     */
    all() {
        return Api.default.get(END_POINT)
            .then(payload => payload.data);
    },

    /**
     * Create a category.
     *
     * @param {Object} storeCategoryPayload 
     * @return {Promise<AxiosResponse>} 
     */
    create(storeCategoryPayload) {
        return Api.default.post(END_POINT, storeCategoryPayload)
            .then(payload => payload.data)
    },

    /**
     * Gets a category.
     *
     * @param {string} uuid 
     * @return {Promise<AxiosResponse>} 
     */
    get(uuid) {
        return Api.default.get(`${END_POINT}/${uuid}`)
            .then(payload => payload.data)
    },

    /**
     * Updates a category given its uuid.
     *
     * @param {string} uuid
     * @param {Object} updateCategoryPayload 
     * @return {Promise<AxiosResponse>}
     */
    update(uuid, updateCategoryPayload){
        return Api.default.put(`${END_POINT}/${uuid}`, updateCategoryPayload)
            .then(payload => payload.data)
    },

    /**
     * Deletes a category given his uuid.
     *
     * @param {string} uuid 
     * @return {Promise<AxiosResponse} 
     */
    delete(uuid){
        return Api.default.delete(`${END_POINT}/${uuid}`)
            .then(payload => payload.data)
    },
}
