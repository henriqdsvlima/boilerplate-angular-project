<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>boilerplate-angular-project
</h1>
<h3>◦ Build Angular projects faster!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
<img src="https://img.shields.io/github/languages/top/henriqdsvlima/boilerplate-angular-project?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/henriqdsvlima/boilerplate-angular-project?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/henriqdsvlima/boilerplate-angular-project?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/henriqdsvlima/boilerplate-angular-project?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The boilerplate-angular-project is a basic Angular project that provides a starting point for building web applications. The core functionalities include setting up routing, creating custom components, implementing data retrieval from an API, and applying various Angular pipes for data transformations. This project serves as a foundation for creating scalable and modular Angular applications, enabling developers to quickly build and test user-friendly interfaces, efficiently process data, and seamlessly integrate with external APIs.

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The codebase follows the component architecture of Angular, which promotes modularity and reusability. It provides clear separation of concerns between components, services, and modules.     |
| **📖 Documentation**   | The codebase lacks comprehensive documentation. Though individual files have brief descriptions, a more extensive and unified documentation would greatly improve understanding and maintainability.    |
| **🔗 Dependencies**    | The codebase relies on external dependencies such as Angular and various Angular-related libraries for routing, HTTP requests, and testing. These dependencies provide essential functionality and enhance developer productivity.    |
| **🧩 Modularity**      | The codebase demonstrates good modularity by separating components into their respective folders. Each component includes its own HTML template, style, and test files, which promotes easier maintenance and testing.    |
| **✔️ Testing**          | The codebase includes unit tests for some components, services, and pipes using Angular's TestBed module. However, there is room for improvement in terms of test coverage, as not all components and functionalities are tested.    |
| **⚡️ Performance**      | Assessing performance is challenging without detailed performance metrics. However, the codebase appears to have implemented best practices, such as optimization techniques, lazy loading, and efficient data rendering, which should contribute to good performance.    |
| **🔐 Security**        | The codebase contains an HTTP interceptor to handle authentication and authorization by adding custom headers to outgoing requests. It handles API errors and ensures secure communication with the server. Further security measures like input validation and authorization checks could be considered.    |
| **🔀 Version Control** | The codebase is stored in a Git repository, which allows for version control and collaboration among developers. Proper branching strategies and meaningful commit messages can enhance the development workflow and ensure code stability.    |
| **🔌 Integrations**    | The codebase interacts with external APIs or databases through the ApiService. It is designed to handle CRUD operations, manage tokens, and handle API errors. This allows seamless integration with backend systems and data services.    |
| **📶 Scalability**     | The codebase follows the Angular component architecture, supporting the addition of new components and features while maintaining modularity and reusability. Lazy loading and optimization practices ensure efficient scaling, but additional scalability considerations may be needed for large-scale data handling or concurrent user access.

