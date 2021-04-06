// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(aktivity="go to the office") {
    return `This Monday, I will ${aktivity}.`
}

function wrapAdjective(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
}