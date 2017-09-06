![](https://github.com/elinda123/Hindakogemust/blob/master/screenshots/image1.png)


# Install, build and start application
Before you can build this project, you must install and configure the following dependencies on your machine:

[Node.js][]: Use Node to run a development web server and build the project.
Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    npm install

[Bower][] is used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [bower.json](bower.json).

    bower install
    gulp build

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    
## Generate random feedback (optional)
Install Python 3 libraries:
```shell
pip install names
pip install lorem
```
Python 3 code:
```python
import names, lorem
from random import randint

for i in range(500):
    #INSERT INTO feedback (name, jhi_comment, rating, place_id) VALUES ('Elinda Tragel', 'Lorem Ipsum 1', 9, 1);
    print("INSERT INTO feedback (name, jhi_comment, rating, place_id) VALUES ('" +
          names.get_full_name() + "', '" +
          lorem.sentence() + "', " +
          str(randint(1, 10)) + ", " +
          str(randint(1, 23)) + ");")
```
## Building for development

To optimize the `Hindakogemust` application for production, run:

    mvn package

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost](http://localhost) in your browser.

## Building for production

To optimize the `Hindakogemust` application for production, run:

    ./mvnw -Pprod clean package

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./mvnw clean test

## Client tests

Unit tests are run by [Karma][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    gulp test

UI end-to-end tests are powered by [Protractor][], which is built on top of WebDriverJS. They're located in [src/test/javascript/e2e](src/test/javascript/e2e)
and can be run by starting Spring Boot in one terminal (`./mvnw spring-boot:run`) and running the tests (`gulp itest`) in a second one.

# Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.
For example, to start a mysql database in a docker container, run:

    docker-compose -f src/main/docker/mysql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/mysql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw package -Pprod docker:build

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.


[JHipster Homepage and latest documentation]: https://jhipster.github.io
[JHipster 4.5.3 archive]: https://jhipster.github.io/documentation-archive/v4.5.3

[Using JHipster in development]: https://jhipster.github.io/documentation-archive/v4.5.3/development/
[Using Docker and Docker-Compose]: https://jhipster.github.io/documentation-archive/v4.5.3/docker-compose
[Using JHipster in production]: https://jhipster.github.io/documentation-archive/v4.5.3/production/
[Setting up Continuous Integration]: https://jhipster.github.io/documentation-archive/v4.5.3/setting-up-ci/


[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Bower]: http://bower.io/
[Gulp]: http://gulpjs.com/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
[Leaflet]: http://leafletjs.com/
[DefinitelyTyped]: http://definitelytyped.org/
