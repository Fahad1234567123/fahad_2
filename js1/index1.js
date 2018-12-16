(function() {
  function loadJS(u){var r=document.getElementsByTagName("script")[ 0 ],s=document.createElement("script");s.src=u;r.parentNode.insertBefore(s,r);}

if(!window.HTMLPictureElement){
  document.createElement('picture');
  //generating the config array
  window.picturefillCFG = window.picturefillCFG || [];
  picturefillCFG.push([ "algorithm", "saveData" ]);

  loadJS("https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.0-beta1/picturefill.min.js");
}loadJS
}());  

(function() {
	window.lazySizesConfig = window.lazySizesConfig || {};
	window.lazySizesConfig.loadMode = 1;

	window.lazySizesConfig.expand = 222;
	window.lazySizesConfig.expFactor = 1.6;
}());  

	/*
		for this demo not needed because we use CSS intrinsic sizing,
		but really useful if you deal with responsive images or lazyloaded images
	*/
	(function(){
		var oldFlickityCreate = window.Flickity.prototype._create;

		window.Flickity.prototype._create = function(){
			var that = this;
			if(this.element.addEventListener){
				this.element.addEventListener('load', function(){
					that.onresize();
				}, true);
			}
			this._create = oldFlickityCreate;
			return oldFlickityCreate.apply(this, arguments);
		};
	})();