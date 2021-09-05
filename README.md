# Image gallery exercise


## Runing the project

In the root folder of the project run `yarn` to install all the dependencies

Run `yarn start` to start the project locally and browse to `http://localhost:3000/` to view the app


## Assumption I made

**API**

* I assume the API is available and respond with a valid response (array of objects)
* There are at least 5 items in the response of the API

**MobX**

I have choosen to use MobX not because it was necessary for the project as it is quite small, but real life project tend to have more features that may require MobX usage.

**create-react-app Limitations**

I wanted to use decorations such as `@observable` however those are not supported by default in create-react-app so I used to "old" way `observable(...)` method. The reason it isn't supported is that decorators are still experimental. [docs for reference](https://create-react-app.dev/docs/can-i-use-decorators/)


## Tests

Unfortunately I haven't had the chance to work with tests before, I haven't had the time to impelement it in this project.


## Improvments

* Text over bright images isn't clear, we should add some transparent black overlay
* Images layout should have better responsiveness
* Split css to individual files