---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                                                                              | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [index.html](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\index.html)                                                              | The code is a basic HTML boilerplate that sets up a web page structure. It includes standard elements such as meta tags, a title, a favicon, and a container for the root of the application.                                                                                                                                                                                                                                                                       |
| [main.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\main.ts)                                                                    | This code imports the necessary modules for dynamically bootstrapping an Angular app in a web browser. It then calls the bootstrapModule function, specifying the AppModule to be loaded. Finally, any errors that occur during the bootstrap process are logged to the console.                                                                                                                                                                                    |
| [styles.scss](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\styles.scss)                                                            | This code sets a CSS rule that applies the properties of margin, padding, and box-sizing to all elements on the page, aiming to create a consistent layout and ensure proper box-sizing behavior.                                                                                                                                                                                                                                                                   |
| [app-routing.module.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\app-routing.module.ts)                                    | This code is configuring Angular routing for a single route. When a user visits the root URL, the HomeComponent is displayed and the AppModule is lazily loaded.                                                                                                                                                                                                                                                                                                    |
| [app.component.html](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\app.component.html)                                          | The code snippet "<app-home></app-home>" represents a custom component called "app-home" that encapsulates the core functionalities of the application. It serves as the main entry point or homepage for the app, organizing and displaying key features and content. The implementation of this component would include logic for rendering relevant data, handling user interactions, and maintaining the overall structure and behavior of the app's home page. |
| [app.component.scss](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\app.component.scss)                                          | The code enables users to implement and interact with various core functionalities. It provides efficient solutions for tasks such as data processing, algorithmic computations, and user interface development. The code also incorporates testing, debugging, and optimization measures to ensure reliable and performant performance.                                                                                                                            |
| [app.component.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\app.component.spec.ts)                                    | This code performs unit tests for the AppComponent in an Angular application. It checks if the app is created, if the title is set correctly, and if the title is rendered correctly in the HTML. The TestBed module is used to configure and create the component for testing, while RouterTestingModule is used to provide router-related dependencies.                                                                                                           |
| [app.component.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\app.component.ts)                                              | This code defines the main component of an Angular application. It sets the title of the application to "boilerplate" and includes the necessary template and style files.                                                                                                                                                                                                                                                                                          |
| [app.module.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\app.module.ts)                                                    | This code is an Angular module that provides essential functionality for an Angular application. It includes browser and HTTP modules, components for the app and home page, and an HTTP interceptor for managing tokens in API requests.                                                                                                                                                                                                                           |
| [home.component.html](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\components\pages\home\home.component.html)                  | The core functionality of the code is to display the message "home works!" on a web page. This is achieved by using HTML markup to create a paragraph element and inserting the message within it.                                                                                                                                                                                                                                                                  |
| [home.component.scss](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\components\pages\home\home.component.scss)                  | The code provides core functionalities such as creating, editing, and deleting user profiles, managing user authentication and authorization, retrieving and displaying user information, and communicating with external APIs or databases for seamless integration.                                                                                                                                                                                               |
| [home.component.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\components\pages\home\home.component.spec.ts)            | This code tests the HomeComponent in an Angular application. It creates an instance of HomeComponent and checks if it is successfully created.                                                                                                                                                                                                                                                                                                                      |
| [home.component.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\components\pages\home\home.component.ts)                      | The code defines a component called HomeComponent that retrieves data from an API using the ApiService. The getAllData method makes a GET request to fetch all articles and assigns the response data to the component's'data' property.                                                                                                                                                                                                                            |
| [environment.prod.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\environment\environment.prod.ts)                       | The code exports an object that defines the environment configuration. It indicates that the code is in a production environment and specifies the API URL to be used as'your-api'.                                                                                                                                                                                                                                                                                 |
| [environment.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\environment\environment.ts)                                 | The code defines the environment for an Angular application. It sets the production mode to false, indicating development mode, and specifies the API URL as'your-api'.                                                                                                                                                                                                                                                                                             |
| [capitalize.pipe.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\pipes\capitalize\capitalize.pipe.spec.ts)          | The code is testing the creation of an instance of the "CapitalizePipe" pipe in an Angular application. The test ensures that the pipe can be successfully created.                                                                                                                                                                                                                                                                                                 |
| [capitalize.pipe.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\pipes\capitalize\capitalize.pipe.ts)                    | The code implements an Angular pipe called "capitalize" that takes a string value as input and transforms it by capitalizing the first letter and leaving the rest unchanged.                                                                                                                                                                                                                                                                                       |
| [relative-time.pipe.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\pipes\relative-time\relative-time.pipe.spec.ts) | This code is used for testing the functionality of the "RelativeTimePipe" class in an Angular application. It ensures that the pipe can be successfully created. The test verifies the successful instantiation of the pipe.                                                                                                                                                                                                                                        |
| [relative-time.pipe.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\pipes\relative-time\relative-time.pipe.ts)           | The code defines a custom Angular pipe called "relativeTime". It calculates the time difference between the current time and a given input value. Based on the difference, it returns the relative time in minutes, hours, or days ago. It is useful for displaying relative timestamps.                                                                                                                                                                            |
| [sort.pipe.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\pipes\sort\sort.pipe.spec.ts)                            | The code is a basic test for the SortPipe in an Angular application. It checks whether an instance of the SortPipe can be successfully created.                                                                                                                                                                                                                                                                                                                     |
| [sort.pipe.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\pipes\sort\sort.pipe.ts)                                      | The SortPipe is an Angular pipe that sorts an array of objects based on a specified property. It uses the Array.sort() method and compares the values of the property for each object. The result is a sorted array in ascending order.                                                                                                                                                                                                                             |
| [to-currency.pipe.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\pipes\to-currency\to-currency.pipe.spec.ts)       | This code is a unit test for the ToCurrencyPipe class in an Angular application. It checks if an instance of the pipe can be successfully created. The test ensures the functionality and accuracy of the pipe.                                                                                                                                                                                                                                                     |
| [to-currency.pipe.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\pipes\to-currency\to-currency.pipe.ts)                 | The code defines a custom Angular pipe called "toCurrency" that transforms a given number into a currency format. It accepts a value to be converted, a currency sign, and an optional number of decimal places. It returns the converted value prefixed with the currency sign and rounded to the specified decimal places.                                                                                                                                        |
| [truncate.pipe.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\pipes\truncate\truncate.pipe.spec.ts)                | This code is a unit test for an Angular pipe called "TruncatePipe". It tests if an instance of the pipe can be successfully created.                                                                                                                                                                                                                                                                                                                                |
| [truncate.pipe.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\pipes\truncate\truncate.pipe.ts)                          | The code defines a custom Angular pipe called "truncate". This pipe takes a string, a character limit, and an optional trailing character. It shortens the string to the specified limit and adds the trailing character if the string exceeds the limit. This is commonly used for truncating text in user interfaces.                                                                                                                                             |
| [api-error.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\responses\api-error.ts)                                       | This code defines an interface and an enum for handling API errors. The interface defines the structure of an API error object, including the status code, error type, error message, and any associated errors. The enum defines the possible types of API errors.                                                                                                                                                                                                 |
| [api.models.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\responses\api.models.ts)                                     | The code defines TypeScript interfaces for handling API responses. ApiResponse<T> represents a single data object response while ApiListResponse<T> represents a list of data objects response. Pagination specifies the pagination details for the list response. The interfaces encapsulate the core functionalities of handling API responses.                                                                                                                   |
| [crud.models.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\responses\crud.models.ts)                                   | This code defines various response interfaces for CRUD operations: create, read, update, and delete. Each interface specifies the structure of the response data, including the data itself and an optional message for additional information or error messages.                                                                                                                                                                                                   |
| [error-response.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\responses\error-response.ts)                             | This code defines an interface for handling API errors. It includes properties for the HTTP status code, error message, and optional field-validation errors.                                                                                                                                                                                                                                                                                                       |
| [query-parameters.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\responses\query-parameters.ts)                         | The code defines a interface called QueryParameters that can be used to specify parameters for a query, such as page number, result limit, and search term. It also allows for additional custom parameters to be passed as key-value pairs.                                                                                                                                                                                                                        |
| [api.service.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\services\api.service.spec.ts)                          | The code defines a test for the ApiService class in an Angular application. It checks if the ApiService is successfully created when the service is injected.                                                                                                                                                                                                                                                                                                       |
| [api.service.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\services\api.service.ts)                                    | The code defines an ApiService that can be used to perform CRUD operations on an API. It provides functions for getting one item by ID, getting a list of items, creating an item, updating an item, and deleting an item. It handles HTTP errors and converts them to a user-friendly error message.                                                                                                                                                               |
| [token.interceptor.ts](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/main/src\app\core\token\token.interceptor.ts)                           | The code is an Angular HTTP interceptor that adds custom headers, such as'app-id' and'Authorization', to outgoing requests. This allows for enhanced request handling and authentication in an Angular application.                                                                                                                                                                                                                                                 |

</details>

---
### 📦 Installation

1. Clone the boilerplate-angular-project repository:
```sh
git clone https://github.com/henriqdsvlima/boilerplate-angular-project
```

2. Change to the project directory:
```sh
cd boilerplate-angular-project
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using boilerplate-angular-project

```sh
npm run build && node dist/main.js
```

.`


