# Much easier command-line http requests

```
npm install -g req-term
```

## Usage

```
get https://api.github.com
```

![Get command](http://github.com/jrf0110/req-term/raw/master/screenshots/get-1.png)

Inline data posting

```
post http://www.goodybag.com/api/consumers/login { email: \'teferguson@gmail.com\', password: \'password\' }
```

![Get command](http://github.com/jrf0110/req-term/raw/master/screenshots/post-1.png)

Or you can just type the url as a parameter and type in your json

![Get command](http://github.com/jrf0110/req-term/raw/master/screenshots/post-2.png)

## In the year 2000

I plan on making this a lot more robust. It's certainly lacking mostly every feature in curl and the only request types available are GET and POST.

