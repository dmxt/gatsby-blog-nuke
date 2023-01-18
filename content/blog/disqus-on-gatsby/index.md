---
title: How to implement the Disqus comment section on Gatsby
date: "2022-09-30T19:25:00"
created: "2022-10-09"
updated: "2022-10-30"
description: "You will learn how to add comment section to your article on Gatsby using Disqus service, very simple."
tags: Gatsby, React, Development, Disqus, Comment
comment: https://jamstack-comments.netlify.app/about/
---

I like using Disqus because it's simple to set up and for anyone to place a comment.

I looked up and found out that all articles I visited didn't work, so I found this method to add comment sections to my blog articles. I hope this article will be helpful for you!

# What will I learn?

You'll learn how to set up Disqus commenting widget on your Gatsby blog article.

# 1. Disqus configuration

1. Login or register at https://disqus.com/
2. While logged in, go to https://disqus.com/admin/install/ and click on Gatsby in the list.
3. Start configuring Disqus for your site, as shown in a following picture: Use your own website name.
4. Enter the field: "Website Name: in Disqus setting

![](disqus-setting.png)

# 2. Installation

**A. Install on `npm`**

1. Stop `gatsby develop`
2. Run `react-disqus-comments` (???)
3. Run `npm install react-disqus-comments`

**B. Install on `yarn`** (preferred)

1. Stop `gatsby develop`
2. Run `yarn add react-disqus-comments`

## 3. Set it up on your Gatsby website

Run `gatsby develop` to start your Gatsby up and running in localhost.

#### Then add this section where you want the comment section to be.

Add the following code to your blog article template (in my case: `src/templates/pages/blog-post`).

**To put a comment widget below the blog article:** add the following code right before `</Layout>` (in my case) or below the article code.

```javascript
<ReactDisqusComments
  shortname="dmxt-blog"
  identifier={post.id}
  title={post.title}
  url={post.url}
  category_id={post.category_id}
/>
```

Replace `shortname` with your blog name configured in the Disqus website (see step 1)

# 4. Restart Gatsby to test

Re-compile it by stopping the environment dev and starting it back up with
`gatsby develop`

Your Disqus comment section should appear on the localhost environment if you followed my instruction.
Congratulations! 🎉
