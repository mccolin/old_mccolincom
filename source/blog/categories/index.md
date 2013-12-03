---
layout: page
title: Site Topics
subtitle: Things written about over time
comments: false
sharing: false
---

<ul>
{% for item in site.categories %}
    <li><a href="/blog/categories/{{ item[0] }}/">{{ item[0] | capitalize }}</a> ({{ item[1].size }})</li>
{% endfor %}
</ul>
