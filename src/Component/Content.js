import React, { Component } from 'react';
import firebase from '../firebase';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Fade  } from 'reactstrap';
class Content extends Component {
  constructor(){
     super();
     this.state = {
        diaries:[],
        diaryID:'',
        dateDiary:'',
        dataDiary:'',
        signature:'',
        fadeIn: false,
     }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showDiary = this.showDiary.bind(this);
  }
  showDiary() {
    this.setState({
      fadeIn: !this.state.fadeIn
    })
}
  componentDidMount(){
    const diariesRef = firebase.database().ref('diaries');
    diariesRef.on('value',(snapshot) => {
        let diaries = snapshot.val();
        let newState = [];
        for(let story in diaries){
          newState.push({
              diaryID:story,
              dateDiary:diaries[story].dateDiary,
              dataDiary:diaries[story].dataDiary,
              signature:diaries[story].signature,
          })
        }
        this.setState({
          diaries:newState
        })
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value

    })
  }


  handleSubmit(e){
    e.preventDefault();
        if(this.state.dataDiary==''){
            alert("กรุณาใส่ข้อความเพื่อบันทึก");
        }
        else if(this.state.signature==''){
            alert("กรุณาใส่นามปากกา");
        }
        else {
          if(this.state.diaryID != ''){
                  return this.updateItem();
          }

          alert("บันทึกสำเร็จ");
            const diariesRef = firebase.database().ref('diaries')
            const story = {
                dateDiary : this.state.dateDiary,
                dataDiary : this.state.dataDiary,
                signature : this.state.signature,
              
            }    
            diariesRef.push(story)
              this.setState({
                  diaryID:'',
                  dateDiary : '',
                  dataDiary : '',
                  signature : '',
                  
            })
          }
          }

  removeItem(diaryID){
    const diariesRef = firebase.database().ref('/diaries');
    diariesRef.child(diaryID).remove();
 }
 storyDetailModal() {    
  this.setState((prev, props) => {
    const newState = !prev.modalState;
    
    return { modalState: newState };
  });
}

  render() {

    return (
      <div className="app">
      <div className="" style={{marginTop:20,marginLeft:30,marginRight:30}}>
      

      <form onSubmit={this.handleSubmit} onKeyPress={event => {
      if (event.which === 13) {
        event.preventDefault();
        }
      }}>
             <div className="row">
                  <div className="col-md-7">
                      <div class="row text-center">
                        <div className="col-md-2">
                      
                        </div>
                        <div className="col-md-8"> 
                        <div className="card">
                            <img src="https://www.lacockphotography.com/wp-content/uploads/Indoor-Photography.jpg" class="card-img-top" alt="..."/>
                        </div>
                        </div>
                        <div className="col-md-2">
                      
                        </div>
                  </div>
                      <br/>            
                    <div class="input-group mb-3 col-md-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Date</span>
                      </div>
                        <input type="text" name="dateDiary" class="form-control" placeholder="D/M/Y"  onChange={this.handleChange} value={this.state.dateDiary}/>&nbsp;
                    </div>
                
                <div>
                    <textarea rows="5" id="comment" type="text" name="dataDiary" class="form-control" placeholder="How was your day?"  onChange={this.handleChange} value={this.state.dataDiary}/>
                </div>
                <br/>
                <div className="row" >
                <div className="col-md-4">
                      
                      </div>
                  <div className="col-md-4">
                      <div class="input-group mb-3">
                      <input type="text" name="signature" className="form-control" placeholder="name" onChange={this.handleChange} value={this.state.signature}/>
                      <div class="input-group-append">
                      <button type="submit" onClick={this.state} class="btn btn-warning"> Submit Diary</button>&nbsp;&nbsp;
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      
                  </div>

                  </div>
                    </div>
                    <div className="col-md-5">
                      <div className="card">
                          <button type="button" class="btn btn-warning btn-lg btn-block" onClick={this.showDiary}>My Diary</button>
                          <Fade in={this.state.fadeIn}>
                          <table className="table table-hover">
                              <tr className="thead-light">
                                <th width="20%">Date</th>
                                <th width="55%">My Diary</th>
                                <th width="20%">Signature</th>
                                <th width="5%">Delete</th>
                              </tr>
                              {
                                  this.state.diaries.map((story) => {
                                    return (
                                        <tr>
                                          <td>{story.dateDiary}</td>
                                          <td>{story.dataDiary}</td>
                                          <td>{story.signature}</td>
                                          <td><button className="btn btn-danger btn-md" onClick={() => this.removeItem(story.diaryID)}>Delete</button></td>
                                        </tr>
                                    )
                                  })
                              }
                          </table>
                          </Fade>
                        </div>
                    </div>
                </div> 
            </form>
      </div>
      </div>
    );
  }
}

export default Content;