import react from 'react'
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Protectedroutes = ({component: Component, user, ...rest}) => {
   

      return (
        <Route {...rest} render={
          (props) => {
            if (user) {
                return <Redirect to="/" />
            } else {
             
              return <Component {...props} />
                
              
            }
        }
      } />
    )

}
export default Protectedroutes;










