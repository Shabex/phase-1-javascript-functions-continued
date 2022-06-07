function saturdayFun(someWhere= "roller-skate"){
    return (`This Saturday, I want to ${someWhere}!`)
  }
  saturdayFun();

  function mondayWork (someActivity="go to the office"){
      return (`This Monday, I will ${someActivity}.`)
  }
  mondayWork();


 let wrapAdjective = function(style="*"){
      return function(adjective="special"){
          return `You are ${style}${adjective}${style}!`
      }
      
  }