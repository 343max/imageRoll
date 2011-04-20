(function($) {

	$.fn.rollImage = function(imageSrc, imageWidth, imageHeight, steps, angle) {
		var $this = $(this);

		$this.css({
			width: imageWidth + 'px',
			height: imageHeight + 'px',
			'-webkit-transform-style': 'preserve-3d'
		});
		for(var i = 0; i < steps; i++) {
			var element = $('<div>');
	
			element.css({
				width: imageWidth,
				height: imageHeight / steps,
				'background-position': '0 ' + (imageHeight / steps * -i) + 'px',
				'background-image': 'url(' + imageSrc + ')',
				'background-repeat': 'no-repeat',
				'position': 'absolute',
				'left': 0,
				'top': 0
			});

			$this.append(element);
		}

		$this.rerollImage(angle, imageHeight, steps);
	};

	$.fn.rerollImage = function(angle, imageHeight, steps) { // imgWidth, imgHeight, steps,
		var $this = $(this);
		if(!imageHeight) imageHeight = $this.height();
		var radius = imageHeight / (2 * Math.PI) / angle * 360 * 0.95;
		var i = 0;
		$this.css('-webkit-transform', 'translateZ(' + -radius + 'px)');
		var elements = $this.find('div');
		if(!steps) steps = elements.length;

		elements.each(function() {
			var element = $(this);

			element.css({
				'-webkit-transform': 'rotateX(' + (angle / steps * -i) + 'deg) translateZ(' + radius + 'px)'
			});

			i++;
		});
	};

})(jQuery);