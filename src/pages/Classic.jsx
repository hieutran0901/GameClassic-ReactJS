import React, { useContext, useRef, useState } from 'react';
import { ProductsContext } from '../contexts/productsContext';
import '../styles/classic.css';
import logo from '../assets/images/Logo.webp';
import stats from '../assets/images/download.png';
import StreakNone from '../assets/images/StreakNone.png';
import setting from '../assets/images/setting.png';
import notes from '../assets/images/notes.png';
import help from '../assets/images/help.webp';

const Classic = () => {
  const [name, setName] = useState('');
  const htmlElRefFocus  = useRef(null)
  const { onSubmit, productsState } = useContext(ProductsContext);
  const [poper, setPoper] = useState(false);
  const [poperData, setPoperData] = useState([]);
  // console.log(productsState.correctAnswer);

  const handleOnchangeName = (e) => {
    let pattern = `^${e.target.value}`;
    let newParttern = new RegExp(pattern, 'gi');
    setName(e.target.value);

    if (e.target.value !== '') {
      if((productsState.products.filter((item) => item.name.search(newParttern) !== -1).length === 0)){
        setPoperData([{name: 'No champion found...'}])
      }else{
        setPoperData(productsState.products.filter((item) => item.name.search(newParttern) !== -1));
      }
      setPoper(true);
    } else {
      setPoper(false);
      setPoperData([]);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    else {
      onSubmit(name.trim().toLocaleLowerCase());
      setName('');
      setPoperData([]);
    }
  };

  return (
    <div className="container">
      <div className="header-container">
        <div className="logo-name">
          <img src={logo} alt="logo" />
        </div>

        <div className="header-buttons">
          <div className="stats-button">
            <img src={stats} alt="stats" />
          </div>
          <div className="current-streak">
            <img src={StreakNone} alt="StreakNone" />
          </div>
          <div className="settings-button">
            <img src={setting} alt="setting" />
          </div>
          <div className="notes-button">
            <img src={notes} alt="notes" />
          </div>
          <div className="help-button">
            <img src={help} alt="help" />
          </div>
        </div>
      </div>

      <section>
        <div className="container top">
          <div className="sub-container">
            <div className="game">
              <span>
                <div className="which-with-background">
                  <div>
                    <span className="which-text">Guess today's League of Legends champion!</span>
                  </div>
                  <div className="pre-clues">Type any champion to begin.</div>
                </div>
              </span>
            </div>

            <div className="answers">
              <div className="guessbox">
                <div className="IZ-select">
                  <div className="IZ-select__input">
                    <form onSubmit={handleOnSubmit}>
                      <input
                        className="input__champ"
                        type="text"
                        placeholder="Type champion name ..."
                        onChange={handleOnchangeName}
                        value={name}
                        ref={htmlElRefFocus}
                      />
                    </form>
                  </div>
                  <div className={`poper ${(poper && poperData.length !== 0) ? 'poper_show' : ''}`}>
                    {poperData.map((item) => (
                      <div key={item.id} className="search__item" onClick={() => {setName(item.name);setPoperData([]);htmlElRefFocus.current.focus()}}>
                        {item.image && <img src={item.image} alt="avata" />}
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="guess-button" onClick={handleOnSubmit}>
                  <button>➤</button>
                </div>
              </div>
            </div>

            <div className="scrollable-answers">
              <div className="classic-answers-container">
                <div className="square-container">
                  <div className="square square-title">
                    <div className="square-content">Champion</div>
                    <hr />
                  </div>
                  <div className="square square-title">
                    <div className="square-content">Gender</div>
                    <hr />
                  </div>
                  <div className="square square-title">
                    <div className="square-content">Position(s)</div>
                    <hr />
                  </div>
                  <div className="square square-title">
                    <div className="square-content">Species</div>
                    <hr />
                  </div>
                  <div className="square square-title">
                    <div className="square-content">Resource</div>
                    <hr />
                  </div>
                  <div className="square square-title">
                    <div className="square-content">Range type</div>
                    <hr />
                  </div>
                  <div className="square square-title">
                    <div className="square-content">Region(s)</div>
                    <hr />
                  </div>
                  <div className="square square-title">
                    <div className="square-content">Release year</div>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="answers-container classic-answers-container">
                <div className="classic-answer">
                  {productsState.listWrongAnswer.map((item) => (
                    <div className="square-container square-container-item" key={item.id}>
                      <div className="square square-item">
                        <img src={item.image} alt="" />
                      </div>
                      <div className={`square square-item-1 ${item.setBgStatus.gender}`}>
                        <span>
                          <h5>{item.gender}</h5>
                        </span>
                      </div>
                      <div className={`square square-item-2 ${item.setBgStatus.positions}`}>
                        <span>
                          <h5>{Array.isArray(item.positions) ? item.positions.join(', ') : item.positions}</h5>
                        </span>
                      </div>
                      <div className={`square square-item-3 ${item.setBgStatus.species}`}>
                        <span>
                          <h5>{Array.isArray(item.species) ? item.species.join(', ') : item.species}</h5>
                        </span>
                      </div>
                      <div className={`square square-item-4 ${item.setBgStatus.resource}`}>
                        <span>
                          <h5>{item.resource}</h5>
                        </span>
                      </div>
                      <div className={`square square-item-5 ${item.setBgStatus.rangeType}`}>
                        <span>
                          <h5>{item.rangeType}</h5>
                        </span>
                      </div>
                      <div className={`square square-item-6 ${item.setBgStatus.regions}`}>
                        <span>
                          <h5>{Array.isArray(item.regions) ? item.regions.join(', ') : item.regions}</h5>
                        </span>
                      </div>
                      <div className={`square square-item-7 ${item.setBgStatus.releaseYear}`}>
                        <span>
                          <h5>{item.releaseYear}</h5>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classic;
