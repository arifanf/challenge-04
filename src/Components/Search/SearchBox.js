import React from 'react'

import styled from 'styled-components'
import styles from './search.module.css'
import '../../index.css'

const SearchBox = () => {

  return (
    <div className={styles.content}>
      <Box>
        <div className="search">
          <div className="container">
            <label htmlFor="">Tipe Driver</label>
            <input type="button" value="Driver" placeholder="Pilih Tipe Driver" />
          </div>
          <div className="container">
            <label htmlFor="">Tanggal</label>
            <input type="date" placeholder="Pilih Tanggal" />
          </div>
          <div className="container">
            <label htmlFor="">Waktu Jemput/Ambil</label>
            <input type="text" placeholder="Pilih Waktu" />
          </div>
          <div className="container">
            <label htmlFor="">Jumlah Penumpang (optional)</label>
            <input type="number" placeholder="Jumlah Penumpang" />
          </div>
          <button className="search-btn">Cari Mobil</button>
        </div>
      </Box>
    </div> 
  )
}

const Box = styled.div`
  background-color: #f2cede;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    .container {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      line-height: 18px;
      font-family: 'Rubik';
      width: 200px;
      padding: 0.5rem;
      input {
        height: 2.2rem;
        border: 1px solid #D0D0D0;
        padding: 0 .6rem;
        &[type="button"] {
          display: flex;
          flex-direction: row;
          padding-left: .6rem;
          cursor: pointer; 
        }
        &[type="date"] {
          &::-webkit-calendar-picker-indicator {
            opacity: 0.6;
            filter: invert(.5);
          }
          &:before {
            width: 120px;
            content: attr(placeholder) !important;
            color: #aaa;
            margin-right: .5em;
          }
        }
        &[type="date"]:focus:before,
        &[type="date"]:valid:before {
          content: "";
        }
        &[type="date"]:after {
          color: #aaa;
        }
        &::placeholder {
          padding: 0 .6rem;
        }
      }
    }
    .search-btn {
      display: block;
      position: relative;
      border: 0;
      border-radius: 2px;
      background-color: #5CB85F;
      color: #fff;
      font-size: 14px;
      line-height: 18px;
      padding: 8px 12px;
      margin-top: .8rem;
      margin-left: 1rem;
      width: 92px;
      height: 2.2rem; 
      trasition: all 0.3s ease;
      &:hover {
        font-weight: bold;
      }
    }
  }
`

export default SearchBox