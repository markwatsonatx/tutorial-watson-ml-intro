### Intro. to Machine Learning & Watson ML

Follow these simple instructions and you'll be up and running:

Set the following environment variables:

```
WML_SERVICE_PATH=https://ibm-watson-ml.mybluemix.net
WML_USERNAME=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
WML_PASSWORD=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
WML_INSTANCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

Then run:

```
git clone https://github.com/markwatsonatx/tutorial-watson-ml-intro
cd tutorial-watson-ml-intro
docker-compose up -d
```

After running `docker-compose up -d` you can access the sample notebook at [http://DOCKER-HOST-IP:38889/notebooks/HousePrices.ipynb](http://localhost:38889/notebooks/HousePrices.ipynb).

You can access the sample Node.js application at [http://DOCKER-HOST-IP:33000](http://DOCKER-HOST-IP:33000).
