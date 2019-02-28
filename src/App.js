import React, { Component } from 'react';
import './App.css';
import peopleLogo from './multiple-users-silhouette.svg';
import roomLogo from './bed.svg';
import adultLogo from './man-user.svg';
import childrenLogo from './children-img.svg';

const constants = {
  MIN_ROOM_COUNT: 1,
  MAX_ROOM_COUNT: 5,
  MIN_PER_ROOM: 1,
  MAX_PER_ROOM: 4,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomCount: 1,
      adultCount: 1,
      childrenCount: 0,
      totalPeopleCount: 1,
    };

    this.validateCounts = this.validateCounts.bind(this);
  }

  validateCounts(roomCount, adultCount, childrenCount, totalPeopleCount) {


    this.setState((state, props) => ({
      roomCount: roomCount,
      adultCount: adultCount,
      childrenCount: childrenCount,
      totalPeopleCount: totalPeopleCount
    }));
  }

  render() {
    return (
      <div id="app-container">
        <div id='header-container'>
          <img
            id='people-icon'
            src={peopleLogo}
            alt='people icons'
          />
          <span id='header-text'>
            Choose number of <strong>people</strong>
          </span>
        </div>
        <div id='box-container'>
          <div
            id='room-box-container'
            className='box-inner-container'
          >
            <img
              className='box-image'
              src={roomLogo}
              alt='room-logo'
            />
            <span>ROOMS</span>

            <div className='box-button-container'>
              <button
                id='room-subtract-button'
                className='subtract-button'
                onClick={
                  () => {
                    this.validateCounts(
                      this.state.roomCount - 1,
                      this.state.adultCount,
                      this.state.childrenCount,
                      this.state.totalPeopleCount
                    );
                  }
                }
              >-</button>
              <span
                id='room-count'
                className='count-text'
              >
                {this.state.roomCount}
              </span>
              <button
                id='room-add-button'
                className='add-button'
                onClick={
                  () => {
                    this.validateCounts(
                      this.state.roomCount + 1,
                      this.state.adultCount,
                      this.state.childrenCount,
                      this.state.totalPeopleCount
                    );
                  }
                }
              >+</button>
            </div>
          </div>

          <div className='separator'></div>

          <div
            id='adult-box-container'
            className='box-inner-container'
          >
            <img
              className='box-image'
              src={adultLogo}
              alt='adult-logo'
            />
            <span>ADULTS</span>

            <div className='box-button-container'>
              <button
                id='adult-subtract-button'
                className='subtract-button'
                onClick={
                  () => {
                    this.validateCounts(
                      this.state.roomCount,
                      this.state.adultCount - 1,
                      this.state.childrenCount,
                      this.state.totalPeopleCount - 1
                    );
                  }
                }
              >-</button>
              <span
                id='adult-count'
                className='count-text'
              >
                {this.state.adultCount}
              </span>
              <button
                id='adult-add-button'
                className='add-button'
                onClick={
                  () => {
                    this.validateCounts(
                      this.state.roomCount,
                      this.state.adultCount + 1,
                      this.state.childrenCount,
                      this.state.totalPeopleCount + 1
                    );
                  }
                }
              >+</button>
            </div>
          </div>

          <div className='separator'></div>

          <div
            id='children-box-container'
            className='box-inner-container'
          >
            <img
              className='box-image'
              src={childrenLogo}
              alt='children logo'
            />
            <span>CHILDREN</span>

            <div className='box-button-container'>
              <button
                id='children-subtract-button'
                className='subtract-button'
                onClick={
                  () => {
                    this.validateCounts(
                      this.state.roomCount,
                      this.state.adultCount,
                      this.state.childrenCount - 1,
                      this.state.totalPeopleCount - 1
                    );
                  }
                }
              >-</button>
              <span
                id='children-count'
                className='count-text'
              >
                {this.state.childrenCount}
              </span>
              <button
                id='children-add-button'
                className='add-button'
                onClick={
                  () => {
                    this.validateCounts(
                      this.state.roomCount,
                      this.state.adultCount,
                      this.state.childrenCount + 1,
                      this.state.totalPeopleCount + 1
                    );
                  }
                }
              >+</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
