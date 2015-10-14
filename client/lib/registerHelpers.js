UI.registerHelper('formatDate', function(context, options) {
  if(context)
    return moment(context).format('MM/DD/YY, hh:mm');
});

UI.registerHelper('formatShortDate', function(context, options) {
  if(context)
    return moment(context).format('MM/DD/YY');
});

UI.registerHelper('fromNow', function(context, options) {
  if(context)
		return moment(context).from(moment());
});

UI.registerHelper('formatDateUnix', function(context, options) {
  if(context)
    return moment.unix(context).format('MM/DD/YY');
});

UI.registerHelper('fromNowUnix', function(context, options) {
  if(context)
		return moment.unix(context).from(moment());
});

UI.registerHelper('toAge', function(context, options) {
  if(context)
		return moment().diff(context, 'years');
});


UI.registerHelper('addCommas', function(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
});