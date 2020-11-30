# Eficaz Product Classifier - API.

A ReactJS application utilizing Bootstrap framework with CRUD implementation for the [Eficaz Product Classifier API](https://github.com/EficazProductClassifier/api).

# Installation 
Install the dependencies of the project with: 
```sh
npm install
```

Configure the API endpoint in the file `app/src/apis/eficaz_product_classifier_api.js`:
```js
import axios from 'axios';

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});
```

Now you can run the application with: 
```
npm start
```

## TODO list:
- [x] Entry of categories.
- [x] Entry of products.
- [x] Deletion of categories.
- [x] Deletion of products.
- [x] Update of categories.
- [x] Update of products.

