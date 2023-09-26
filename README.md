# React + Vite Project 

### Redux Initialization :
2. Create a rootReucer
3. Install `redux` and `react-redux`
4. Create a store
5. Get the store in the main.jsx or index.jsx and wrap the app using the `<Provider>` component from react-redux.
6. Make a dispatch function using `useDispatch()` hook from react-redux.
7. Create action and its types.

### Thunk :

- Redux Thunk is a middleware that allows you to return functions, rather than just actions, within redux.
- The purpose of middleware is to intercept an action before it reaches the reducer. 
- So instead of sending the action to the reducer directly, we will send it to this thunk middleware first. 
- So this would be a middleware henceforth it is a function that would return just another function.
- Thunk wont change the state, but will only have action to the 'Action' to make the necessary changes.

1. Now in this project, the API logic was written in the UI component which is not recommended and instead it should be written in the 'Actions'
2. Thunk comes into play many times when we encounter such errors : 
```error
Uncaught Error: Actions must be plain objects. Instead, the actual type was: 'Promise'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.
```


## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
