import * as Api from '../apis/eficaz_product_classifier_api.js';

const END_POINT = 'product';

export default {

    /**
     * Gets all the products. 
     *
     * @return {AxiosResponse}
     */
    all() {
        return Api.default.get(END_POINT)
            .then(payload => payload.data);
    },

    /**
     * Create a product.
     *
     * @param {Object} storeProductPayload 
     * @return {Promise<AxiosResponse>} 
     */
    create(storeProductPayload) {
        return Api.default.post(END_POINT, storeProductPayload)
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
     * @param {Object} updateProductPayload 
     * @return {Promise<AxiosResponse>}
     */
    update(uuid, updateProductPayload){
        return Api.default.put(`${END_POINT}/${uuid}`, updateProductPayload)
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
