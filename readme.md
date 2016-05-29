# Channels Server

![channels icon]()

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