!function(n){function e(){i&&(a(e),jQuery.fx.tick())}for(var i,t=0,o=["webkit","moz"],a=window.requestAnimationFrame,m=window.cancelAnimationFrame;t<o.length&&!a;t++)a=window[o[t]+"RequestAnimationFrame"],m=m||window[o[t]+"CancelAnimationFrame"]||window[o[t]+"CancelRequestAnimationFrame"];a?(window.requestAnimationFrame=a,window.cancelAnimationFrame=m,jQuery.fx.timer=function(n){n()&&jQuery.timers.push(n)&&!i&&(i=!0,e())},jQuery.fx.stop=function(){i=!1}):(window.requestAnimationFrame=function(n,e){var i=(new Date).getTime(),o=Math.max(0,16-(i-t)),a=window.setTimeout(function(){n(i+o)},o);return t=i+o,a},window.cancelAnimationFrame=function(n){clearTimeout(n)})}(jQuery);