import React,{Component} from 'react'
import firebase from '../firebase';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md text-center" style={{maginTop:50}}> 
                        <h1 className='title3'>
                            <img style={{height:70}} src="https://image.flaticon.com/icons/png/512/682/682308.png" alt=""/>
                            <img style={{height:100}} src="https://cognigen-cellular.com/images/aquarium-clipart-word-5.png" alt=""/>
                            <img style={{height:70}} src="https://image.flaticon.com/icons/png/512/682/682308.png" alt=""/>
                        </h1>
                    </div>
                    <hr/>
                </div>
            </div>
    
        )
    }
    
}

export default Header;