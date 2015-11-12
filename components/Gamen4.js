import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import * as Gamen4Actions from '../actions/Gamen4Actions';
import { Panel, Modal } from 'react-bootstrap';
import FwInputText from './FwInputText';
import FwButton from '../components/FwButton';
import FwLabel from '../components/FwLabel';
import FwDropDown from '../components/FwDropDown';
import FwMessage from '../components/FwMessage';
import FwRadioButton from '../components/FwRadioButton';

class Gamen4 extends Component {
  constructor(props, context) {
    super(props, context);
    const actions = bindActionCreators(Gamen4Actions,this.props.dispatch);

    this.state = {
      actions: actions
    };
  }

  handleSaveInputText1(text) {
    if (text.length !== 0) {
      this.props.gamen4.inputText1 = text;
    }
  }

  handleSaveInputText2(text) {
    if (text.length !== 0) {
      this.props.gamen4.inputText2 = text;
    }
  }

  handleSaveInputText3(text) {
    if (text.length !== 0) {
      this.props.gamen4.inputText3 = text;
    }
  }

  handleSaveInputText4(text) {
    if (text.length !== 0) {
      this.props.gamen4.inputText4 = text;
    }
  }

  handleSelectDropDown1(text) {
    this.state.actions.dropDown1OnChange(text);
  }

  handleSelectDropDown2(text) {
    this.state.actions.dropDown2OnChange(text);
  }

  handleSelectDropDown3(text) {
    this.state.actions.dropDown3OnChange(text);
  }

  handleSelectDropDown4(text) {
    this.state.actions.dropDown4OnChange(text);
  }

  handleSelectBanchigo(text) {
    if (text.length !== 0) {
      this.props.gamen4.banchigo = text;
    }
  }

  handleSelectBuildingKana(text) {
    if (text.length !== 0) {
      this.props.gamen4.buildingKana = text;
    }
  }

  handleSelectMuneban(text) {
    if (text.length !== 0) {
      this.props.gamen4.muneban = text;
    }
  }

  handleSelectHeyaban(text) {
    if (text.length !== 0) {
      this.props.gamen4.heyaban = text;
    }
  }

  handleSelectBuildingKanji(text) {
    if (text.length !== 0) {
      this.props.gamen4.buildingKanji = text;
    }
  }

  handleSelectGamenArgs1(text) {
    if (text.length !== 0) {
      this.props.gamen4.gamenArgs1 = text;
    }
  }

  handleSelectCustomerKeitaiRadios(target) {
    this.state.actions.customerKeitaiRadiosOnClick(target);
  }

  handleRegist() {
    alert(JSON.stringify(this.props.gamen4));
  }

  close() {
    this.props.gamen4.gamenReturn1 = this.props.gamen4.dialogReturn1;
    this.refs.gamenReturn1.state.text = this.props.gamen4.gamenReturn1;
    this.state.actions.dialog1Close(false);
  }

  open() {
    this.props.gamen4.dialogArgs1 = this.props.gamen4.gamenArgs1;
    this.props.gamen4.dialogReturn1 = '';
    this.state.actions.dialog1Open(true);
  }

  handleSelectDialogReturn1(text) {
    if (text.length !== 0) {
      this.props.gamen4.dialogReturn1 = text;
    }
  }

