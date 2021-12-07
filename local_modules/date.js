const today = new Date();


exports.getDate = () => {
const dateDisplayOptions = {
weekday: 'long', 
month: 'long', 
day: 'numeric',
}
return today.toLocaleDateString("en-US", dateDisplayOptions);
}

////////////////////////////////////////////////////////////////////////////////

exports.getDay = () => {
dateDisplayOptions = {
weekday: 'long', 
}
return today.toLocaleDateString("en-US", dateDisplayOptions);
}