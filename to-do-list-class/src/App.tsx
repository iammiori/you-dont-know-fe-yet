import { Component } from 'react';
import './App.css';

export default class App extends Component {
  /**
   * 클래스 기반 컴포넌트에서 멤버 변수로 스타일을 정의하는 방식은, JavaScript에서 흔히 사용되지만,
   * 이 스타일을 조금 더 세련되게 관리하기 위해
   * CSS 모듈 또는 styled-components 같은 CSS-in-JS 라이브러리를 사용하는 것을 고려
   */
  btnStyle: React.CSSProperties = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  getStyle = () => {};
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <div>
            <input type="checkbox" defaultChecked={false} />
            공부하기
            <button style={this.btnStyle}>x</button>
          </div>
        </div>
      </div>
    );
  }
}