  render() {
    const hojin_sybt_items = [
        { eventKey: '1',    text: '株式会社' },
        { eventKey: '2',    text: '有限会社' },
        { eventKey: '3',    text: 'その他'    }
    ];
    const hojin_hyjichcd_items = [
        { eventKey: '0',    text: 'なし' },
        { eventKey: '1',    text: '前'  },
        { eventKey: '2',    text: '後'  }
    ];

    const customer_keitai_radios = [
            { id: 'customer_keitai_radios_1', name: 'customer_keitai_radios', value: '1', label: '選択１  ' },
            { id: 'customer_keitai_radios_2', name: 'customer_keitai_radios', value: '2', label: '選択２  ' },
            { id: 'customer_keitai_radios_3', name: 'customer_keitai_radios', value: '3', label: '選択３  ' },
            { id: 'customer_keitai_radios_4', name: 'customer_keitai_radios', value: '4', label: '選択４  ' },
            { id: 'customer_keitai_radios_5', name: 'customer_keitai_radios', value: '5', label: '選択５  ' },
            { id: 'customer_keitai_radios_6', name: 'customer_keitai_radios', value: '6', label: '選択６  ' },
            { id: 'customer_keitai_radios_7', name: 'customer_keitai_radios', value: '7', label: '選択７  ' },
            { id: 'customer_keitai_radios_8', name: 'customer_keitai_radios', value: '8', label: '選択８  ' }
    ];

    return (
      <div className={classnames('container')}>
          <div className={classnames('row')}>
              <Panel>
                  <h3>登録画面</h3>
              </Panel>
          </div>
          <div className={classnames('row')}>
              <FwLabel className='col-sm-2' text='テキスト１' for='' />
              <FwInputText onSave={this.handleSaveInputText1.bind(this)}
               text={this.props.gamen4.inputText1} className='alert-success col-sm-3' ref='inputText1'/>
              <FwLabel className='col-sm-2' text='テキスト２' for='' />
              <FwInputText onSave={this.handleSaveInputText2.bind(this)}
               text={this.props.gamen4.inputText2} className='alert-success col-sm-3' ref='inputText2'/>
          </div>
          <div className={classnames('row')}>
              <FwLabel className='col-sm-2' text='テキスト３' for='' />
              <FwInputText onSave={this.handleSaveInputText3.bind(this)}
               text={this.props.gamen4.inputText3} className='alert-success col-sm-3' ref='inputText3'/>
              <FwLabel className='col-sm-2' text='テキスト４' for='' />
              <FwInputText onSave={this.handleSaveInputText4.bind(this)}
               text={this.props.gamen4.inputText4} className='alert-success col-sm-3' ref='inputText4'/>
          </div>
          <div className={classnames('row')}>
              <FwLabel className='col-sm-2' text='ドロップダウン１' for='' />
              <div align="left">
              <FwDropDown id='dropDown1' value={this.props.gamen4.dropDown1} className='col-sm-1'
                onSelect={this.handleSelectDropDown1.bind(this)} items={hojin_sybt_items} ref='dropDown1'/>
              </div>
              <FwLabel className='col-sm-1' text='ドロップダウン２' for='' />
              <FwDropDown id='dropDown2' value={this.props.gamen4.dropDown2} className='col-sm-1'
                onSelect={this.handleSelectDropDown2.bind(this)} items={hojin_hyjichcd_items} ref='dropDown2'/>
              <FwLabel className='col-sm-2' text='ドロップダウン３' for='' />
              <FwDropDown id='dropDown3' value={this.props.gamen4.dropDown3} className='col-sm-1'
                onSelect={this.handleSelectDropDown3.bind(this)} items={hojin_sybt_items} ref='dropDown3'/>
              <FwLabel className='col-sm-1' text='ドロップダウン４' for='' />
              <FwDropDown id='dropDown4' value={this.props.gamen4.dropDown4} className='col-sm-1'
                onSelect={this.handleSelectDropDown4.bind(this)} items={hojin_hyjichcd_items} ref='dropDown4'/>
          </div>
          <div className={classnames('row')}>
              <FwLabel className='col-sm-2' text='住所' for='' />
              <FwLabel className='col-sm-10' text={this.props.gamen4.address} for='' />
          </div>
          <div className={classnames('row')}>
              <FwLabel className='col-sm-2' text='番地号' for='' />
              <FwInputText onSave={this.handleSelectBanchigo.bind(this)}
               text={this.props.gamen4.banchigo} className='alert-success col-sm-3' ref='banchigo'/>
              <FwLabel className='col-sm-2' text='建物名カナ' for='' />
              <FwInputText onSave={this.handleSelectBuildingKana.bind(this)}
               text={this.props.gamen4.buildingKana} className='alert-success col-sm-3' ref='buildingKana'/>
          </div>
          <div className={classnames('row')}>
              <FwLabel className='col-sm-2' text='その他' for='' />
              <FwInputText onSave={this.handleSelectMuneban.bind(this)}
               text={this.props.gamen4.muneban} className='alert-success col-sm-1' ref='muneban'/>
              <FwLabel className='col-sm-1' text='－' for='' />
              <FwInputText onSave={this.handleSelectHeyaban.bind(this)}
               text={this.props.gamen4.heyaban} className='alert-success col-sm-1' ref='heyaban'/>
              <FwLabel className='col-sm-2' text='建物名漢字' for='' />
              <FwInputText onSave={this.handleSelectBuildingKanji.bind(this)}
               text={this.props.gamen4.buildingKanji} className='alert-success col-sm-3' ref='buildingKanji'/>
          </div>
          <div className={classnames('row')}>
              <FwLabel className='col-sm-2' text='ラジオボタン' for='' />
              <FwRadioButton items={customer_keitai_radios} value={this.props.gamen4.customer_keitai_radios}
                className='col-sm-10' onClick={this.handleSelectCustomerKeitaiRadios.bind(this)} ref='customer_keitai_radios'/>
          </div>
          <div className={classnames('row')}>
              <div className='col-sm-2'>
                  <FwButton text={'登録'} placeholder={'登録できます'} onClick={this.handleRegist.bind(this)} />
              </div>
              <div className='col-sm-5'>
                  <FwButton text={'ダイアログオープン'} placeholder={'ダイアログを開きます'} onClick={this.open.bind(this)} />
                  <FwInputText onSave={this.handleSelectGamenArgs1.bind(this)}
                   text={this.props.gamen4.gamenArgs1} className='alert-success col-sm-3' ref='gamenArgs1'/>
                  <FwLabel className='col-sm-2' text={this.props.gamen4.gamenReturn1} for='' ref='gamenReturn1'/>
              </div>
          </div>
          <br></br>
          <FwLabel className='alert alert-warning col-xs-3' text='ラベル' for='' />

          <Modal show={this.props.gamen4.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>モーダルダイアログのサンプル</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>サンプル実装内容</h4>
              <p>引数の受け渡しテスト</p>
              <hr />
              <h4>
                <FwLabel className='col-sm-2' text='親画面からの引数' for=''/>
              </h4>
              <p>
                <FwLabel className='col-sm-2' text={this.props.gamen4.dialogArgs1} for='' ref='dialogArgs1'/>
              </p>
              <h4>
                <FwLabel className='col-sm-2' text='親画面への戻り値' for=''/>
              </h4>
              <p>
                <FwInputText onSave={this.handleSelectDialogReturn1.bind(this)}
                 text={this.props.gamen4.dialogReturn1} className='alert-success col-sm-3' ref='dialogReturn1'/>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <FwButton text={'Close'} placeholder={'ダイアログを閉じます'} onClick={this.close.bind(this)} />
            </Modal.Footer>
          </Modal>

      </div>
    );
  }
}

function select(state) {
  return {
    gamen4: state.gamen4
  };
}

export default connect(select, null, null, { withRef: true })(Gamen4);
