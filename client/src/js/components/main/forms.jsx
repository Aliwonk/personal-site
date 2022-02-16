import React from 'react';
import * as AJX from '../../modules/ajax.jsx';

// FORM CALLBACK
export class CallBackForm extends React.Component {
    answerCallback = '';
    constructor(props) {
        super(props);
        this.state = {
            clientName : '',
            clientEmail : '',
            clientMessage : ''
        }
        
        // value inputs
        this.valueName = this.valueName.bind(this);
        this.valueEmail = this.valueEmail.bind(this);
        this.valueMessage = this.valueMessage.bind(this);
        // send ajax data
        this.sendData = this.sendData.bind(this);

        // valid inputs
        this.validName = false;
        this.validEmail = false;
    };

    closeCallBack() {
        document.querySelector('.callBack').classList.remove('callBackClick');
    };

    // value inputs
    valueName(e) {
        this.setState({clientName: e.target.value});
    };

    valueEmail(e) {
        this.setState({clientEmail: e.target.value});
    };

    valueMessage(e) {
        this.setState({clientMessage : e.target.value});
    };

    // ajax send data
    sendData(e) {

        // form callback
        let form = document.forms.callBack;

        // modalAnswer block callback
        let modal = document.querySelector('.modalCallBack');
        
        // validate inputs
        if(this.state.clientName.length > 0 && this.state.clientEmail.length > 0) {

            form.elements.clientName.style.borderBottom = '1px solid #dfdcdc';
            form.elements.clientEmail.style.borderBottom = '1px solid #dfdcdc';

            // check valid email
            var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if(reg.test(this.state.clientEmail)) {
                
                // send client data on server
                let client = {
                    clientName : this.state.clientName,
                    clientEmail : this.state.clientEmail,
                    clientMessage : this.state.clientMessage
                }; 

                AJX.sendDataXHR('/', JSON.stringify(client), {name: 'Content-Type', value: 'application/json'}, err => {
                    if(err) return console.log(err);
                    
                    // show modal block answer
                    modal.classList.add('showModalCallBack');
                    
                    // hide modal block answer
                    setTimeout(() => {
                        modal.classList.remove('showModalCallBack');
                    }, 2500);
    
                });
                
                this.answerCallback = `Ваше сообщение получено. В скором времени вам ответят `;
                
            }else{

                form.elements.clientEmail.style.borderBottom = '1px solid red';
                this.answerCallback = 'Адрес электронной почты не корректный';

                // show modal block answer
                modal.classList.add('showModalCallBack');
                // hide modal block answer
                setTimeout(() => {
                    modal.classList.remove('showModalCallBack');
                }, 2500);

            }

        }else{
            
            form.elements.clientName.style.borderBottom = '1px solid red';
            form.elements.clientEmail.style.borderBottom = '1px solid red';
            this.answerCallback = 'Заполните поля';

            // show modal block answer
            modal.classList.add('showModalCallBack');
            // hide modal block answer
            setTimeout(() => {
                modal.classList.remove('showModalCallBack');
            }, 2500);
        
        }

        this.setState({clientName: ''});
        this.setState({clientEmail: ''});
        this.setState({clientMessage : ''});
        e.preventDefault();
    };

    render() {
        return(

            <form className="callBackForm" name="callBack">
                <div className="modalCallBack">
                    <p>{this.answerCallback}</p>
                </div>
                <div id="btnClose" onClick={this.closeCallBack}>
                    <img src="https://img.icons8.com/ios/30/000000/delete-sign--v1.png" alt="" />
                </div>
                <label>Имя</label>
                <input type="text" name="clientName" id="clientName" placeholder="Введите имя" value={this.state.clientName} onChange={this.valueName}/>
                <label htmlFor="">Ваш E-mail</label>
                <input type="email" name="clientEmail" id="clientEmail" placeholder="Anonim@mail.com" value={this.state.clientEmail} onChange={this.valueEmail}/>
                <label htmlFor="">Сообщение</label>
                <textarea name="clientMess" id="clientMess" cols="30" rows="10" placeholder="Сообщение" value={this.state.clientMessage} onChange={this.valueMessage}></textarea>
                <input type="submit" value="Отправить" onClick={this.sendData} />
            </form>

        )

    };
};