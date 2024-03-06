import logo from './logo.svg';
import './App.css';
import './App.sass';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='content'>
          <div className='container t1'>
          <div className='logo p-absolute'>
          <img src={require('./text1/logo.png')} alt="logo" />
          </div>
            <div className='tit p-absolute'>
            <img src={require('./text1/tit.png')} alt="tit" />
            </div>
            <div className='subtit p-absolute'>
            <img src={require('./text1/subtit1.png')} alt="subtit" />
            <img src={require('./text1/subtit2.png')} alt="subtit" />
            </div>
            <div className='button-content p-absolute'>
            <div className='button-group p-relative'>
              <button type='button' className='button'>
              <img src={require('./text1/btn1.png')} alt="btn" />
              </button>
            </div>
            <div className='button-group p-relative'>
              <button type='button' className='button z-1'>
              <img src={require('./text1/btn2.png')} alt="btn" />
              </button>
              <button type='button' className='button'>
              <img src={require('./text1/btn3.png')} alt="btn" />
              </button>
              <button type='button' className='button z-1'>
              <img src={require('./text1/btn4.png')} alt="btn" />
              </button>
            </div>
            </div>
            <div className='footer p-absolute'>
            <img src={require('./text1/footer.png')} alt="禁止酒駕酒後不開車安全有保障" />
            </div>
          </div>
          <div className='container t2'>
          <main class="product-container">
          <section class="product-info">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/538e3c24ca5e8295e86b0cd45b91a1080348cf4bd223d026871c60b4d0ff0021?apiKey=425f22f1f0ec42d2bd5836acbe6b8033&" alt="Limited Edition Product Image" class="product-image" />
          <div class="edition-info">LIMITED EDITION BY</div>
          <div class="team-name">TEAM NINJA</div>
          <div class="sub-title">DESIGN</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aac3d0bd34733c7461aacfe6d059144dee822a900605b28a0a80006364ffb0ae?apiKey=425f22f1f0ec42d2bd5836acbe6b8033&" alt="Decorative Banner" class="banner-image" />
          <section class="product-description">
          [亞洲獨賣 限量發售]​<br />
          ​<br />
          湯姆沃克 <span>TOM Walker</span> 呈獻由全球品牌大使江西南和 <span>TEAM NINJA</span> 打造的限量瓶身。​<br />
          ​<br />
          在洋溢現代氣息的白色背景上，綴以品牌標誌的紅色和耀眼的金色漩渦，全新造型邀請您沉浸在迷人的世界中，塑造您個人的湯姆沃克體驗，並創造出充滿魔力的感官享受。
         </section>
             <div class="price-suggestion">建議售價: $1,595</div>
             <div class="actual-price">(實際售價以各通路與店家為準)</div>
             </section>
          <div class="decorative-bar"></div>
         </main>
          </div>
        </div>
        </header>
    </div>     
  );
}

export default App;
