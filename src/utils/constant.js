const GOOGLE_API_KEY = "AIzaSyDZYAhcgRbJyJNLcS7JvcGaxYyZrctnVxU";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+GOOGLE_API_KEY +
  "&q=";

  export const COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

  export const SEARCH_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";
  export const OFFSET_LIVE_CHAT=10;