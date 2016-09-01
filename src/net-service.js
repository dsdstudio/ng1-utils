export default function upload(opt) {
	opt = Object.assign({
		method:'POST',
		url:'',
		data:{},
		onprogress:function() {},
		onload:function(e, file) {},
		onsuccess:function(e, file) {},
		onerror:function(e, file) {}
	}, opt);

	let xhr = new XMLHttpRequest();
	xhr.open(opt.method, opt.url);

	// native Form Data 세팅
	let form = new FormData();
	for ( let k in opt.data) form.append(k, opt.data[k]);

	xhr.upload.onprogress = opt.onprogress;
	xhr.upload.onload = function(e) {
		opt.onload.apply(null, [e, opt.data.file]);
	};
	xhr.onreadystatechange = function (e) {
		if (e.currentTarget.readyState == 4) {
			if (e.currentTarget.status == 200) opt.onsuccess.apply(null, [e.currentTarget, opt.data.file]);
			else opt.onerror.apply(null, [e.currentTarget, opt.data.file]);
		}
	};
	xhr.send(form);
	return xhr;
}
