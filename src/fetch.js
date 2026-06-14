alert("1");
function duobottestfetch() {
	alert("2");
	fetch("https://d35aaqx5ub95lt.cloudfront.net/js/2434-bb89a550.js")
		.then((r) => {
			if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
			return r.text();
		})
		.then((t) => {
			alert(t);
		})
		.catch((e) => {
			throw new Error(`Failed to inject script: ${e}`);
		});
	alert("3");
}