# darobotics.github.io
[![Build Status](https://travis-ci.org/darobotics/darobotics.github.io.svg?branch=master)](https://travis-ci.org/darobotics/darobotics.github.io)

Note: This theme is based off of [minima](https://github.com/jekyll/minima/).

# Posts
There are lots of [examples](https://jekyllrb.com/docs/posts/) of how to write posts with Jekyll. 

## Front Matter

One important feature is the "front matter". 

Example Front Matter:
```
---
layout: post
title:  "Welcome"
image:  "/assets/posts/2016-11-03-welcome/featured.png"
thumb:  "/assets/posts/2016-11-03-welcome/thumb.png"
date:   2016-11-03 15:30:50 -0400
---
```

Options

| layout | tag | pin-menu | pin-card |
| --- | --- | --- | --- |
| `post` or `page` | `true` or none |
| Layout Type | Top Nav Bar | 

| title | author | image/thumb | date |
| --- | --- | --- | --- |
| "The Title" | "My Name" | "/assets/posts/yyyy-mm-dd-post-title/filename.png" | yyyy-mm-dd hh:mm:ss +- UTC |

Note: The `image` is the parallax header and the `thumb` should be 150x150px

## Markdown
This Jekyll project uses kramdown style markdown. This is different from GitHub's flavor of markdown. [Here is a quick reference.](http://kramdown.gettalong.org/quickref.html)

Common uses include links and images.

Images can be inserted like this: `![ImageName][image-reference]`. Then at the bottom of the page, type (for example):
```
[image-reference]: {{ site.url }}/assets/posts/2016-10-03-install-android-studio/sync-error.png
```
Links can be inserted like this: `[Android Studio][android-studio]`. Then at the bottom of the page, type (for example):
```
[android-studio]: https://developer.android.com/studio/index.html
```

# Local Development

Change the `_config.yml` file so that `url` and `github_username` look like this:

```
url: "http://127.0.0.1:4000" # the base hostname & protocol for your site
github_username:
```

Run `bundle exec jekyll serve` to star the server and go to [http://127.0.0.1:4000](http://127.0.0.1:4000).
