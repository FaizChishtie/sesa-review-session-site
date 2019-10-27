const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://sesanotes.netlify.com",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://raw.githubusercontent.com/sesa-uottawa/sesa-gatsby/master/src/resources/images/black-sesa-logo-simple.png",
		"logoLink": "https://sesanotes.netlify.com",
		"title": "SESA Notes",
		"githubUrl": "https://github.com/FaizChishtie/sesa-review-session-site",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/ITI1120"
		],
		"links": [
			{ "text": "SESA Website", "link": "https://https://sesa-uottawa.ca/"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "SESA-Notes",
		"description": "SESA's academic team's note site! Get the notes/slides from review sessions here.",
		"ogImage": null,
		"docsLocation": "https://github.com/FaizChishtie/sesa-review-session-site/tree/master/content",
		"favicon": "https://raw.githubusercontent.com/sesa-uottawa/sesa-gatsby/master/src/resources/images/black-sesa-logo-simple.png"
	},
};

module.exports = config;