import React from 'react'
import './css/loader.css'
import { Oval } from 'react-loader-spinner'

export default function Loader() {
  return (
    <div className="loader">
      <Oval
        height={100}
        width={100}
        color="#008AFF"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#008AFF"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  )
}
