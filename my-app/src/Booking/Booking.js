import React from "react";
//import Button from "@mui/material/Button";
import './booking.css'



const Booking = () => {
  return (
    <div className="book-container">
        <div className="book-card">
            <h1>Booking Summary</h1>
            <div className="book-diamond">
                <div className="diamond">
                    <p>DIAMOND-P12,P13(2tickets)</p>
                    <p>SCREEN 44</p>
                </div>
                <div className="diamond">
                   <p>Rs.380.00</p> 
                </div>
            </div>
            <div className="fees">
                <div className="book-fees">
                    
                    <p><span><i class="bi bi-check-circle" aria-hidden="true"></i></span>Convenience fees</p>
                </div>
                <div className="book-fees">
                    <p>Rs.70.00</p>
                </div>
            </div>
            <div className="line1">

            </div>
            <div className="total">
                <div className="">
                    <p>SubTotal</p>
                </div>
                <div className="">
                    <p>Rs.450</p>
                </div>
            </div>
        
        </div>
        <div className="book-card1">
            <div className="card1-flex">
                <div>
                    <p><span></span> Contributioin to BookASmile</p>
                </div>
                <div>
                    <p>Rs2</p>
                </div>
            </div>
            <div>
                <p className="book-right">Remove</p>
            </div>
            <div>
                <p>($1)per ticket has been added</p>
                <p>VIEW T&c</p>
                <div className="book-dotline">

                </div>
            </div>

        </div>
    </div>
    // <div class="book-container">
    //     <div class="book-block1">
    //         <span class="book-heading">BOOKING SUMMARY</span><br/><br/>
    //         <div id="line1">
    //             <div >DIAMOND-P12,P13
    //                 <small>(2 Tickets)</small>
    //             </div>
    //             <div>Rs.380.00</div>
    //         </div>
    //         <small style="color:#999; margin-left: 20px;">SCREEN 4</small>
    //         <div id="line1">
    //             <div >Convenience fees
    //             </div>
    //             <div>Rs.70.80</div>
    //         </div><br/>
    //         <hr/>
    //         <div id="line1" class="total">
    //             <div >SubTotal
    //             </div>
    //             <div>Rs.450.80</div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Booking