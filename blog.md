---
layout: page
title: Blog
permalink: /blog/
---

Hey there! I'm learning and I find the best way to learn is to write my scrambled thoughts about it without wasting too much time. But, I'm trying to make them more organized and maintain it here. Hopefully, some are nicely presented and you can find them helpful! 
I also commit a lot of mistakes and I write about my takes on it... feel free to hit me up if you think otherwise... 
I have made it easier for you to read my stuff via <a href="{{site.baseurl}}/categories/">category</a>

{% assign year = "" %}
<ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
    <li class="listing-seperator">{{ y }}</li>
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
