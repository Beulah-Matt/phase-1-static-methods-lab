class Formatter {
 
  static capitalize(string){
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static   sanitize(string) {
    // removes any non alpha-numeric characters except dash, space and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9-' ]+/g,"");
  }
  static titleize(string){
    // capitalizes first letter
    const regex = /(^|\b(?!(and?|at?|the|for|to|but|by|of|from)\b))\w+/g;
    return string.toLowerCase().replace(regex, string => string[0].toUpperCase() + string.slice(1))
  }

}