---
layout: default
title: Musings
permalink: /musings/
---

<div class="max-w-4xl mx-auto px-6 py-16">
  <h1 class="text-4xl font-serif text-purple-900 mb-12 text-center">Random Thoughts</h1>
  
  <div class="grid gap-8">
    {% for post in site.categories.musings %}
    <article class="bg-amber-50 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <div class="p-6">
        <h2 class="text-2xl font-serif text-purple-800 mb-2">{{ post.title }}</h2>
        <time class="text-purple-600 text-sm mb-4 block">{{ post.date | date: "%B %d, %Y" }}</time>
        <p class="text-purple-600 mb-4">{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
        <a href="{{ post.url }}" class="text-purple-700 hover:text-purple-900 font-medium">Read more →</a>
      </div>
    </article>
    {% endfor %}

    {% if site.categories.musings.size == 0 %}
    <p class="text-center text-purple-700">Musings coming soon...</p>
    {% endif %}
  </div>
</div>