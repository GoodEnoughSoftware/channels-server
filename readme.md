# Channels Server

![channels icon](blob:https%3A//drive.google.com/897eab90-f189-49d6-af1b-3bf8db9121bc)

## Overview

The Channels Server manages all storage and message passing for the channels applications.

## Server Information

See the preceding section to see more information of the format of each object and model used in this database.

#### User Authorization

#### User Creation

#### Channels Creation

In order to create a channel, an authenticated user will send a `PUT` request with the following information:

```javascript
{
	"title": (String)
}
```

If the request is valid with no errors, a JSON object will be sent back with relevant information, including an id that can be used to access the channel later:

```javascript
{
  "id": (String, Unique),
  "success": true,
  "err": null
}
```

If a request is made with a channel title that already exists, or without a title parameter, than an object with the error will be returned.

```javascript
{
  "success": false,
  "err": "That channel already exists!" | "A title must be indicated"
}
```

#### Channel Subscriptions

#### Channel Unsubscribing

## Database Models

#### Channels

Each channel will follow this format:

```javascript
{
 	"id": (String, Unique),
	"title": (String),
	"history": [DateTime],
	"count": (Integer),
	"created": {DateTime, Username}
}
```

## License

Copyright &copy; 2016 [Good Enough Apps](http://www.goodenoughapps.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.