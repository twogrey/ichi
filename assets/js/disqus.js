var disqus_loaded = false;

function load_disqus() {
	if (config_disqus_shortname !== '') {
		disqus_loaded = true;
		
		// Insert Discussion title and icon
		// var discussionHead = document.createElement('h3');
		// discussionHead.className = "title-disqus";
		// discussionHead.innerHTML = '<span class="fi-comments"></span>Discussion';
		// document.body.appendChild(discussionHead);

		// Insert Disqus <div> tags
		// var disqusDiv = document.createElement('div');
		// disqusDiv.id = "disqus_thread";
		// document.body.appendChild(disqusDiv);

		// Disqus comments section code
		var disqus_shortname = config_disqus_shortname;
		var disqus_identifier = '{{post.id}}'; // make sure to use the post.id as an identifier, otherwise disqus will use the pages url per default, which might be problematic...

		// For embedding disqus under a post
		(function() {
			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
	}
}

load_disqus();
