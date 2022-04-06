import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import styled from 'styled-components'
import styles from './search.module.css'
import '../../index.css'

const SearchBox = () => {

  const [driverOptions, setDriverOptions] = useState(['option1', 'option2'])

  useEffect(() => {

    fetch('https://rent-cars-api.herokuapp.com/admin/car')
        .then(response => {
            return response.json()
        })
        .then(data => {
          setDriverOptions([...data.results])
        })
        .catch(err => {
            console.log(err)
        })

  }, [])

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={styles.content}>
      <Box>
        <form id="search-car" onSubmit={handleSubmit(onSubmit)} >
          <div className="container">
            <div className="search_group">
              <label htmlFor="driver">Tipe Driver</label>
              <select name="driver" id="driver" {...register('driver')}>
                  <option value="">Pilih Tipe Driver</option>
                  {driverOptions.map( (item, index) => {
                      return (
                          <option value={item} key={index}>{item}</option>
                      )
                  })}
              </select>
            </div>
            <div className="search_group">
              <label htmlFor="date">Tanggal</label>
              <input type="date" id="date" name="date" placeholder="Pilih Tanggal" {...register('date')} />
            </div>
            <div className="search_group">
              <label htmlFor="time">Waktu Jemput/Ambil</label>
              <input type="time" id="time" name="time" placeholder="Pilih Waktu" {...register('time')} />
            </div>
            <div className="search_group">
              <label htmlFor="passenger">Jumlah Penumpang (optional)</label>
              <input type="number" id="passenger" name="passenger" placeholder="Jumlah Penumpang" {...register('passenger')} />
            </div>
            <div className="submit">
              <button type="submit">Cari Mobil</button>
            </div>
          </div>
        </form>
      </Box>
    </div> 
  )
}

const Box = styled.div`
  background-color: #f2cede;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    .search_group {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      font-size: 12px;
      line-height: 18px;
      font-family: 'Rubik';
      width: 200px;
      padding: 0.5rem;
      select {
        height: 2.2rem;
        border: 1px solid #D0D0D0;
        padding: 0 .6rem;
        width: 100%;
        color: #8A8A8A;
        appearance: none;
        background-image: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDIiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgMjZhMS4yNDQgMS4yNDQgMCAwIDEtLjg4My0uMzY2bC03LjUtNy41YTEuMjUgMS4yNSAwIDAgMSAxLjc2Ny0xLjc2OEwxOSAyMi45ODFsNi42MTYtNi42MTRhMS4yNSAxLjI1IDAgMCAxIDEuNzY3IDEuNzY4bC03LjUgNy41QTEuMjQ1IDEuMjQ1IDAgMCAxIDE5IDI2WiIgZmlsbD0iI2FhYWFhYSIgY2xhc3M9ImZpbGwtMDAwMDAwIj48L3BhdGg+PC9zdmc+");
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 0px;
      }
      input {
        height: 2.2rem;
        border: 1px solid #D0D0D0;
        padding: 0 .6rem;
        width: 100%;
        &[type="date"], &[type="time"] {
          &::-webkit-calendar-picker-indicator {
            opacity: 0.6;
            filter: invert(.5);
            font-size: 16px;
          }
          &:before {
            width: 130px;
            content: attr(placeholder) !important;
            color: #8A8A8A;
            margin-right: .5em;
          }
        }
        &[type="date"]:focus:before,
        &[type="date"]:valid:before {
          content: "";
        }
        &[type="date"]:after {
          color: #8A8A8A;
        }
        &::placeholder {
          padding: 0 .6rem;
        }
      }
    }
    .submit {
      align-items: end;
      margin: 0 .5rem;
      button {
        display: block;
        position: relative;
        margin-top: 1.5rem;
        border: 0;
        border-radius: 2px;
        background-color: #5CB85F;
        color: #fff;
        font-size: 14px;
        line-height: 18px;
        padding: 8px 12px;
        width: 95px;
        height: 2.2rem;
        trasition: all 0.3s ease;
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
`

export default SearchBox