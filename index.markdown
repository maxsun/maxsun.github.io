
<img src="/assets/image/snake.png" height="200" />

These are my notes on Cognitive Science. Here's a quote I like:

*"Any road followed precisely to its end leads precisely nowhere. Climb the mountain just a little bit to test that it’s a mountain. From the top of the mountain, you cannot see the mountain."*
-Dune

# All notes: 

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>