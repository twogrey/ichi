var disqus_loaded = false;

function load_disqus() {
	if (config-disqus-shortname !== '') {
		disqus_loaded = true;
		var disqus_shortname = config-disqus-shortname;
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
