---
id: explain-bulk-processing-results-ordering
title: Are bulk processing URLs returned in the same order as submitted?
sidebar_label: Are bulk processing URLs returned in the same order as submitted?
---

<div class="entry-content">
		<p>No. The Bulk API/Bulk Processing service simultaneously extracts data from multiple pages at once, and indexes the data as it is returned from Diffbot APIs.</p>
<p>Because many factors enter in to when data is successfully returned — among them the speed of a site’s response, the need for retries if a site returns a temporary error, and the potential for incorrect or invalid URLs — there is no reliable order to the output of a downloaded CSV or JSON result set.</p>
			</div>
