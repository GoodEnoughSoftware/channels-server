# Channels Server

![channels icon]()

## Overview

The Channels Server manages all storage and message passing for the channels applications.

## Server Information

See the preceding section to see more information of the format of each object and model used in this database.

#### User Authorization

#### User Creation

#### Channels Creation

#### Channel Subscriptions

#### Channel Unsubscribing

## Database Models

#### Channels

Each channel will follow this format:

```javascript
{
 	id: (String, Unique),
	title: (String),
	history: [DateTime],
	count: (Integer),
	created: {DateTime, Username}
}
```