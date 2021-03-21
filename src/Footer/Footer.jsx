import React from 'react'

const style = {
    background: "linear-gradient(to right, rgb(225, 127, 14), rgb(146, 7, 63))",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            {/* <div style={phantom} /> */}
            <div style={style}>
                { children }
                {/* <div><a href='https://pngtree.com/free-backgrounds'>free background photos from pngtree.com</a></div> */}
            </div>
            
        </div>
    )
}

export default Footer
