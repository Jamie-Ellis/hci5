import React from 'react';

function NewsAggregator() {
  // Add your news aggregator logic here
  function filterNews() {
    // Get the user's date preference
    let dateFilter = document.getElementById("date").value;

    // Get the user's popularity preference
    let popularityFilter = document.getElementById("popularity").value;

    // Get all the articles
    let articles = document.getElementsByClassName("article");

    // Loop through each article
    for (let i = 0; i < articles.length; i++) {
        // Get the article's date and popularity
        let articleDate = articles[i].getAttribute("data-date");
        let articlePopularity = parseInt(articles[i].getAttribute("data-popularity"));

        // Determine whether to show or hide the article based on the user's preferences
        let showArticle = true;

        if (dateFilter && dateFilter !== articleDate) {
            showArticle = false;
        }

        if (popularityFilter === "popular" && articlePopularity < 7) {
            showArticle = false;
        }

        if (popularityFilter === "unpopular" && articlePopularity >= 7) {
            showArticle = false;
        }

        if (showArticle) {
            articles[i].style.display = "block";
        } else {
            articles[i].style.display = "none";
        }
    }
}

return (
    <div>
      <h1>News Aggregator - Homepage</h1>
     
	<form onsubmit="filterNews(); return false;">
		<label for="date">Filter by Date:</label>
		<input type="date" id="date" name="date"/>
		<br></br>
		<label for="popularity">Filter by Popularity:</label>
		<select id="popularity" name="popularity">
			<option value="all">All</option>
			<option value="popular">Popular</option>
			<option value="unpopular">Unpopular</option>
		</select>
		<br></br>
		<input type="submit" value="Filter News"/>
	</form>

		<article class="article" data-popularity="8" data-date="2023-05-10">
			<h2>5 Must-Have Gadgets for Your Home Office</h2>
			<p>Working from home has become more common in recent years, and having the right gadgets can make all the
				difference. Here are five must-have gadgets for your home office:</p>
			<ol>
				<li>A comfortable office chair with good lumbar support</li>
				<li>A high-quality webcam for video conferences</li>
				<li>A noise-cancelling headset to block out distractions</li>
				<li>A wireless keyboard and mouse for added convenience</li>
				<li>An ergonomic standing desk to promote good posture</li>
			</ol>
			<p>Popularity: 8/10</p>
			<p>Date: May 10, 2023</p>
		</article>

		<article class="article" data-popularity="6" data-date="2023-05-12">
			<h2>The Benefits of Yoga for Mental Health</h2>
			<p>Yoga has been practiced for centuries and is known for its physical benefits. However, the mental health
				benefits of yoga are equally important, and research has shown that practicing yoga regularly can help reduce stress, anxiety, and depression. Some of the
				benefits of yoga for mental health include:</p>
				<ul>
					<li>Improved mood</li>
					<li>Reduced stress and anxiety</li>
					<li>Better sleep quality</li>
					<li>Increase in feelings of well-being and happiness</li>
					<li>Improved cognitive function and memory</li>
				</ul>
				<p>Popularity: 6/10</p>
				<p>Date: May 12, 2023</p>
				</article>
				
				<article class="article" data-popularity="3" data-date="2023-05-14">
					<h2>How to Start a Successful E-commerce Business</h2>
					<p>Starting an e-commerce business can be a lucrative venture if done correctly. Here are some tips for starting a
						successful e-commerce business:</p>
					<ul>
						<li>Choose a profitable niche</li>
						<li>Create a professional website with an easy-to-use interface</li>
						<li>Invest in high-quality product photography</li>
						<li>Offer competitive pricing and shipping rates</li>
						<li>Market your business through social media and other online channels</li>
					</ul>
					<p>Popularity: 3/10</p>
					<p>Date: May 14, 2023</p>
				</article>
    </div>
  );
}

export default NewsAggregator;
