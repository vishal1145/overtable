After Cloning

npm i
bower install
gulp dev (deprecated gulp js on 18/11) 

import DB from /db into mongo

admin account: appadmin@yopmail.com pw: admin


Bitnami: R5cIZXzaVRqc


ssh -i ~/.ssh/overtable.pem ubuntu@52.36.100.46
ssh -i ~/.ssh/overtable-dev.pem ubuntu@ec2-34-212-134-59.us-west-2.compute.amazonaws.com
https://Augusto-Valerio@bitbucket.org/Augusto-Valerio/overtable-api.git


cd apps/techdev

sudo forever start app.js
sudo forever stopall

watch -n 60000 forever restartall


// forever/development.json
[
  {
    // App1
    "uid": "app1",
    "append": true,
    "watch": true,
    "script": "index.js",
    "sourceDir": "/home/bitnami/apps/overtableapi"
  },
  {
    // App2
    "uid": "app2",
    "append": true,
    "watch": true,
    "script": "index.js",
    "sourceDir": "/home/myuser/app2",
    "args": ["--port", "8081"]
  }
]
forever 3600 echo forever restartall

https://www.npmjs.com/package/repeat

db:
      user: "dbadmin",
      pwd: "secoelpinto",
      

db.createUser({
        user: "dbadminapp",
        pwd: "secoelpinto",
        roles:[
                {
                        "role" : "readWrite",
                        "db": "meanapp"
                }
        ]
})




Change base_url/port in  server / config / config.js (URL_DOMAIN) (as needed)
 