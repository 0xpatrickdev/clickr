#Clickr

## Purpose

Aggregate content from subscription video services, and allow users to browsea and search it from a mobile application. Once they find a show or movie they would like to watch, they can launch it directly on their Smart TV, or Apple TV/Chromecast/Roku enabled television.  They can also just watch directly on their phones, tablets, or computers.

## Several Approaches

I'm still deciding between a few different approaches.  Probably going to try them all, but I will lay them out here:

- Launch apps on smartphone, and instruct users to cast content.
	- Currently what Chromecast users do, but it requires the user to have all apps downloaded + linked up (logged in)
	- Compatiable with all devices, Smart TV's, Chromecast's, Roku's, and Apple TV's
- Use Roku dev kit / dev tools to launch apps directoy from the clickr app / webapp
	- Best because it does not require the user to have the apps on their phones, or logged in (can be a pain for people with shared accounts).
	- Do not think Apple TV supports deep linking into apps.  The content must be loaded on the user's phone, then cast to the TV
- Play content directly in the clickr app (using video links from the service prodivors' web apps), and launch directly to the TV via Dial / Air Play.
	- Can circumvent users having to download the apps on their phones, but they would still be required to know the logins.

## To Do:

- fine tune indexing from [Guidebox API](https://api.guidebox.com/)
	- add application links for Netlfix
-  Allow users to cast multiple apps/channels, or any HTML5 video url
	- Rokus, Smart TV's, and Chromecasts:
		- Add support for [DIAL](http://www.dial-multiscreen.org/), the Discover And Launch protocol developed by Google and Netflix
		- If you've ever seen this icon: <img src="http://rabbittv.s3.amazonaws.com/Support.rabbittvgo.com/google-cast-2ab.jpg" alt="DIAL" width="40px">, that's DIAL.
	- Apple TV:
		- Add support for [Air Play](https://developer.apple.com/airplay/)
- Focus primarily on Netflix, HBO Go/Now, Hulu, Amazon Prime, and YouTube Red.
	- Show overlap between providers
	- Show where certain content is available for free, legally (i.e. Southpark and Hulu)
	- Highlight recently added content, as well as content that is expiring in the near features
- Allow users to track show/movie's they've watched, sort of like facebook used to do back in the day:

![alt tag](http://i.stack.imgur.com/fuNuS.png)