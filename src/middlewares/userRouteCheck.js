export function forUsers(req, res, next) {
   // Ask if user is in session
   if(req.session.userLogged) {
      // If user is in session, it continues with next middleware or controller
      next()
   } else {
      // If user is not logged redirect to login page
      res.redirect("/users/login")
   }
}

export function forGuests(req, res, next) {
   // Ask if user is not in session
   if(!req.session.userLogged) {
      // If user is not in session, it continues with next middleware or controller
      next()
   } else {
      // If user is logged redirect to profile page
      res.redirect("/users/profile")
   }
}